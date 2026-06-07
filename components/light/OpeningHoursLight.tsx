const hours = [
  { day: 'Montag',     time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Dienstag',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Mittwoch',   time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Donnerstag', time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Freitag',    time: '10:00 – 18:00 Uhr', open: true },
  { day: 'Samstag',    time: 'Geschlossen',        open: false },
  { day: 'Sonntag',    time: 'Geschlossen',        open: false },
];

export default function OpeningHoursLight() {
  return (
    <section id="oeffnungszeiten-l" className="py-24 md:py-32 bg-[#FDFAF5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#C05020]" />
              <span className="text-[#C05020] text-xs font-semibold tracking-[0.2em] uppercase">Wann wir für Sie da sind</span>
            </div>
            <h2
              className="mb-4 text-[#2A2018]"
              style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.1 }}
            >
              Öffnungszeiten
            </h2>
            <p className="text-[#6B5E4A] text-base leading-relaxed mb-8">
              Wir freuen uns auf Ihren Besuch in der Dieselstraße 2 in Karlsfeld.
            </p>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#E0D5C0]">
              {hours.map((row, i) => (
                <div
                  key={row.day}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    i < hours.length - 1 ? 'border-b border-[#F0E8D8]' : ''
                  } ${row.open ? 'hover:bg-[#FDFAF5]' : 'opacity-40'}`}
                >
                  <span className="font-medium text-[#2A2018] text-sm md:text-base">{row.day}</span>
                  <span className={`font-semibold text-sm md:text-base ${row.open ? 'text-[#3D6E0F]' : 'text-[#B0A898]'}`}>
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-10">
            <div className="bg-[#3D6E0F] rounded-3xl p-8 lg:p-10 text-white">
              <h3 className="mb-6 text-2xl" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}>
                So finden Sie uns
              </h3>
              <div className="space-y-5 text-white/75 text-sm md:text-base">
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Adresse</p>
                  <p>Dieselstraße 2<br />85757 Karlsfeld</p>
                </div>
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">Telefon</p>
                  <a href="tel:+4915112139212" className="hover:text-white transition-colors">0151 12 13 92 12</a>
                </div>
                <div>
                  <p className="text-[#C49A3C] text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5">E-Mail</p>
                  <a href="mailto:selda.kadic@yahoo.de" className="hover:text-white transition-colors">selda.kadic@yahoo.de</a>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Dieselstraße+2+85757+Karlsfeld"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full bg-white text-[#3D6E0F] py-3.5 rounded-full font-semibold text-sm text-center
                           hover:bg-[#F4EDE2] active:scale-[0.98] transition-all duration-200"
              >
                In Google Maps öffnen
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
