'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const categories = [
  {
    emoji: '🧀',
    title: 'Cremes auf Frischkäsebasis',
    teaser: 'Täglich frisch, nach eigener Rezeptur aus hochwertigen Zutaten.',
    items: ['Kräutercreme', 'Paprika-Feta-Creme', 'Knoblauchcreme', 'Chili-Creme', 'Tomaten-Basilikum-Creme'],
    color: '#C05020',
  },
  {
    emoji: '🫒',
    title: 'Mediterrane Spezialitäten',
    teaser: 'Antipasti und mediterrane Platten, die den Süden nach Karlsfeld bringen.',
    items: ['Antipasti', 'Eingelegte Oliven', 'Gefüllte Peperoni', 'Gegrilltes Gemüse', 'Mediterrane Feinkostplatten'],
    color: '#3D6E0F',
  },
  {
    emoji: '🥗',
    title: 'Mittagssnacks',
    teaser: 'Leichte, frische Snacks für die Mittagspause – zum Mitnehmen oder Genießen.',
    items: ['Frische Snacks zum Mitnehmen', 'Belegte Spezialitäten', 'Kleine Mittagsgerichte', 'Leichte Feinkostboxen'],
    color: '#8A6820',
  },
  {
    emoji: '🍽️',
    title: 'Catering & Vorbestellungen',
    teaser: 'Individuelles Catering für jeden Anlass, frisch und maßgeschneidert.',
    items: ['Feinkostplatten für Feiern', 'Catering für Firmen', 'Private Events', 'Individuelle Vorbestellungen', 'Persönliche Beratung'],
    color: '#3D6E0F',
  },
];

export default function SpecialtiesLight() {
  const [active, setActive]     = useState<number | null>(null);
  const [rendered, setRendered] = useState<number | null>(null);
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggle = useCallback((i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (active === i) {
      setActive(null);
      closeTimer.current = setTimeout(() => setRendered(null), 460);
    } else {
      setRendered(i);
      setActive(i);
    }
  }, [active]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const isOpen = active !== null;

  return (
    <section id="spezialitaeten-l" className="py-24 md:py-32 bg-[#F4EDE2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#C05020]" />
            <span className="text-[#C05020] text-xs font-semibold tracking-[0.2em] uppercase">Was wir anbieten</span>
          </div>
          <h2
            className="text-[#2A2018]"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Unsere Spezialitäten
          </h2>
          <p className="mt-4 text-[#6B5E4A] text-base max-w-xl leading-relaxed">
            Klicken Sie auf eine Kategorie, um konkrete Produkte zu entdecken.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const isActive = active === i;
            return (
              <button
                key={cat.title}
                onClick={() => toggle(i)}
                className={`text-left rounded-2xl p-6 border-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#3D6E0F] focus-visible:outline-offset-2 ${
                  isActive
                    ? 'bg-white border-[#3D6E0F] shadow-lg scale-[1.01]'
                    : 'bg-white border-transparent hover:border-[#E0D5C0] hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                <span className="text-2xl mb-4 block">{cat.emoji}</span>
                <h3
                  className={`mb-2 leading-snug ${isActive ? 'text-[#3D6E0F]' : 'text-[#2A2018]'}`}
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontWeight: 600 }}
                >
                  {cat.title}
                </h3>
                <p className="text-[#6B5E4A] text-sm leading-relaxed">{cat.teaser}</p>
                <span className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide ${isActive ? 'text-[#3D6E0F]' : 'text-[#8A6820]'}`}>
                  {isActive ? '↑ Schließen' : '↓ Produkte anzeigen'}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="expand-grid mt-4"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="expand-inner">
            {rendered !== null && (
              <div className="bg-white border-2 border-[#3D6E0F]/20 rounded-2xl p-7 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categories[rendered].emoji}</span>
                  <h3
                    className="text-[#2A2018]"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 500 }}
                  >
                    {categories[rendered].title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {categories[rendered].items.map((item) => (
                    <li
                      key={item}
                      className="bg-[#F4EDE2] border border-[#E0D5C0] text-[#2A2018]
                                 rounded-xl px-4 py-2.5 text-sm font-medium
                                 hover:border-[#3D6E0F]/50 hover:bg-[#EDE4D3]
                                 transition-all duration-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
