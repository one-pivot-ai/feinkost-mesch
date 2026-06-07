'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
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
    <section id="ueber-uns" className="py-24 md:py-32 bg-[#131009]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="reveal">
            <span className="eyebrow">Unsere Geschichte</span>
            <h2
              className="mt-4 mb-6 text-[#EDE9E3]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Über Feinkost{' '}
              <em style={{ color: '#D4AF5A', fontStyle: 'italic', fontWeight: 300 }}>Mesch</em>
            </h2>
            <div className="space-y-4 text-[#8A8078] text-base md:text-lg leading-relaxed">
              <p>
                Unsere Kundinnen und Kunden kommen von weit her, um unsere hausgemachte
                Qualität zu genießen. Das freut uns sehr und zeichnet uns aus.
              </p>
              <p>
                Mit handverlesenen Zutaten und traditionellen Rezepturen entstehen täglich
                frische Spezialitäten. Unsere Cremes auf Frischkäsebasis, mediterranen
                Kompositionen und Snacks werden ausschließlich in eigener Herstellung
                gefertigt, ohne Kompromisse bei Qualität und Geschmack.
              </p>
              <p>
                Kommen Sie auf einen leckeren Mittagssnack vorbei oder sprechen Sie uns
                direkt an. Wir liefern in München und Umgebung und erfüllen auch besondere
                Cateringwünsche.
              </p>
            </div>
          </div>

          <div className="reveal reveal-d2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/catering-2.jpg"
                alt="Feinkost Mesch – frische Spezialitäten"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-[#C49A3C] rounded-2xl p-5 shadow-[0_8px_30px_rgba(196,154,60,0.3)]">
              <p className="text-[#0A0806]/55 text-[10px] font-semibold tracking-widest uppercase mb-0.5">Feinkost seit</p>
              <p
                className="text-[#0A0806] leading-none"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 700 }}
              >
                2009
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
