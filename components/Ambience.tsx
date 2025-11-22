import React from 'react';
import { Sun, Heart, Utensils } from 'lucide-react';

const Ambience: React.FC = () => {
  return (
    <section id="ambience" className="py-24 md:py-32 bg-brand-cream border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-brand-gold font-sans font-bold uppercase tracking-widest-xl text-xs block mb-4">
            Das Erlebnis
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark font-medium mb-6 leading-tight">
            Ein Stück Zuhause in <br/><span className="italic text-brand-gold">Sachsenhausen</span>
          </h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed">
            Wir sind kein gestyltes Design-Restaurant, sondern ein Ort mit echter Geschichte. 
            Das Qualitätseck verbindet den Charme einer Frankfurter Eckkneipe mit mediterraner Wärme.
          </p>
        </div>

        {/* 3 Column Grid - High End Editorial Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Feature 1: Terrace */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center mb-8 group-hover:border-brand-gold transition-colors duration-500 shadow-sm">
              <Sun size={28} className="text-brand-dark stroke-1" />
            </div>
            <h3 className="font-serif text-2xl text-brand-dark mb-4">Die Sonnenterrasse</h3>
            <p className="text-gray-500 font-light leading-relaxed text-balance">
              Unser Außenbereich auf dem Eckplatz ist im Sommer das Herzstück. Genießen Sie die letzten Sonnenstrahlen des Tages und beobachten Sie das entspannte Treiben im Viertel – fast wie in einem kleinen Dorf mitten in Frankfurt.
            </p>
          </div>

          {/* Feature 2: Interior */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center mb-8 group-hover:border-brand-gold transition-colors duration-500 shadow-sm">
               <Utensils size={28} className="text-brand-dark stroke-1" />
            </div>
            <h3 className="font-serif text-2xl text-brand-dark mb-4">Traditionelles Ambiente</h3>
            <p className="text-gray-500 font-light leading-relaxed text-balance">
              Dunkle Holzmöbel, schlichte Dekoration und keine überflüssigen Schnörkel. Wir bewahren bewusst den gemütlichen Charakter einer traditionellen Eckkneipe, in der man sich sofort willkommen fühlt.
            </p>
          </div>

          {/* Feature 3: Hospitality (Ouzo) */}
          <div className="flex flex-col items-center text-center group">
             <div className="w-20 h-20 rounded-full bg-white border border-brand-gold/20 flex items-center justify-center mb-8 group-hover:border-brand-gold transition-colors duration-500 shadow-sm">
              <Heart size={28} className="text-brand-dark stroke-1" />
            </div>
            <h3 className="font-serif text-2xl text-brand-dark mb-4">Gelebte Gastfreundschaft</h3>
            <p className="text-gray-500 font-light leading-relaxed text-balance">
              Bei Inhaber Kosta ist der Service noch persönlich. Als Zeichen echter griechischer Gastfreundschaft laden wir unsere Gäste nach dem Essen gerne auf einen <strong>Ouzo aufs Haus</strong> ein – eine lieb gewonnene Tradition, die unsere Besucher besonders schätzen.
            </p>
          </div>

        </div>

        {/* Decorative Divider */}
        <div className="flex justify-center mt-20 opacity-30">
           <div className="h-px w-24 bg-brand-dark"></div>
        </div>

      </div>
    </section>
  );
};

export default Ambience;