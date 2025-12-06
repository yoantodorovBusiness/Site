
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors px-3 py-2 rounded-md text-sm font-medium ${
      isActive 
        ? 'text-primary-dark bg-green-50 shadow-sm' 
        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-green-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          {/* Logo Image loaded from public directory */}
          <img 
            src="/logo.png" 
            alt="KaCert Logo" 
            className="h-16 w-auto object-contain"
            onError={(e) => {
              console.warn("Logo image not found at /logo.png. Please ensure the file is in the 'public' folder.");
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="flex flex-col justify-center">
             <span className="text-2xl font-bold tracking-tight leading-none">
                <span className="text-primary-dark">Ka</span>
                <span className="text-primary">Cert</span>
             </span>
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-2">
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
            <li>
              <NavLink to="/logo" className={navLinkClasses}>
                ЛОГО
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Mobile menu placeholder */}
        <div className="md:hidden flex items-center space-x-4">
           <NavLink to="/logo" className="text-primary font-medium text-sm">Лого</NavLink>
           <NavLink to="/contacts" className="text-primary font-medium text-sm">Меню</NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
