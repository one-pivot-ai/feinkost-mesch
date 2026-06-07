import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

const highlights = [
  'Individuelle Menügestaltung nach Ihren Wünschen',
  'Täglich frisch – kein Convenience Food',
  'Von kleinen Feiern bis zu großen Veranstaltungen',
  'Mediterrane Platten, Cremes und Buffets',
  'Vorbestellungen jederzeit möglich',
];

export default function CateringLight() {
  return (
    <section id="catering-l" className="py-24 md:py-32 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:h-[600px] lg:aspect-auto shadow-xl">
            <Image
              src="/images/catering-1.jpg"
              alt="Feinkost Mesch Catering"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              quality={85}
            />
            {/* Terracotta-Akzent */}
            <div className="absolute bottom-6 left-6">
              <span className="bg-[#C05020] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
                Catering & Vorbestellungen
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C05020]" />
              <span className="text-[#C05020] text-xs font-semibold tracking-[0.2em] uppercase">Für besondere Anlässe</span>
            </div>
            <h2
              className="mb-5 text-[#2A2018]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Ihr Catering aus{' '}
              <em style={{ color: '#3D6E0F', fontStyle: 'italic', fontWeight: 300 }}>Karlsfeld</em>
            </h2>
            <p className="text-[#6B5E4A] text-base md:text-lg leading-relaxed mb-7">
              Ob Firmenfeier, Geburtstag oder entspanntes Buffet im Freundeskreis –
              wir bringen mediterrane Feinkost zu Ihrem Anlass. Frisch, hochwertig, hausgemacht.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#3D6E0F] flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 10 10">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#2A2018] text-sm md:text-base">{p}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#F4EDE2] rounded-2xl p-6 border border-[#E0D5C0]">
              <p className="text-[#6B5E4A] text-xs font-semibold tracking-[0.15em] uppercase mb-4">Direkt anfragen</p>
              <div className="flex flex-col gap-3 mb-5">
                <a href="tel:+4915112139212" className="flex items-center gap-3 text-[#3D6E0F] hover:text-[#2d5208] text-sm font-medium transition-colors group">
                  <Phone size={15} className="group-hover:scale-110 transition-transform" />
                  0151 12 13 92 12
                </a>
                <a href="mailto:selda.kadic@yahoo.de" className="flex items-center gap-3 text-[#3D6E0F] hover:text-[#2d5208] text-sm font-medium transition-colors group">
                  <Mail size={15} className="group-hover:scale-110 transition-transform" />
                  selda.kadic@yahoo.de
                </a>
              </div>
              <a
                href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
                className="block w-full bg-[#3D6E0F] text-white py-3.5 rounded-full font-semibold text-sm text-center
                           hover:bg-[#2d5208] active:scale-[0.98] transition-all duration-200 shadow-sm"
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
