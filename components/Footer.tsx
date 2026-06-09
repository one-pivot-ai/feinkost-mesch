import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          <div>
            <Image
              src="/images/logo.webp"
              alt="Feinkost Mesch Karlsfeld"
              width={160}
              height={46}
              className="h-10 w-auto logo-muted mb-5"
            />
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Hausgemachte mediterrane Feinkost in Karlsfeld – seit 2009.
              Frischkäsecremes, Antipasti und Catering für Ihre Anlässe.
            </p>
          </div>

          <div>
            <h4 className="text-muted text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
              Kontakt &amp; Adresse
            </h4>
            <address className="not-italic space-y-2.5 text-muted text-sm">
              <p>Dieselstraße 2, 85757 Karlsfeld</p>
              <a href="tel:+4915112139212" className="block hover:text-foreground transition-colors">
                0151 12 13 92 12
              </a>
              <a href="mailto:selda.kadic@yahoo.de" className="block hover:text-foreground transition-colors">
                selda.kadic@yahoo.de
              </a>
              <p className="opacity-60 pt-1">Mo – Fr: 10:00 – 18:00 Uhr</p>
            </address>
          </div>

          <div>
            <h4 className="text-muted text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
              Rechtliches
            </h4>
            <div className="space-y-2.5">
              <Link href="/impressum" className="block text-muted hover:text-foreground transition-colors text-sm">
                Impressum
              </Link>
              <Link href="/datenschutz" className="block text-muted hover:text-foreground transition-colors text-sm">
                Datenschutz
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-7 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3">
          <p className="text-muted/70 text-xs">
            © {new Date().getFullYear()} Feinkost Mesch, Karlsfeld. Alle Rechte vorbehalten.
          </p>
          <span className="hidden sm:block text-muted/30 text-xs">·</span>
          <a
            href="https://ai-pivot.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted/70 hover:text-muted transition-colors text-xs"
          >
            Made by Pivot AI
          </a>
        </div>
      </div>
    </footer>
  );
}
