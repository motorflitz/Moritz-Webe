import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/Moritz/gastro_qualita%CC%88tseck-(1-von-1).jpg")'
        }}
      >
        {/* Elegant Overlay: Gradient from dark bottom to semi-transparent top */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-0 pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
            <span className="h-[1px] w-8 md:w-12 bg-brand-gold/70"></span>
            <span className="font-sans text-brand-gold uppercase tracking-widest-xl text-[10px] md:text-sm font-semibold">
              Sachsenhausen, Frankfurt
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-brand-gold/70"></span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-medium mb-6 md:mb-8 leading-tight tracking-tight">
            Tradition trifft<br/>
            <span className="italic text-brand-cream/90">Lebensfreude</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 font-light leading-relaxed max-w-2xl mx-auto text-balance px-2">
            Seit über 60 Jahren verbinden wir deutsche Hausmannskost mit griechischer Gastfreundschaft. 
            Ehrlich. Herzlich. Authentisch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-6 sm:px-0">
            <a 
              href="#menu" 
              className="w-full sm:w-auto min-w-[180px] px-8 py-4 bg-brand-gold text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-brand-goldDark transition-all duration-300"
            >
              Zur Speisekarte
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto min-w-[180px] px-8 py-4 bg-transparent border border-white/30 text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300"
            >
              Tisch anfragen
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="text-[10px] uppercase tracking-widest text-white/60">Entdecken</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;