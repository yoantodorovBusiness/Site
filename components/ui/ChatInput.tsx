
import React, { useState } from 'react';
import Button from './Button';
import { SendIcon } from './IconComponents';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-4 bg-white border-t border-gray-200 rounded-b-lg">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Попитайте нещо за земеделието в България..."
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none min-h-[48px] max-h-[150px]"
        rows={1}
        disabled={isLoading}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
          }
        }}
      />
      <Button type="submit" variant="primary" size="md" isLoading={isLoading} disabled={!input.trim()}>
        <SendIcon className="w-5 h-5" />
        <span className="ml-2 hidden sm:inline">Изпрати</span>
      </Button>
    </form>
  );
};

export default ChatInput;
    