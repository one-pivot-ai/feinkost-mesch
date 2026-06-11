'use client';

import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const MAPS_URL =
  'https://www.google.com/maps/place/Feinkost+Mesch+Partyservice+%26+Catering/@48.2339831,11.5149408,15.62z/data=!4m8!3m7!1s0x479e70aa6f9e2805:0x46c0b5a04acb65da!8m2!3d48.2280862!4d11.4814428!9m1!1b1!16s%2Fg%2F1v7pxggh?hl=de-DE&entry=ttu';

const reviews = [
  {
    name: 'Ruth M. Fuchs',
    text: 'Kann ich nur empfehlen. Freundliche Beratung und Essen zum Niederknien. Ich kaufe gerne dort ein und hatte u.a. auch schon mal ein Catering für 30 Personen, inkl. Veganern und Fleischliebhabern. Alle, wirklich alle, waren restlos begeistert.',
  },
  {
    name: 'Erika Kellerbauer',
    text: 'Manchmal habe ich geschäftlich in Karlsfeld zu tun, dann muss ich immer in diesen netten Laden mit den unglaublich guten Antipasti und den leckeren Frischkäsecremes. Die Auswahl ist sehr groß und alles ist wirklich sehr gut. Es ist so hübsch angerichtet, da läuft einem das Wasser gleich im Mund zusammen. Die Inhaberin ist supernett, da kann man auch mal was probieren. Wirklich zu empfehlen.',
  },
  {
    name: 'Nicoletta K.',
    text: 'Ein zauberhafter kleiner Laden mit unfassbar leckeren Aufstrichen, eingelegten Scampi, Oliven, Gemüse und vielem mehr. Auch die Platten sind nicht nur lecker, sondern ein echtes Highlight für Gäste. Man darf alles probieren und kauft immer mehr als geplant. Die Inhaberin betreibt das Geschäft mit Hingabe und großem Können und kreiert immer wieder neue Köstlichkeiten. 100% Weiterempfehlung!',
  },
];

export default function Testimonials() {
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
    <section id="bewertungen" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-14 reveal">
          <span className="eyebrow">Kundenstimmen</span>
          <h2
            className="mt-4 text-foreground"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Was unsere Gäste sagen
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-d${i + 1} group relative overflow-hidden flex flex-col bg-surface border border-border rounded-2xl p-7 hover:border-accent/20 hover:shadow-sm transition-[border-color,box-shadow] duration-300`}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              {/* Decorative quote */}
              <span
                aria-hidden="true"
                className="block mb-4 leading-none select-none"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '4rem',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  opacity: 0.35,
                  marginTop: '-0.5rem',
                }}
              >
                &ldquo;
              </span>

              {/* Review text */}
              <p className="text-muted text-sm md:text-base leading-relaxed flex-1">
                {review.text}
              </p>

              {/* Divider + meta */}
              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-1" aria-label="5 von 5 Sternen">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className="review-star" style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>★</span>
                      ))}
                    </div>
                    <p className="text-foreground font-semibold text-sm">{review.name}</p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bewertung auf Google Maps ansehen"
                    className="shrink-0 text-[10px] font-semibold tracking-wide uppercase text-muted/60 hover:text-accent transition-colors"
                  >
                    Google
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All-reviews link */}
        <div className="text-center reveal">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
          >
            Alle Bewertungen auf Google Maps ansehen
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
