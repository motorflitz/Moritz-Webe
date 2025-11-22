import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: 'Über Uns', href: '#about' },
    { name: 'Speisekarte', href: '#menu' },
    { name: 'Meinungen', href: '#reviews' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200/50 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group">
          <h1 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide flex items-center">
            <span 
              key={`text-qual-${isScrolled}`} 
              className={`animate-subtle-slide-in ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
            >
              Qualitäts
            </span>
            <span 
              key={`text-eck-${isScrolled}`} 
              className={`animate-subtle-slide-in [animation-delay:150ms] ${isScrolled ? 'text-brand-gold' : 'text-brand-gold'}`}
            >
              eck
            </span>
          </h1>
          <div className={`h-0.5 bg-brand-gold transition-all duration-500 ease-out mt-1 ${isScrolled ? 'w-0 group-hover:w-full' : 'w-0'}`}></div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-xs font-bold uppercase tracking-widest-xl transition-all duration-300 hover:text-brand-gold ${
                isScrolled ? 'text-brand-charcoal' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+4969616644" 
            className={`px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
              isScrolled 
                ? 'border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-brand-dark'
            }`}
          >
            Reservieren
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors ${isScrolled ? 'text-brand-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Full Screen refined */}
      <div className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col justify-center items-center`}>
        <button 
          className="absolute top-6 right-6 text-white/70 hover:text-white"
          onClick={() => setIsOpen(false)}
        >
           <X size={32} strokeWidth={1} />
        </button>
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-serif text-3xl text-white font-light hover:text-brand-gold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
             href="tel:+4969616644" 
             className="mt-8 px-8 py-3 bg-brand-gold text-white text-sm uppercase tracking-widest font-bold"
             onClick={() => setIsOpen(false)}
          >
            Anrufen
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;