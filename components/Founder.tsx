'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const facts = [
  'Seit 2008',
  'Familiengeführt',
  'Hausgemachte Cremes',
  'Antipasti & Garnelen',
  'Ohne Zusätze',
  'Catering bis 100 Personen',
];

export default function Founder() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-surface-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Thin divider so it reads as its own section without a hard colour break */}
        <div className="border-t border-border pt-10 pb-12 md:pt-14 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Text column */}
            <div className="reveal from-left">
              <span className="eyebrow">Die Inhaberin</span>
              <h2
                className="mt-4 mb-5 text-foreground"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
              >
                Das Gesicht hinter{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'normal', fontWeight: 400, fontFamily: 'var(--font-highlight)' }}>
                  Feinkost Mesch
                </em>
              </h2>

              <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                Selda Meschkotat hat Feinkost Mesch 2008 aus einem Lebenstraum heraus gegründet,
                mit der Idee, Feinkost anders zu denken: persönlicher, frischer und handgemacht.
              </p>

              <blockquote className="mb-7">
                <span
                  aria-hidden="true"
                  className="block select-none -mb-3"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: '4.5rem', lineHeight: 1, color: 'var(--accent)', opacity: 0.45 }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-foreground pl-1"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.4rem, 2.8vw, 1.85rem)', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.25 }}
                >
                  Feinkost einmal anders!
                </p>
              </blockquote>

              <div className="space-y-4 text-muted text-base leading-relaxed mb-8">
                <p>
                  Was als Backshop begann, wurde zum einzigartigen Feinkostgeschäft im Münchner
                  Umland. Inspiriert von ihrem Schwager, einem passionierten Creme-Schöpfer aus
                  dem Saarland, entwickelte Selda ihre eigene Handschrift: selbstgemachte
                  Frischkäsecremes, selbst eingelegte Garnelen und Antipasti mit hauseigenen
                  Gewürzmischungen und Soßen.
                </p>
                <p>
                  „Klein, aber dafür fein": Als Familienunternehmen entstehen hier täglich
                  Gaumenfreuden ohne Kompromisse. Nur beste Zutaten, garantierte Frische,
                  keinerlei Zusätze. Ob Candle-Light-Dinner für zwei oder Partyverköstigung
                  bis 100 Personen. Feinkost Mesch hat das Richtige für jeden Anlass.
                </p>
              </div>

              {/* Mini-Fact-Chips */}
              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Kurzfakten">
                {facts.map((f) => (
                  <li
                    key={f}
                    className="founder-chip bg-surface border border-border text-muted rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    {f}
                  </li>
                ))}
              </ul>

            </div>

            {/* Image column */}
            <div className="reveal reveal-d2 from-right">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/2] sm:aspect-[4/5] shadow-[0_12px_40px_rgba(43,33,24,0.12)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/Selda.webp"
                  alt="Selda Meschkotat, Inhaberin von Feinkost Mesch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-[1.03] transition-transform duration-700"
                  style={{ objectPosition: '50% 62%' }}
                  quality={85}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
