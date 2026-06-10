'use client';

import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

const highlights = [
  'Mediterrane Feinkostplatten, Cremes und Antipasti',
  'Für Geburtstage, Firmenfeiern und private Buffets',
  'Catering für die Münchner Umgebung und Karlsfeld',
  'Abholung in Karlsfeld, Lieferung nach Absprache',
  'Vorbestellungen telefonisch oder per E-Mail',
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
    <section id="catering" className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Bild */}
          <div className="reveal relative rounded-2xl overflow-hidden aspect-[4/5] lg:h-[580px] lg:aspect-auto shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
            <Image
              src="/images/catering-1.webp"
              alt="Mediterrane Cateringplatte von Feinkost Mesch Karlsfeld"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover hover:scale-[1.03] transition-transform duration-700"
              quality={85}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
          </div>

          {/* Text */}
          <div className="reveal reveal-d2">
            <span className="eyebrow">Catering in Karlsfeld &amp; München</span>
            <h2
              className="mt-4 mb-5 text-foreground"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Feinkostplatten für{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'normal', fontWeight: 400, fontFamily: 'var(--font-highlight)' }}>
                jeden Anlass
              </em>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-7">
              Ob kleine Feier, Büro-Lunch oder größeres Buffet: Wir stellen mediterrane
              Feinkostplatten mit hausgemachten Cremes, Antipasti, Oliven und Gemüse
              zusammen. Bestellung direkt per Telefon oder E-Mail.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-muted text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <div className="bg-surface-muted rounded-2xl p-6 border border-border">
              <p className="text-muted text-[10px] font-semibold tracking-[0.15em] uppercase mb-4">
                Direkt anfragen
              </p>
              <div className="flex flex-col gap-3 mb-5">
                <a
                  href="tel:+4915112139212"
                  className="flex items-center gap-3 text-muted hover:text-accent text-sm font-medium transition-colors group"
                >
                  <Phone size={15} className="text-accent" />
                  0151 12 13 92 12
                </a>
                <a
                  href="mailto:selda.kadic@yahoo.de"
                  className="flex items-center gap-3 text-muted hover:text-accent text-sm font-medium transition-colors group"
                >
                  <Mail size={15} className="text-accent" />
                  selda.kadic@yahoo.de
                </a>
              </div>
              <a
                href="#kontakt"
                className="btn-shimmer block w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold text-sm text-center
                           hover:opacity-90 active:scale-[0.98] transition-all duration-200"
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
