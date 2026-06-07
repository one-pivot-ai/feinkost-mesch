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
    <section id="oeffnungszeiten" className="py-24 md:py-32 bg-[#F7F3EC]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Öffnungszeiten */}
          <div className="reveal">
            <span className="eyebrow" style={{ color: '#8A6820' }}>
              Wann wir für Sie da sind
            </span>
            <h2
              className="mt-4 mb-4 text-[#2D2820]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Öffnungszeiten
            </h2>
            <p className="text-[#6B6358] text-base md:text-lg leading-relaxed mb-8">
              Wir freuen uns auf Ihren Besuch in der Dieselstraße 2.
            </p>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {hours.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    i < hours.length - 1 ? 'border-b border-gray-100' : ''
                  } ${row.open ? 'hover:bg-[#F7F3EC]' : 'opacity-40'}`}
                >
                  <span className="font-medium text-[#2D2820] text-sm md:text-base">{row.day}</span>
                  <span className={`font-semibold text-sm md:text-base ${row.open ? 'text-[#4A7A12]' : 'text-gray-400'}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Anfahrt – dark card als Kontrast */}
          <div className="reveal reveal-d2 lg:pt-10">
            <div className="bg-[#131009] rounded-3xl p-8 lg:p-10 text-[#EDE9E3] shadow-2xl">
              <h3
                className="mb-6"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 400 }}
              >
                So finden Sie uns
              </h3>
              <div className="space-y-5 text-[#8A8078] text-sm md:text-base">
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Adresse</p>
                  <p className="text-[#EDE9E3]/80">Dieselstraße 2<br />85757 Karlsfeld</p>
                </div>
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Telefon</p>
                  <a href="tel:+4915112139212" className="text-[#EDE9E3]/80 hover:text-[#EDE9E3] transition-colors">
                    0151 12 13 92 12
                  </a>
                </div>
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">E-Mail</p>
                  <a href="mailto:selda.kadic@yahoo.de" className="text-[#EDE9E3]/80 hover:text-[#EDE9E3] transition-colors">
                    selda.kadic@yahoo.de
                  </a>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full bg-[#C49A3C] text-[#0A0806] py-3.5 rounded-full font-semibold text-sm text-center
                           hover:bg-[#D4AF5A] active:scale-[0.98] transition-all duration-200"
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
