import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-cream border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h4 className="font-serif text-2xl font-bold text-brand-dark mb-1">Qualitätseck</h4>
            <p className="text-xs font-sans font-bold uppercase tracking-widest text-brand-gold">Frankfurt Sachsenhausen</p>
          </div>

          <div className="flex gap-8">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-dark hover:text-brand-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-brand-dark hover:text-brand-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Qualitätseck.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-dark transition-colors">Impressum</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;