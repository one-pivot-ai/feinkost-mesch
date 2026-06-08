'use client';

import { useEffect, useRef } from 'react';

const hours = [
  { day: 'Montag',     time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Dienstag',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Mittwoch',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Donnerstag', time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Freitag',    time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Samstag',    time: 'Geschlossen',        open: false },
  { day: 'Sonntag',    time: 'Geschlossen',        open: false },
];

export default function OpeningHours() {
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
    <section id="oeffnungszeiten" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Öffnungszeiten */}
          <div className="reveal">
            <span className="eyebrow">
              Wann wir für Sie da sind
            </span>
            <h2
              className="mt-4 mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Öffnungszeiten
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
              Wir freuen uns auf Ihren Besuch in der Dieselstraße 2.
            </p>

            <div className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-border">
              {hours.map((row, i) => (
                <div
                  key={row.day}
                  className={`hours-row flex items-center justify-between px-6 py-4 transition-colors ${
                    i < hours.length - 1 ? 'border-b border-border' : ''
                  } ${row.open ? 'hover:bg-surface-muted' : 'opacity-40'}`}
                >
                  <span className="font-medium text-foreground text-sm md:text-base">{row.day}</span>
                  <span className={`font-semibold text-sm md:text-base ${row.open ? 'text-accent' : 'text-muted'}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Anfahrt */}
          <div className="reveal reveal-d2 lg:pt-10">
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-border shadow-sm">
              <h3
                className="text-foreground mb-6"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 400 }}
              >
                So finden Sie uns
              </h3>
              <div className="space-y-5 text-sm md:text-base">
                <div>
                  <p className="text-accent text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">
                    Adresse
                  </p>
                  <p className="text-muted">Dieselstraße 2<br />85757 Karlsfeld</p>
                </div>
                <div>
                  <p className="text-accent text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">
                    Telefon
                  </p>
                  <a href="tel:+4915112139212" className="text-muted hover:text-foreground transition-colors">
                    0151 12 13 92 12
                  </a>
                </div>
                <div>
                  <p className="text-accent text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">
                    E-Mail
                  </p>
                  <a href="mailto:selda.kadic@yahoo.de" className="text-muted hover:text-foreground transition-colors">
                    selda.kadic@yahoo.de
                  </a>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer mt-8 block w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold text-sm text-center
                           hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
