import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-new.jpg"
          alt="Hausgemachte mediterrane Feinkost von Feinkost Mesch"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-[#0A0806]/55 to-[#0A0806]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0806]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C49A3C]" />
            <span className="text-[#C49A3C] text-xs font-semibold tracking-[0.2em] uppercase">
              Seit 2009 in Karlsfeld
            </span>
          </div>

          <h1
            className="text-[#EDE9E3] mb-5 leading-[1.08]"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 400,
            }}
          >
            Hausgemachte Feinkost{' '}
            <em style={{ color: '#D4AF5A', fontStyle: 'italic', fontWeight: 300 }}>
              aus Karlsfeld
            </em>
          </h1>

          <p className="text-[#EDE9E3]/65 text-base leading-relaxed mb-3 max-w-lg">
            Cremes, Antipasti und Catering – frisch zubereitet,
            mediterran inspiriert und mit Liebe gemacht.
          </p>

          <p
            className="text-[#EDE9E3]/28 text-sm italic mb-10"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.05rem' }}
          >
            Kein guter Ort für Diäten.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#spezialitaeten"
              className="inline-flex items-center gap-2 bg-[#C49A3C] text-[#0A0806] px-7 py-3.5 rounded-full
                         font-semibold text-sm tracking-wide hover:bg-[#D4AF5A] active:scale-[0.97]
                         transition-all duration-200 shadow-[0_4px_20px_rgba(196,154,60,0.35)]"
            >
              Unsere Spezialitäten
            </a>
            <a
              href="#catering"
              className="inline-flex items-center gap-2 border border-[#EDE9E3]/25 text-[#EDE9E3]/80
                         px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide
                         hover:border-[#EDE9E3]/50 hover:text-[#EDE9E3] active:scale-[0.97]
                         transition-all duration-200"
            >
              Catering anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
