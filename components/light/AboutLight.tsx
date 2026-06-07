import Image from 'next/image';

export default function AboutLight() {
  return (
    <section id="ueber-uns-l" className="py-24 md:py-32 bg-[#EDE4D3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Bild zuerst auf Desktop */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
              <Image
                src="/images/catering-2.jpg"
                alt="Feinkost Mesch – frische Spezialitäten"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={85}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#C05020] rounded-2xl p-5 shadow-lg">
              <p className="text-white/60 text-[10px] font-semibold tracking-widest uppercase mb-0.5">Feinkost seit</p>
              <p className="text-white leading-none" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.8rem', fontWeight: 700 }}>
                2009
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C05020]" />
              <span className="text-[#C05020] text-xs font-semibold tracking-[0.2em] uppercase">Unsere Geschichte</span>
            </div>
            <h2
              className="mb-6 text-[#2A2018]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Über Feinkost{' '}
              <em style={{ color: '#3D6E0F', fontStyle: 'italic', fontWeight: 300 }}>Mesch</em>
            </h2>
            <div className="space-y-4 text-[#6B5E4A] text-base md:text-lg leading-relaxed">
              <p>
                Unsere Kundinnen und Kunden kommen von weit her, um unsere hausgemachte
                Qualität zu genießen. Das freut uns sehr und zeichnet uns aus.
              </p>
              <p>
                Mit handverlesenen Zutaten und traditionellen Rezepturen entstehen täglich
                frische Spezialitäten. Unsere Cremes auf Frischkäsebasis, mediterranen
                Kompositionen und Snacks werden ausschließlich in eigener Herstellung
                gefertigt, ohne Kompromisse bei Qualität und Geschmack.
              </p>
              <p>
                Kommen Sie auf einen leckeren Mittagssnack vorbei oder sprechen Sie uns
                direkt an. Wir liefern in München und Umgebung und erfüllen auch besondere
                Cateringwünsche.
              </p>
            </div>

            <div className="mt-10 flex gap-6 pt-8 border-t border-[#D4C8B0]">
              {[
                { v: '100 %', l: 'Hausgemacht' },
                { v: 'Premium', l: 'Zutaten' },
                { v: 'München', l: 'Liefergebiet' },
              ].map((s) => (
                <div key={s.v}>
                  <p className="text-[#3D6E0F] mb-1" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 600 }}>
                    {s.v}
                  </p>
                  <p className="text-[#6B5E4A] text-xs font-medium">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
