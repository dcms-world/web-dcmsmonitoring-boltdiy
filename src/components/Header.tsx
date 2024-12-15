import React from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { scrollTo } from '../utils/scrollTo';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Activity className="h-8 w-8 text-emerald-400 absolute animate-pulse" />
              <Activity className="h-8 w-8 text-emerald-500 rotate-45" />
            </div>
            <span className="text-xl font-bold text-white">DCMS Monitoring</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Preise
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Kontakt
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="block text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="block text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleNavClick(e, 'pricing')}
              className="block text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Preise
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block text-gray-300 hover:text-emerald-400 transition-colors"
            >
              Kontakt
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
