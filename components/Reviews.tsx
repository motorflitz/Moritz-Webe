import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    author: "FRIZZ Magazin",
    text: "5 von 6 Punkten in den Kategorien Essen, Service und Ambiente. Ein echter Spitzenwert für Frankfurt.",
    source: "Presse",
    rating: 5
  },
  {
    author: "Google Review",
    text: "Bestes Frankfurter Restaurant mit griechischer Note. Zarte Lammkoteletts und eine herzliche Atmosphäre.",
    source: "Gast 2025",
    rating: 5
  },
  {
    author: "Gastro-Guide",
    text: "Gehört mit Sicherheit zu den besten Griechen der Stadt. Authentische Köstlichkeiten.",
    source: "Guide",
    rating: 5
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c2985b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
            <div className="flex text-brand-gold">
              {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Exzellent bewertet</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">Stimmen unserer Gäste</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <Quote size={40} className="text-brand-gold mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="font-serif text-xl md:text-2xl italic leading-relaxed mb-8 text-gray-300 group-hover:text-white transition-colors">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <p className="font-sans font-bold uppercase tracking-widest text-sm text-brand-gold mb-1">
                  {review.author}
                </p>
                <p className="text-xs text-gray-500 font-serif italic">
                  Via {review.source}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;