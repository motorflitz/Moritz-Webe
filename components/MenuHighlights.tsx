import React from 'react';
import { MenuItem } from '../types';

const specials: MenuItem[] = [
  { category: "Empfehlung", name: "Red-Snapper-Filet", description: "Zartes Filet in Olivenöl und Salbei gebraten", price: "13,50 €" },
  { category: "Empfehlung", name: "Schweinefilet & Pfifferlinge", description: "Rosa gebratenes Filet mit frischen Pilzen der Saison", price: "13,50 €" },
  { category: "Empfehlung", name: "Linguine Pfifferlinge", description: "Feine Pasta mit sautierten Pfifferlingen (Saisonal)", price: "19,90 €" },
  { category: "Empfehlung", name: "Baby-Calamari", description: "Knusprig frittiert, serviert mit frischem Salat", price: "22,90 €" },
];

const classics: MenuItem[] = [
  { category: "Klassiker", name: "Der Quali-Burger", description: "Unser beliebtes Hausgericht – saftig und deftig", price: "16,50 €" },
  { category: "Klassiker", name: "Frankfurter Schnitzel", description: "Vom Schwein, mit Bratkartoffeln und Grüner Soße", price: "18,90 €" },
  { category: "Klassiker", name: "Souvlaki & Bifteki", description: "Griechische Grillklassiker mit hausgemachtem Tsatziki", price: "17,50 €" },
  { category: "Dessert", name: "Hausgemachte Pavlova", description: "Baiser-Traum mit Sahne und feiner Erdbeermarmelade", price: "9,50 €" },
];

const MenuItemRow: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="group mb-8">
    {/* Flex container handles wrapping nicely */}
    <div className="flex items-baseline justify-between w-full relative z-10">
      <h4 className="bg-white pr-2 font-serif text-lg md:text-xl text-brand-dark font-medium group-hover:text-brand-gold transition-colors">
        {item.name}
      </h4>
      
      {/* Dotted line that hides on very small screens if wrapping occurs, or shrinks */}
      <div className="flex-grow border-b border-dotted border-gray-300 mx-2 relative -top-1 min-w-[20px]"></div>
      
      <span className="bg-white pl-2 font-sans text-base font-bold text-brand-dark whitespace-nowrap">{item.price}</span>
    </div>
    <p className="text-gray-500 font-light italic mt-1 text-sm leading-relaxed">{item.description}</p>
  </div>
);

const MenuHighlights: React.FC = () => {
  return (
    <section id="menu" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-gold font-sans font-bold uppercase tracking-widest-xl text-xs block mb-4">
            Kulinarik
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark font-medium mb-6">
            Ausgewählte Speisen
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Eine Symbiose aus deftiger Frankfurter Hausmannskost und der Leichtigkeit der griechischen Küche. 
            Begleitet von ausgewählten Weinen.
          </p>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-gold whitespace-nowrap">
                Saisonale Spezialitäten
              </h3>
              <div className="h-[1px] flex-grow bg-brand-gold/30"></div>
            </div>
            <div>
              {specials.map((item, idx) => <MenuItemRow key={idx} item={item} />)}
            </div>
          </div>

          {/* Column 2 */}
          <div>
             <div className="flex items-center gap-4 mb-8 md:mb-10">
              <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-brand-gold whitespace-nowrap">
                Klassiker & Favoriten
              </h3>
              <div className="h-[1px] flex-grow bg-brand-gold/30"></div>
            </div>
            <div>
              {classics.map((item, idx) => <MenuItemRow key={idx} item={item} />)}
            </div>
          </div>
          
        </div>

        <div className="text-center mt-12 md:mt-16 border-t border-gray-100 pt-12">
          <p className="text-gray-400 font-serif italic px-4">
            Hinweis: Unsere Karte wechselt regelmäßig. Preise dienen zur Orientierung.
          </p>
          <a href="tel:+4969616644" className="inline-block mt-6 text-brand-gold border-b border-brand-gold pb-1 hover:text-brand-dark hover:border-brand-dark transition-all text-sm uppercase tracking-widest">
            Tisch reservieren
          </a>
        </div>

      </div>
    </section>
  );
};

export default MenuHighlights;