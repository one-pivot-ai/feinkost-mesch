'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const categories = [
  {
    emoji: '🧀',
    title: 'Cremes auf Frischkäsebasis',
    teaser: 'Täglich frisch, nach eigener Rezeptur aus hochwertigen Zutaten.',
    items: ['Kräutercreme', 'Paprika-Feta-Creme', 'Knoblauchcreme', 'Chili-Creme', 'Tomaten-Basilikum-Creme'],
  },
  {
    emoji: '🫒',
    title: 'Mediterrane Spezialitäten',
    teaser: 'Antipasti und mediterrane Platten, die den Süden nach Karlsfeld bringen.',
    items: ['Antipasti', 'Eingelegte Oliven', 'Gefüllte Peperoni', 'Gegrilltes Gemüse', 'Mediterrane Feinkostplatten'],
  },
  {
    emoji: '🥗',
    title: 'Mittagssnacks',
    teaser: 'Leichte, frische Snacks für die Mittagspause – zum Mitnehmen oder Genießen.',
    items: ['Frische Snacks zum Mitnehmen', 'Belegte Spezialitäten', 'Kleine Mittagsgerichte', 'Leichte Feinkostboxen'],
  },
  {
    emoji: '🍽️',
    title: 'Catering & Vorbestellungen',
    teaser: 'Individuelles Catering für jeden Anlass, frisch und maßgeschneidert.',
    items: ['Feinkostplatten für Feiern', 'Catering für Firmen', 'Private Events', 'Individuelle Vorbestellungen', 'Persönliche Beratung'],
  },
];

function useReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [ref]);
}

export default function Specialties() {
  // `active`   = welche Karte gerade offen ist (oder null)
  // `rendered` = was im Panel gerendert wird (bleibt während Close-Animation erhalten)
  const [active, setActive]     = useState<number | null>(null);
  const [rendered, setRendered] = useState<number | null>(null);
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef              = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const toggle = useCallback((i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);

    if (active === i) {
      // Schließen: Grid-Animation läuft 450ms, danach Inhalt aushängen
      setActive(null);
      closeTimer.current = setTimeout(() => setRendered(null), 460);
    } else {
      // Öffnen / Wechseln: Inhalt sofort setzen, Panel öffnen
      setRendered(i);
      setActive(i);
    }
  }, [active]);

  useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current); }, []);

  const isOpen = active !== null;

  return (
    <section id="spezialitaeten" className="py-24 md:py-32 bg-[#131009]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="mb-14 reveal">
          <span className="eyebrow">Was wir anbieten</span>
          <h2
            className="mt-4 text-[#EDE9E3]"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Unsere Spezialitäten
          </h2>
          <p className="mt-4 text-[#8A8078] text-base max-w-xl leading-relaxed">
            Klicken Sie auf eine Kategorie, um konkrete Produkte aus unserem Sortiment zu entdecken.
          </p>
        </div>

        {/* Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const isActive = active === i;
            return (
              <button
                key={cat.title}
                onClick={() => toggle(i)}
                className={`reveal reveal-d${i + 1} text-left rounded-2xl p-6 border transition-all duration-300
                  focus-visible:outline-2 focus-visible:outline-[#C49A3C] focus-visible:outline-offset-2
                  ${isActive
                    ? 'bg-[#C49A3C] border-[#C49A3C] shadow-[0_8px_30px_rgba(196,154,60,0.3)] scale-[1.01]'
                    : 'bg-[#1C1812] border-[rgba(255,255,255,0.06)] hover:border-[rgba(196,154,60,0.3)] hover:bg-[#221E17] hover:-translate-y-0.5'
                  }`}
              >
                <span className="text-2xl mb-4 block">{cat.emoji}</span>
                <h3
                  className={`mb-2 leading-snug transition-colors ${isActive ? 'text-[#0A0806]' : 'text-[#EDE9E3]'}`}
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.15rem', fontWeight: 600 }}
                >
                  {cat.title}
                </h3>
                <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-[#0A0806]/70' : 'text-[#8A8078]'}`}>
                  {cat.teaser}
                </p>
                <span className={`mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors ${isActive ? 'text-[#0A0806]/60' : 'text-[#C49A3C]'}`}>
                  {isActive ? '↑ Schließen' : '↓ Produkte anzeigen'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail-Panel – grid-rows-Trick: kein Layout-Jump, kein Flash */}
        <div
          className="expand-grid mt-4"
          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        >
          <div className="expand-inner">
            {rendered !== null && (
              <div className="bg-[#1C1812] border border-[rgba(255,255,255,0.06)] rounded-2xl p-7 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categories[rendered].emoji}</span>
                  <h3
                    className="text-[#EDE9E3]"
                    style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 500 }}
                  >
                    {categories[rendered].title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {categories[rendered].items.map((item) => (
                    <li
                      key={item}
                      className="bg-[#221E17] border border-[rgba(196,154,60,0.2)] text-[#EDE9E3]/80
                                 rounded-xl px-4 py-2.5 text-sm font-medium hover:border-[#C49A3C]/50
                                 hover:text-[#EDE9E3] transition-all duration-200"
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
