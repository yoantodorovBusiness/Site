import React from 'react';
import { APP_NAME } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {currentYear} {APP_NAME}. All rights reserved.</p>
      <p className="text-sm text-gray-400 mt-1">Вашият партньор за сертификация по международни стандарти.</p>
    </footer>
  );
};

export default Footer;
