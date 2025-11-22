import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';

const SpecialFeature: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=2000&auto=format&fit=crop" 
          alt="Griechische Spezialitäten" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/80"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold font-sans font-bold uppercase tracking-widest-xl text-xs block mb-6">
              Besondere Empfehlung
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8 leading-tight">
              Melitzanes <br/>
              <span className="italic text-brand-gold">„Binding“ Art</span>
            </h2>
            <p className="text-gray-300 font-light text-lg leading-relaxed mb-8">
              Ein Highlight, das sogar die Frankfurter Traditionsbrauerei <strong>Binding</strong> besonders hervorgehoben hat: 
              Unsere gebackenen Auberginen mit cremigem Tsatziki und Manourikäse im knusprigen Sesammantel.
            </p>
            <p className="text-gray-400 font-light mb-10">
              Der perfekte Begleiter dazu? Ein Glas gut gekühlter, griechischer Retsina-Wein. 
              Diese Kombination aus Frankfurter Brauerei-Empfehlung und griechischer Tradition steht sinnbildlich für unser Haus.
            </p>

            <div className="flex gap-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-white font-sans text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300"
              >
                <span>Auf Facebook folgen</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Visual/Social Card */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-sm">
              <div className="absolute -top-6 -right-6 text-brand-gold opacity-20">
                <Instagram size={120} strokeWidth={0.5} />
              </div>
              
              <h3 className="font-serif text-2xl mb-4 text-white">Bleiben Sie aktuell</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Wir pflegen keine klassische Website, sondern leben den direkten Austausch. 
                Aktuelle Tagesgerichte (wie frische Pfifferlinge im Sommer), saisonale Aktionen oder geänderte Öffnungszeiten teilen wir direkt über unsere Social-Media-Kanäle.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-brand-charcoal hover:bg-brand-gold transition-colors duration-300 cursor-pointer rounded-sm border border-white/5">
                  <Instagram size={24} className="mb-3 text-gray-300 group-hover:text-white" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">Instagram</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group flex flex-col items-center justify-center p-6 bg-brand-charcoal hover:bg-[#1877F2] transition-colors duration-300 cursor-pointer rounded-sm border border-white/5">
                  <Facebook size={24} className="mb-3 text-gray-300 group-hover:text-white" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white">Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialFeature;