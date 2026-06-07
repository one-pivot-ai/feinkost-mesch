'use client';

import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

const highlights = [
  'Individuelle Menügestaltung nach Ihren Wünschen',
  'Täglich frisch – kein Convenience Food',
  'Von kleinen Feiern bis zu großen Veranstaltungen',
  'Mediterrane Platten, Cremes und Buffets',
  'Vorbestellungen jederzeit möglich',
];

export default function Catering() {
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
    <section id="catering" className="py-24 md:py-32 bg-[#0A0806]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Bild */}
          <div className="reveal relative rounded-3xl overflow-hidden aspect-[4/5] lg:h-[600px] lg:aspect-auto">
            <Image
              src="/images/catering-1.jpg"
              alt="Feinkost Mesch Catering"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/50 via-transparent to-transparent" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
          </div>

          {/* Text */}
          <div className="reveal reveal-d2">
            <span className="eyebrow">Für besondere Anlässe</span>
            <h2
              className="mt-4 mb-5 text-[#EDE9E3]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Ihr Catering aus{' '}
              <em style={{ color: '#D4AF5A', fontStyle: 'italic', fontWeight: 300 }}>
                Karlsfeld
              </em>
            </h2>
            <p className="text-[#8A8078] text-base md:text-lg leading-relaxed mb-7">
              Ob Firmenfeier, Geburtstag oder entspanntes Buffet im Freundeskreis –
              wir bringen mediterrane Feinkost zu Ihrem Anlass. Frisch, hochwertig, hausgemacht.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border border-[#C49A3C] flex items-center justify-center">
                    <svg className="w-2 h-2 text-[#C49A3C]" fill="none" viewBox="0 0 10 10">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#EDE9E3]/75 text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#1C1812] rounded-2xl p-6 border border-[rgba(255,255,255,0.06)]">
              <p className="text-[#8A8078] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                Direkt anfragen
              </p>
              <div className="flex flex-col gap-3 mb-5">
                <a
                  href="tel:+4915112139212"
                  className="flex items-center gap-3 text-[#EDE9E3]/70 hover:text-[#C49A3C] text-sm font-medium transition-colors group"
                >
                  <Phone size={15} className="text-[#C49A3C] group-hover:scale-110 transition-transform" />
                  0151 12 13 92 12
                </a>
                <a
                  href="mailto:selda.kadic@yahoo.de"
                  className="flex items-center gap-3 text-[#EDE9E3]/70 hover:text-[#C49A3C] text-sm font-medium transition-colors group"
                >
                  <Mail size={15} className="text-[#C49A3C] group-hover:scale-110 transition-transform" />
                  selda.kadic@yahoo.de
                </a>
              </div>
              <a
                href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
                className="block w-full bg-[#C49A3C] text-[#0A0806] py-3.5 rounded-full font-semibold text-sm text-center
                           hover:bg-[#D4AF5A] active:scale-[0.98] transition-all duration-200
                           shadow-[0_4px_20px_rgba(196,154,60,0.25)]"
              >
                Jetzt Catering anfragen
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
