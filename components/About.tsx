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
    <section id="ueber-uns" className="py-24 md:py-32 bg-surface-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="reveal">
            <span className="eyebrow">Unsere Geschichte</span>
            <h2
              className="mt-4 mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Über Feinkost{' '}
              <em style={{ color: 'var(--terracotta)', fontStyle: 'italic', fontWeight: 300 }}>
                Mesch
              </em>
            </h2>
            <div className="space-y-4 text-muted text-base md:text-lg leading-relaxed">
              <p>
                Unsere Kundinnen und Kunden kommen von weit her – das freut uns und
                zeichnet uns aus. Seit 2009 machen wir das, was wir können: gute,
                ehrliche Feinkost in Karlsfeld.
              </p>
              <p>
                Unsere Cremes auf Frischkäsebasis, Antipasti und Snacks entstehen
                täglich in eigener Herstellung. Handverlesene Zutaten, traditionelle
                Rezepturen – kein Convenience Food, keine Kompromisse.
              </p>
              <p>
                Kommen Sie vorbei, probieren Sie etwas aus der Theke oder sprechen Sie
                uns für Catering und Vorbestellungen direkt an.
              </p>
            </div>
          </div>

          <div className="reveal reveal-d2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_12px_40px_rgba(43,33,24,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/catering-2.jpg"
                alt="Feinkosttheke mit hausgemachten Cremes und Antipasti bei Feinkost Mesch in Karlsfeld"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-[1.03] transition-transform duration-700"
                quality={85}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
            </div>

            <div
              className="absolute -bottom-5 -left-5 rounded-2xl p-5 shadow-lg"
              style={{ background: 'var(--terracotta)' }}
            >
              <p
                className="text-[10px] font-semibold tracking-widest uppercase mb-0.5"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                Feinkost seit
              </p>
              <p
                className="text-white leading-none"
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
