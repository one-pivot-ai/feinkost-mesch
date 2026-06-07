import Image from 'next/image';
import Link from 'next/link';

export default function FooterLight() {
  return (
    <footer className="bg-[#2A2018] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Image
              src="/images/logo.webp"
              alt="Feinkost Mesch"
              width={160}
              height={46}
              className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-90 transition-opacity mb-5"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Hausgemachte mediterrane Feinkost in Karlsfeld – seit 2009 mit Leidenschaft.
            </p>
          </div>
          <div>
            <h4 className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Kontakt</h4>
            <div className="space-y-2.5 text-white/55 text-sm">
              <p>Dieselstraße 2, 85757 Karlsfeld</p>
              <a href="tel:+4915112139212" className="block hover:text-white transition-colors">0151 12 13 92 12</a>
              <a href="mailto:selda.kadic@yahoo.de" className="block hover:text-white transition-colors">selda.kadic@yahoo.de</a>
              <p className="text-white/30 pt-1">Mo – Fr: 10:00 – 18:00 Uhr</p>
            </div>
          </div>
          <div>
            <h4 className="text-white/40 text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">Rechtliches</h4>
            <div className="space-y-2.5">
              <Link href="/impressum" className="block text-white/55 hover:text-white transition-colors text-sm">Impressum</Link>
              <Link href="/datenschutz" className="block text-white/55 hover:text-white transition-colors text-sm">Datenschutz</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Feinkost Mesch. Alle Rechte vorbehalten.</p>
          <p className="text-white/18 text-sm italic" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Kein guter Ort für Diäten.
          </p>
        </div>
      </div>
    </footer>
  );
}
