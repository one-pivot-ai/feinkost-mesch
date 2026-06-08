'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useEffect, useRef } from 'react';

const cards = [
  { icon: Phone, label: 'Telefon',        value: '0151 12 13 92 12',      href: 'tel:+4915112139212',                    external: false },
  { icon: Mail,  label: 'E-Mail',         value: 'selda.kadic@yahoo.de',  href: 'mailto:selda.kadic@yahoo.de',           external: false },
  { icon: MapPin,label: 'Adresse',        value: 'Dieselstraße 2\n85757 Karlsfeld', href: 'https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld', external: true },
  { icon: Clock, label: 'Öffnungszeiten', value: 'Mo – Fr\n10:00 – 18:00 Uhr', href: null, external: false },
];

export default function Contact() {
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
    <section id="kontakt" className="py-24 md:py-32 bg-surface-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-14 reveal">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>
            Wir freuen uns auf Sie
          </span>
          <h2
            className="mt-4 text-foreground"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
          >
            Kontakt
          </h2>
          <p className="mt-4 text-muted text-base max-w-md mx-auto leading-relaxed">
            Erreichen Sie uns direkt – für Bestellungen, Catering-Anfragen oder
            einen Besuch in der Dieselstraße 2.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5
                                group-hover:bg-accent group-hover:scale-110 transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <Icon size={17} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-muted text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block">
                  {card.label}
                </span>
                <span className="text-foreground font-medium text-sm md:text-base whitespace-pre-line">
                  {card.value}
                </span>
              </>
            );

            const cls = `reveal reveal-d${i + 1} flex flex-col bg-surface border border-border
                         rounded-2xl p-7 group transition-all duration-300 hover:border-accent/30
                         hover:bg-background hover:-translate-y-0.5`;

            if (card.href) {
              return (
                <a key={card.label} href={card.href} className={cls}
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                  {inner}
                </a>
              );
            }
            return <div key={card.label} className={cls}>{inner}</div>;
          })}
        </div>

        <div className="text-center reveal">
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            className="btn-shimmer inline-flex items-center gap-2.5 bg-accent text-accent-foreground
                       px-10 py-4 rounded-full font-semibold text-sm tracking-wide
                       hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            <Mail size={15} />
            Catering-Anfrage senden
          </a>
        </div>

      </div>
    </section>
  );
}
