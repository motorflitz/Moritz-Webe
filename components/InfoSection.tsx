import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* Contact */}
          <div className="lg:pr-12 pb-12 lg:pb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-brand-gold mb-6">
              <Phone size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-dark mb-4">Kontakt</h3>
            <p className="text-gray-500 font-light mb-6 leading-relaxed">
              Wir nehmen Reservierungen gerne persönlich entgegen. Rufen Sie uns einfach an.
            </p>
            <a href="tel:+4969616644" className="text-3xl font-serif text-brand-dark hover:text-brand-gold transition-colors">
              069 61 66 44
            </a>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-gold/80">
              Keine Online-Reservierung
            </p>
          </div>

          {/* Address */}
          <div className="lg:px-12 py-12 lg:py-0 flex flex-col items-center lg:items-start text-center lg:text-left">
             <div className="text-brand-gold mb-6">
              <MapPin size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-dark mb-4">Standort</h3>
            <address className="not-italic text-gray-500 font-light text-lg leading-relaxed mb-4">
              Hedderichstraße 132<br />
              60596 Frankfurt am Main<br />
              Sachsenhausen
            </address>
            <a 
              href="https://maps.google.com/?q=Qualitätseck+Hedderichstraße+132+Frankfurt" 
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold uppercase tracking-widest text-brand-dark border-b border-gray-300 hover:border-brand-dark pb-1 transition-all"
            >
              Route planen
            </a>
          </div>

          {/* Hours */}
          <div className="lg:pl-12 pt-12 lg:pt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="text-brand-gold mb-6">
              <Clock size={32} strokeWidth={1} />
            </div>
            <h3 className="font-serif text-2xl font-medium text-brand-dark mb-4">Öffnungszeiten</h3>
            <div className="space-y-3 text-gray-500 font-light w-full max-w-xs">
              <div className="flex justify-between">
                <span className="font-medium text-brand-dark">Mo</span>
                <span>Ruhetag</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-brand-dark">Di – Sa</span>
                <span>17:00 – 00:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-brand-dark">So</span>
                <span className="text-right">
                  12:00 – 15:00 <br/> 17:00 – 00:00
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;