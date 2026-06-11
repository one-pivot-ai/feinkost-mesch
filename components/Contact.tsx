'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

function MapConsent() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return (
      <iframe
        title="Feinkost Mesch Karlsfeld – Standort auf Google Maps"
        src={MAPS_EMBED}
        width="100%"
        height="100%"
        style={{ border: 0, display: 'block', minHeight: '300px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[300px] px-6 text-center bg-surface-muted gap-5">
      <MapPin size={32} className="text-accent opacity-60" strokeWidth={1.5} />
      <div>
        <p className="font-semibold text-foreground text-sm mb-1">Karte anzeigen</p>
        <p className="text-muted text-xs leading-relaxed max-w-[260px]">
          Beim Laden der Karte werden Daten an Google (USA) übertragen.
          Mit Klick auf den Button stimmen Sie dem zu.
        </p>
      </div>
      <button
        onClick={() => setAccepted(true)}
        className="btn-shimmer bg-accent text-accent-foreground text-sm font-semibold px-5 py-2.5 rounded-full
                   hover:opacity-90 active:scale-[0.98] transition-all duration-200"
      >
        Google Maps laden
      </button>
      <a
        href="https://www.google.com/maps?cid=5098274478237640154"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-accent hover:underline"
      >
        Direkt in Google Maps öffnen ↗
      </a>
    </div>
  );
}

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
    <section id="kontakt" className="py-14 md:py-24 bg-surface-muted" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-8 md:mb-14 reveal">
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
            Erreichen Sie uns direkt, für Bestellungen, Catering-Anfragen oder
            einen Besuch in der Dieselstraße 2.
          </p>
        </div>

        {/* Two-column: cards left, map right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-stretch">

          {/* Cards — 1-col on mobile, 2×2 on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  aria-label={card.ariaLabel}
                  className={`reveal reveal-d${i + 1} flex flex-row sm:flex-col items-center sm:items-start bg-surface border border-border
                              rounded-2xl p-4 sm:p-6 gap-4 sm:gap-0 group transition-all duration-300 hover:border-accent/30
                              hover:bg-background hover:-translate-y-0.5`}
                  {...(card.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex-shrink-0 flex items-center justify-center sm:mb-5
                                  group-hover:bg-accent group-hover:scale-110 transition-[background-color,transform]
                                  duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    <Icon size={17} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-muted text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block">
                    {card.label}
                  </span>
                  <span className="text-foreground font-medium text-sm md:text-base whitespace-pre-line">
                    {card.value}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Map — Zwei-Klick-Lösung (DSGVO) */}
          <div className="reveal reveal-d2 from-right rounded-2xl overflow-hidden border border-border shadow-sm min-h-[300px]">
            <MapConsent />
          </div>

        </div>

      </div>
    </section>
  );
}
