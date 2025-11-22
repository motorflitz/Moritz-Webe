import React from 'react';
import { Award, Wine, Music, Accessibility, ArrowUpRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="text-brand-gold font-sans font-bold uppercase tracking-widest-xl text-xs block mb-4">
            Hinter den Kulissen
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark font-medium leading-tight">
            Unsere Philosophie:<br />
            <span className="italic text-gray-400">Ehrlichkeit auf dem Teller.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-fr">
          
          {/* Card 1: Quality (Main Feature - Dark) */}
          <div className="md:col-span-7 lg:col-span-8 relative group overflow-hidden rounded-sm bg-brand-dark text-white p-6 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-gold/20 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                <Award size={20} className="md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4">Frische & Qualität</h3>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg max-w-xl">
                Der Name „Qualitätseck“ ist unser täglicher Antrieb. Wir verarbeiten ausschließlich frische, hochwertige Zutaten. Vom herzhaften Schmortopf bis zur hausgemachten Pavlova – bei uns wird mit echter Leidenschaft und ohne Kompromisse gekocht.
              </p>
            </div>
          </div>

          {/* Card 2: Wine Image (Visual) */}
          <div className="md:col-span-5 lg:col-span-4 relative group overflow-hidden rounded-sm min-h-[200px] md:min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop" 
              alt="Ausgewählte Weine" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 md:p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 text-white mb-2">
                <Wine size={20} strokeWidth={1.5} className="text-brand-gold" />
                <span className="font-serif text-xl">Edle Tropfen</span>
              </div>
              <p className="text-white/80 text-sm font-light">
                Wir beraten Sie persönlich zum passenden Wein – ob lokal oder griechisch.
              </p>
            </div>
          </div>

          {/* Card 3: Music (Light) */}
          <div className="md:col-span-6 lg:col-span-4 bg-brand-cream p-6 md:p-8 rounded-sm border border-transparent hover:border-brand-gold/30 transition-colors duration-300 group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white rounded-full shadow-sm text-brand-dark group-hover:text-brand-gold transition-colors">
                <Music size={24} strokeWidth={1.5} />
              </div>
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 text-brand-gold transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300" />
            </div>
            <h3 className="font-serif text-2xl text-brand-dark mb-3">Live-Musik & Events</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Zu besonderen Anlässen sorgt Live-Musik für Stimmung. Diese Abende in geselliger Runde sind bei unseren Stammgästen besonders beliebt.
            </p>
          </div>

          {/* Card 4: Accessibility (Light) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white border border-gray-100 p-6 md:p-8 rounded-sm hover:shadow-lg transition-shadow duration-300 group">
             <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-gray-50 rounded-full text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <Accessibility size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-serif text-2xl text-brand-dark mb-3">Zugänglichkeit</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Trotz des traditionellen Gebäudes ist unser Restaurant eingeschränkt barrierefrei. Wir helfen Ihnen gerne vor Ort, damit sich jeder Gast wohlfühlt.
            </p>
          </div>

          {/* Card 5: Quote / Filler */}
          <div className="md:col-span-12 lg:col-span-4 bg-brand-gold p-8 rounded-sm flex flex-col justify-center items-center text-center text-white relative overflow-hidden min-h-[150px]">
            <div className="absolute inset-0 bg-brand-goldDark opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="font-serif italic text-xl mb-2">„Kochen mit Herz.“</p>
              <p className="font-sans text-xs font-bold uppercase tracking-widest opacity-80">Kosta Christakis</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;