import React, { useState, useEffect } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import { NavLink } from './NavLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="h-8 w-8 text-indigo-500" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Hyperbots
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How it Works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavLink href="#features" onClick={() => setIsOpen(false)}>Features</NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How it Works</NavLink>
            <NavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</NavLink>
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;