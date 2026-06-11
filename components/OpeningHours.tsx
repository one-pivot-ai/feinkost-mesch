'use client';

import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, MessageCircle, Mail } from 'lucide-react';

const hours = [
  { day: 'Montag',     time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Dienstag',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Mittwoch',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Donnerstag', time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Freitag',    time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Samstag',    time: 'Geschlossen',        open: false },
  { day: 'Sonntag',    time: 'Geschlossen',        open: false },
];

const contacts = [
  { Icon: MapPin,          label: 'Adresse',   value: 'Dieselstraße 2, 85757 Karlsfeld', href: 'https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld', external: true  },
  { Icon: Phone,           label: 'Telefon',   value: '0151 12 13 92 12',                href: 'tel:+4915112139212',                                         external: false },
  { Icon: MessageCircle,   label: 'WhatsApp',  value: 'Nachricht schreiben',             href: 'https://wa.me/4915112139212',                               external: true  },
  { Icon: Mail,            label: 'E-Mail',    value: 'selda.kadic@yahoo.de',            href: 'mailto:selda.kadic@yahoo.de',                               external: false },
];

export default function OpeningHours() {
  const sectionRef               = useRef<HTMLDivElement>(null);
  const [todayIndex, setToday]   = useState(-1);
  const [isOpen,     setIsOpen]  = useState(false);

  useEffect(() => {
    const d   = new Date();
    const idx = d.getDay() === 0 ? 6 : d.getDay() - 1; // Mon=0 … Sun=6
    setToday(idx);
    if (hours[idx].open) {
      const mins = d.getHours() * 60 + d.getMinutes();
      setIsOpen(mins >= 10 * 60 && mins < 18 * 60);
    }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>('.reveal');
    const io    = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <section id="oeffnungszeiten" className="py-14 md:py-24 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Öffnungszeiten */}
          <div className="reveal from-left">
            {/* Eyebrow + live status */}
            <div className="flex items-center gap-4 mb-4 flex-wrap">
              <span className="eyebrow">Öffnungszeiten</span>
              {todayIndex >= 0 && (
                <span
                  className={`inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${
                    isOpen
                      ? 'text-accent bg-accent/10 border-accent/20'
                      : 'text-muted bg-surface-muted border-border'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isOpen ? 'bg-accent animate-pulse' : 'bg-muted'}`} />
                  {isOpen ? 'Jetzt geöffnet' : 'Aktuell geschlossen'}
                </span>
              )}
            </div>

            <h2
              className="mb-4 text-foreground"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Wann wir für Sie da sind
            </h2>
            <p className="text-muted text-base leading-relaxed mb-8">
              Wir freuen uns auf Ihren Besuch in der Dieselstraße 2.
            </p>

            {/* Hours table */}
            <div className="rounded-2xl overflow-hidden border border-border">
              {hours.map((row, i) => {
                const isToday = i === todayIndex;
                return (
                  <div
                    key={row.day}
                    className={`hours-row flex items-center justify-between px-5 py-3.5 transition-colors ${
                      i < hours.length - 1 ? 'border-b border-border' : ''
                    } ${isToday ? 'bg-accent/5' : row.open ? 'hover:bg-surface-muted' : ''}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isToday ? 'bg-accent' : row.open ? 'bg-border' : 'bg-transparent'
                        }`}
                      />
                      <span className={`text-sm md:text-base ${
                        isToday ? 'font-semibold text-foreground' : row.open ? 'font-medium text-foreground' : 'text-muted/50'
                      }`}>
                        {row.day}
                      </span>
                      {isToday && (
                        <span className="text-[9px] font-bold tracking-widest uppercase text-accent/80 border border-accent/30 rounded px-1.5 py-0.5">
                          Heute
                        </span>
                      )}
                    </div>
                    <span className={`text-sm md:text-base font-semibold tabular-nums ${
                      row.open ? (isToday ? 'text-accent' : 'text-accent') : 'text-muted/40'
                    }`}>
                      {row.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Anfahrt */}
          <div className="reveal reveal-d2 from-right lg:pt-[162px]">
            <div className="bg-surface rounded-2xl p-8 lg:p-10 border border-border h-full">
              <h3
                className="text-foreground mb-7"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 400 }}
              >
                So finden Sie uns
              </h3>

              <div className="space-y-5">
                {contacts.map(({ Icon, label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-0.5 w-9 h-9 rounded-xl bg-accent/10 flex-shrink-0 flex items-center justify-center
                                    group-hover:bg-accent transition-colors duration-200">
                      <Icon size={15} className="text-accent group-hover:text-accent-foreground transition-colors duration-200" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent mb-0.5">{label}</p>
                      <p className="text-muted group-hover:text-foreground transition-colors duration-200 text-sm md:text-base leading-snug">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
