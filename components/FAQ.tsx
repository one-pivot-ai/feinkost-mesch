'use client';

import { useEffect, useRef } from 'react';

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
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="mb-14 reveal">
          <span className="eyebrow">Häufige Fragen</span>
          <h2
            className="mt-4 text-foreground"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
          >
            Was Kunden uns fragen
          </h2>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0">
          {faqs.map(({ q, a }, i) => (
            <div
              key={q}
              className={`reveal reveal-d${(i % 4) + 1} py-6 border-b border-border`}
            >
              <dt
                className="text-foreground font-semibold mb-2 text-base md:text-lg leading-snug"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                {q}
              </dt>
              <dd className="text-muted text-sm md:text-base leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>

      </div>
    </section>
  );
}
