import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ZenLeaf from './ZenLeaf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-sage bg-opacity-95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ZenLeaf />
          <span className={`font-medium text-xl transition-colors duration-500 ${
            isScrolled ? 'text-beige' : 'text-charcoal'
          }`}>
            ゼン<span className="font-light">テラリウム</span>
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className={`flex space-x-8 transition-colors duration-500 ${
            isScrolled ? 'text-beige' : 'text-charcoal'
          }`}>
            {['Home', 'Products', 'Story', 'Care', 'Testimonials'].map((item) => (
              <li key={item} className="relative group">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="py-2 hover:text-beige-dark transition-colors duration-300"
                >
                  {item}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-beige-dark group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`transition-colors duration-500 ${
              isScrolled ? 'text-beige' : 'text-charcoal'
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-sage bg-opacity-95 transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <ul className="flex flex-col space-y-4 px-4 text-beige">
          {['Home', 'Products', 'Story', 'Care', 'Testimonials'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="block py-2 hover:text-beige-dark transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;