import Image from 'next/image';

export default function HeroLight() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FDFAF5]">

      {/* Hintergrundbild – rechte Hälfte, warm eingeblendet */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src="/images/hero-mezze.jpg"
          alt="Mediterrane Feinkost von Feinkost Mesch"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Sanfter Übergang links zur Creme-Farbe */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFAF5] via-[#FDFAF5]/30 to-transparent" />
        {/* leichte Wärmung */}
        <div className="absolute inset-0 bg-[#C05020]/8" />
      </div>

      {/* Dekorative Linie oben */}
      <div className="absolute top-32 left-5 sm:left-8 lg:left-12 flex items-center gap-3">
        <span className="w-8 h-px bg-[#8A6820]" />
        <span className="text-[#8A6820] text-xs font-semibold tracking-[0.2em] uppercase">
          Seit 2009 in Karlsfeld
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-lg">

          <h1
            className="text-[#2A2018] mb-5 leading-[1.08]"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
              fontWeight: 400,
            }}
          >
            Hausgemachte
            <br />
            <em style={{ color: '#3D6E0F', fontStyle: 'italic', fontWeight: 300 }}>
              mediterrane
            </em>{' '}
            Feinkost
          </h1>

          <p className="text-[#6B5E4A] text-base md:text-[1.05rem] leading-relaxed mb-3 max-w-md">
            Cremes, Antipasti und Catering – frisch zubereitet,
            mediterran inspiriert und mit Liebe gemacht.
          </p>

          <p
            className="text-[#2A2018]/25 text-sm italic mb-10"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}
          >
            Kein guter Ort für Diäten.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#spezialitaeten-l"
              className="inline-flex items-center bg-[#3D6E0F] text-white px-7 py-3.5 rounded-full
                         font-semibold text-sm tracking-wide hover:bg-[#2d5208] active:scale-[0.97]
                         transition-all duration-200 shadow-md"
            >
              Unsere Spezialitäten
            </a>
            <a
              href="#catering-l"
              className="inline-flex items-center border-2 border-[#3D6E0F] text-[#3D6E0F] px-7 py-3.5 rounded-full
                         font-semibold text-sm tracking-wide hover:bg-[#3D6E0F] hover:text-white
                         active:scale-[0.97] transition-all duration-200"
            >
              Catering anfragen
            </a>
          </div>

          {/* Trust-Bar */}
          <div className="mt-12 flex gap-8">
            {[
              { v: '100 % hausgemacht', l: 'Keine Kompromisse' },
              { v: 'Karlsfeld', l: 'Direkt vor München' },
            ].map((t) => (
              <div key={t.v}>
                <p className="text-[#2A2018] text-sm font-semibold">{t.v}</p>
                <p className="text-[#6B5E4A] text-xs mt-0.5">{t.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dekorativer Terracotta-Akzent */}
      <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#C05020]" />
    </section>
  );
}
