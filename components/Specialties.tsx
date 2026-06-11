'use client';

import { useRef, useEffect } from 'react';
import { ChefHat, Leaf, UtensilsCrossed, Users } from 'lucide-react';

const categories = [
  {
    Icon: ChefHat,
    title: 'Cremes auf Frischkäsebasis',
    teaser: 'Täglich frisch nach eigener Rezeptur. Ohne Fertigzutaten.',
    items: ['Indische Creme', 'Schnittlauch Mango Creme', 'Dattel Creme mit Nüssen', 'Auberginen Creme'],
  },
  {
    Icon: Leaf,
    title: 'Mediterrane Spezialitäten',
    teaser: 'Antipasti und mediterrane Platten aus hochwertigen Zutaten.',
    items: ['Antipasti', 'Eingelegte Oliven', 'Gefüllte Peperoni', 'Gegrilltes Gemüse', 'Mediterrane Feinkostplatten'],
  },
  {
    Icon: UtensilsCrossed,
    title: 'Mittagssnacks',
    teaser: 'Frische, leichte Snacks für die Pause, zum Mitnehmen.',
    items: ['Frische Snacks zum Mitnehmen', 'Belegte Spezialitäten', 'Kleine Mittagsgerichte', 'Leichte Feinkostboxen'],
  },
  {
    Icon: Users,
    title: 'Catering & Vorbestellungen',
    teaser: 'Feinkostplatten für Feiern, Büros und private Anlässe.',
    items: ['Feinkostplatten für Feiern', 'Catering für Firmen', 'Private Events', 'Individuelle Vorbestellungen'],
  },
];

export default function Specialties() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
  }, []);

  return (
    <section id="spezialitaeten" className="py-14 md:py-24 bg-surface" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="mb-8 md:mb-14 reveal">
          <span className="eyebrow">Was wir anbieten</span>
          <h2
            className="mt-4 text-foreground"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Unsere Spezialitäten
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {categories.map(({ Icon, title, teaser, items }, i) => (
            <div
              key={title}
              className={`group reveal reveal-d${i + 1} relative overflow-hidden rounded-2xl p-4 sm:p-6 border border-border bg-background hover:border-accent/25 hover:shadow-sm transition-[border-color,box-shadow] duration-300`}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-accent group-hover:scale-110 transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                <Icon size={17} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3
                className="mb-1.5 text-foreground leading-snug"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 600 }}
              >
                {title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-muted mb-4 sm:mb-5">
                {teaser}
              </p>
              <ul className="hidden sm:flex flex-wrap gap-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="bg-surface border border-border text-muted
                               rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
