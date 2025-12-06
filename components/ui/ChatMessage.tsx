
import React from 'react';
import { ChatMessage as ChatMessageType } from '../../types';
import { UserIcon, BotIcon } from './IconComponents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const ChatMessage: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  const isUser = message.sender === 'user';
  const isAdmin = message.sender === 'ai' || message.sender === 'system'; // Treat system like AI for display

  const bgColor = isUser ? 'bg-accent text-white' : (message.error ? 'bg-red-100 text-red-700' : 'bg-white text-gray-800');
  const alignment = isUser ? 'items-end' : 'items-start';
  const bubbleAlignment = isUser ? 'ml-auto' : 'mr-auto';
  const icon = isUser ? <UserIcon className="w-6 h-6 text-accent" /> : <BotIcon className={`w-6 h-6 ${message.error ? 'text-red-500' : 'text-primary'}`} />;

  return (
    <div className={`flex flex-col mb-4 ${alignment}`}>
      <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 p-2 rounded-full ${isUser ? 'bg-white' : 'bg-gray-200'}`}>
          {icon}
        </div>
        <div
          className={`max-w-xl lg:max-w-2xl px-4 py-3 rounded-lg shadow-md ${bgColor} ${bubbleAlignment}`}
        >
          <div className="prose prose-sm max-w-none text-inherit"> {/* Ensure markdown inherits text color */}
             <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.text}
            </ReactMarkdown>
          </div>
          <p className={`text-xs mt-2 ${isUser ? 'text-blue-200' : 'text-gray-500'}`}>
            {message.timestamp.toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
    