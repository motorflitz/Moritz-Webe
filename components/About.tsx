import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Editorial Image Grid */}
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
            {/* Background decorative element */}
            <div className="absolute -top-6 -left-6 lg:-top-10 lg:-left-10 w-32 h-32 lg:w-40 lg:h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000&auto=format&fit=crop" 
                alt="Traditionelle Küche" 
                className="w-full lg:w-4/5 shadow-2xl object-cover aspect-[4/5] lg:aspect-[3/4] lg:ml-auto brightness-[0.95] rounded-sm"
              />
              
              {/* Quote Box - Relative on mobile to prevent overlap, Absolute on Desktop */}
              <div className="relative mt-[-40px] mx-4 lg:mx-0 lg:mt-0 lg:absolute lg:-bottom-12 lg:-left-4 bg-white p-6 md:p-8 shadow-xl max-w-md z-20">
                <p className="font-serif text-xl md:text-3xl text-brand-dark italic leading-tight">
                  „Ein Wirt wie aus dem Lehrbuch.“
                </p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-gold">
                  — Aus einer Gästebewertung
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-8 bg-brand-gold"></span>
              <span className="text-brand-gold font-sans font-bold uppercase tracking-widest text-xs">
                Unsere Geschichte
              </span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark font-medium mb-6 md:mb-8 leading-tight">
              Ehrliche Küche mit <br/> <span className="italic text-brand-gold">Herz & Tradition</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
              <p className="mb-6">
                Das <strong className="text-brand-dark font-medium">Qualitätseck</strong> in der Hedderichstraße ist weit mehr als nur ein Restaurant – es ist eine echte Sachsenhäuser Institution. Seit den 1960er-Jahren empfängt das Eckhaus seine Gäste mit der unverwechselbaren Mischung aus Frankfurter Gemütlichkeit und lebendiger Geschichte.
              </p>
              <p className="mb-6">
                Was einst als klassische Eckkneipe begann, hat sich unter der Leitung von <strong className="text-brand-dark font-medium">Konstadinos „Kosta“ Christakis</strong> gewandelt. Kosta führt das Lokal mit purer Leidenschaft. Seine Philosophie ist so einfach wie anspruchsvoll: Qualität steht über allem.
              </p>
              <p>
                Hier trifft das deftige Schnitzel auf das zarte Souvlaki, der Äppler auf den Ouzo. Es ist diese persönliche Note, das Gefühl, nach Hause zu kommen, und die Gewissheit, dass jeder Teller mit Hingabe zubereitet wird, die unsere Gäste zu Freunden macht.
              </p>
            </div>

            <div className="mt-10">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Signature_sample.svg/1200px-Signature_sample.svg.png" 
                alt="Unterschrift" 
                className="h-10 md:h-12 opacity-40" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;