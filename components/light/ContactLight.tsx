import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const cards = [
  { icon: Phone, label: 'Telefon',        value: '0151 12 13 92 12',     href: 'tel:+4915112139212',  external: false },
  { icon: Mail,  label: 'E-Mail',         value: 'selda.kadic@yahoo.de', href: 'mailto:selda.kadic@yahoo.de', external: false },
  { icon: MapPin,label: 'Adresse',        value: 'Dieselstraße 2\n85757 Karlsfeld', href: 'https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld', external: true },
  { icon: Clock, label: 'Öffnungszeiten', value: 'Mo – Fr\n10:00 – 18:00 Uhr', href: null, external: false },
];

export default function ContactLight() {
  return (
    <section id="kontakt-l" className="py-24 md:py-32 bg-[#F4EDE2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#C05020]" />
            <span className="text-[#C05020] text-xs font-semibold tracking-[0.2em] uppercase">Wir freuen uns auf Sie</span>
            <span className="w-8 h-px bg-[#C05020]" />
          </div>
          <h2
            className="text-[#2A2018]"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
          >
            Kontakt
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <>
                <div className="w-11 h-11 rounded-xl bg-[#3D6E0F]/10 flex items-center justify-center mb-5 group-hover:bg-[#3D6E0F] transition-colors duration-300">
                  <Icon size={18} className="text-[#3D6E0F] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-[#8A6820] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2 block">{card.label}</span>
                <span className="text-[#2A2018] font-medium text-sm whitespace-pre-line">{card.value}</span>
              </>
            );

            const cls = `flex flex-col bg-white border border-[#E0D5C0] rounded-2xl p-7 group transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`;

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

        <div className="text-center">
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            className="inline-flex items-center gap-2.5 bg-[#3D6E0F] text-white px-10 py-4 rounded-full font-semibold text-sm
                       hover:bg-[#2d5208] active:scale-[0.97] transition-all duration-200 shadow-md"
          >
            <Mail size={15} />
            Catering-Anfrage senden
          </a>
        </div>

      </div>
    </section>
  );
}
