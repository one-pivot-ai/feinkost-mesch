'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const cards = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '0151 12 13 92 12',
    href: 'tel:+4915112139212',
    ariaLabel: 'Jetzt anrufen: 0151 12 13 92 12',
    external: false,
  },
  {
    icon: Mail,
    label: 'E-Mail',
    value: 'selda.kadic@yahoo.de',
    href: 'mailto:selda.kadic@yahoo.de',
    ariaLabel: 'E-Mail schreiben an selda.kadic@yahoo.de',
    external: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'WhatsApp schreiben',
    href: 'https://wa.me/4915112139212',
    ariaLabel: 'WhatsApp-Nachricht an Feinkost Mesch senden',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Dieselstraße 2\n85757 Karlsfeld',
    href: 'https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld',
    ariaLabel: 'Adresse in Google Maps öffnen',
    external: true,
  },
];

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d11.4814428!3d48.2280862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e70aa6f9e2805%3A0x46c0b5a04acb65da!2sFeinkost%20Mesch%20Partyservice%20%26%20Catering!5e0!3m2!1sde!2sde!4v1718500000000!5m2!1sde!2sde';

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

        {/* Header */}
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

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
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

            return (
              <a
                key={card.label}
                href={card.href}
                aria-label={card.ariaLabel}
                className={cls}
                {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Google Maps embed */}
        <div className="reveal mb-12 rounded-2xl overflow-hidden border border-border shadow-sm h-[260px] md:h-[400px]">
          <iframe
            title="Feinkost Mesch Karlsfeld – Standort auf Google Maps"
            src={MAPS_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            aria-label="Catering-Anfrage per E-Mail senden"
            className="btn-shimmer inline-flex items-center gap-2.5 bg-accent text-accent-foreground
                       px-10 py-4 rounded-full font-semibold text-sm tracking-wide
                       hover:opacity-90 active:scale-[0.97] transition-all duration-200"
          >
            <Mail size={15} aria-hidden="true" />
            Catering-Anfrage senden
          </a>
        </div>

      </div>
    </section>
  );
}
