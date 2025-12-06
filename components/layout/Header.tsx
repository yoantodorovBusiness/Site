import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LeafIcon } from '../ui/IconComponents';

const Header: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors px-3 py-2 rounded-md text-sm font-medium ${
      isActive 
        ? 'text-primary-dark bg-green-50' 
        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
    }`;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-1.5 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors">
            <LeafIcon className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col">
             <span className="text-2xl font-bold text-gray-800 tracking-wider leading-none">KaCert</span>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-2 md:space-x-4">
            <li>
              <NavLink to="/" className={navLinkClasses} end>
                Начало
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClasses}>
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/ai-consultant" className={navLinkClasses}>
                AI Консултант
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={navLinkClasses}>
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;