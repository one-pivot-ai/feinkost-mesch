'use client';

import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Bieten Sie Catering in Karlsfeld und München an?',
    a: 'Ja. Wir beliefern Karlsfeld und die Münchner Umgebung. Lieferung nach Absprache, Abholung direkt bei uns in der Dieselstraße 2.',
  },
  {
    q: 'Wie kann ich Catering vorbestellen?',
    a: 'Rufen Sie uns an oder schicken Sie uns eine E-Mail. Wir besprechen Umfang, Datum und Zusammenstellung direkt mit Ihnen – kein langer Vorlauf nötig.',
  },
  {
    q: 'Gibt es vegetarische Feinkostplatten?',
    a: 'Ja. Unsere Frischkäsecremes, Antipasti, eingelegtes Gemüse und die meisten Feinkostplatten sind vegetarisch.',
  },
  {
    q: 'Kann man die Bestellung abholen?',
    a: 'Ja, Abholung ist bei uns in Karlsfeld, Dieselstraße 2, möglich. Bitte vorher telefonisch abstimmen.',
  },
  {
    q: 'Für welche Anlässe eignet sich das Catering?',
    a: 'Geburtstage, Firmenfeiern, Büro-Lunches, private Buffets und kleinere Events. Auch kurzfristige Anfragen sind oft möglich – sprechen Sie uns einfach an.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`reveal reveal-d${(index % 3) + 1}`}>
    <div className={`border border-border rounded-2xl overflow-hidden transition-colors duration-300 ${open ? 'bg-surface' : 'bg-background hover:bg-surface'}`}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className="text-foreground font-semibold text-base md:text-lg leading-snug"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
            open ? 'bg-accent text-accent-foreground' : 'bg-surface-muted text-muted'
          }`}
        >
          {open ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
        </span>
      </button>

      {/* CSS grid-rows transition — kein JS-scrollHeight-Measurement nötig */}
      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{ overflow: 'hidden' }}>
          <p className="text-muted text-sm md:text-base leading-relaxed px-6 pb-6">
            {a}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function FAQ() {
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
    <section id="faq" className="py-24 md:py-32 bg-surface" ref={sectionRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="mb-14 reveal">
          <span className="eyebrow">Häufige Fragen</span>
          <h2
            className="mt-4 text-foreground"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Was Kunden uns fragen
          </h2>
        </div>

        <dl className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} q={q} a={a} index={i} />
          ))}
        </dl>

      </div>
    </section>
  );
}
