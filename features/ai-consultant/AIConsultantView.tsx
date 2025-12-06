import React, { useState, useEffect, useRef } from 'react';
import { Chat } from '@google/genai';
import { ChatMessage as ChatMessageType, GroundingMetadata, GroundingChunk, GroundingChunkWeb } from '../../types';
import ChatMessage from '../../components/ui/ChatMessage';
import ChatInput from '../../components/ui/ChatInput';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { createChatSession, sendMessage } from '../../services/geminiService';
import { SYSTEM_INSTRUCTION, INITIAL_AI_MESSAGE, APP_NAME } from '../../constants';
import { LightBulbIcon } from '../../components/ui/IconComponents';

const AIConsultantView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Initialize chat session
    try {
        chatSessionRef.current = createChatSession(SYSTEM_INSTRUCTION);
        // Add initial greeting message from AI
        setMessages([
          {
            id: 'initial-ai-message',
            sender: 'ai',
            text: INITIAL_AI_MESSAGE,
            timestamp: new Date(),
          },
        ]);
    } catch (error: any) { // Catch 'any' to inspect error properties
        console.error("Failed to initialize chat session:", error);
        let specificError = `Грешка при инициализация на AI консултанта за ${APP_NAME}. Моля, проверете конзолата или опреснете страницата. (Error initializing AI consultant for ${APP_NAME}. Please check console or refresh.)`;
        
        if (error instanceof Error) {
            const lowerMessage = error.message.toLowerCase();
            if (lowerMessage.includes("api key") || 
                lowerMessage.includes("googlegenai client was not initialized") ||
                lowerMessage.includes("authentication") ||
                lowerMessage.includes("permission denied")) {
                specificError = `Грешка при инициализация на AI: Проблем с API ключа или конфигурацията на услугата. Моля, уверете се, че API ключът е валиден и правилно конфигуриран. (AI Initialization Error: API Key or service configuration issue. Please ensure the API Key is valid and correctly configured.)`;
            } else {
                specificError = `Грешка при инициализация на AI: ${error.message}`;
            }
        }
        
        setMessages([
          {
            id: 'init-error',
            sender: 'system',
            text: specificError,
            timestamp: new Date(),
            error: true,
          },
        ]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (userInput: string) => {
    if (!chatSessionRef.current) {
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: 'system',
          text: 'AI чат сесията не е инициализирана или е възникнал проблем. Моля, опреснете страницата. (AI chat session not initialized or an issue occurred. Please refresh the page.)',
          timestamp: new Date(),
          error: true,
        },
      ]);
      return;
    }

    const newUserMessage: ChatMessageType = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setIsLoading(true);

    try {
      const aiResponse = await sendMessage(chatSessionRef.current, userInput);
      
      let responseText = aiResponse.text;
      const groundingMeta = aiResponse.groundingMetadata as GroundingMetadata | undefined;
      if (groundingMeta?.groundingChunks && groundingMeta.groundingChunks.length > 0) {
        const sources = groundingMeta.groundingChunks
          .map((chunk: GroundingChunk) => chunk.web)
          .filter((web): web is GroundingChunkWeb => web !== undefined)
          .map((web) => `[${web.title || 'Източник'}](${web.uri})`) // Changed 'Source' to Bulgarian
          .join('\n - ');
        if (sources) {
          responseText += `\n\n**Източници:**\n - ${sources}`; // Changed to Bulgarian
        }
      }

      const newAiMessage: ChatMessageType = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseText,
        timestamp: new Date(),
        error: responseText.startsWith("Грешка") || responseText.startsWith("Error:"), // Check for "Error:" prefix too
      };
      setMessages((prevMessages) => [...prevMessages, newAiMessage]);
    } catch (error) { // This catch might be redundant if sendMessage handles all its errors and returns an error message object
      console.error("Error in handleSendMessage's top-level catch:", error);
      const errorMessage: ChatMessageType = {
        id: `error-${Date.now()}`,
        sender: 'system',
        text: 'Възникна неочаквана грешка при изпращане на съобщението. Моля, опитайте отново. (An unexpected error occurred while sending the message. Please try again.)',
        timestamp: new Date(),
        error: true,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const suggestionPrompts = [
    "Какви са ползите от GLOBALG.A.P. сертификация за производители на плодове?",
    "Каква е разликата между IFS Food и ISO 22000?",
    "Обяснете процеса за сертификация по ISO 9001.",
    "Предлагате ли поддръжка след получаване на сертификат?",
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg flex flex-col h-[calc(100vh-200px)] max-h-[700px] ">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <LightBulbIcon className="w-6 h-6 text-primary mr-2" />
          AI Консултант от {APP_NAME}
        </h2>
        <p className="text-sm text-gray-500">Вашият виртуален помощник за въпроси относно сертификацията.</p>
      </div>

      <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-50 custom-scrollbar">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isLoading && (
          <div className="flex justify-center py-2">
            <LoadingSpinner size="sm" message="AI обработва вашата заявка..." />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {!isLoading && messages.filter(m => m.sender !== 'system' || !m.error).length <= 1 && ( // Show suggestions if chat is new (only initial AI message or empty) and not loading, and no system error is the first message
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm font-medium text-gray-700 mb-2">Примерни въпроси:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestionPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(prompt)}
                className="text-left p-2 bg-white hover:bg-primary-light border border-gray-200 rounded-md text-xs text-gray-600 hover:text-white transition-colors"
                aria-label={`Изпрати примерен въпрос: ${prompt}`}
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
};

export default AIConsultantView;