import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const socials: { label: string; href: string; path: ReactNode }[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/feinkostmesch/',
    path: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/FeinkostMesch/',
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/4915112139212',
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.12 1.533 5.845L.057 23.428a.75.75 0 0 0 .916.916l5.624-1.47A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.774 9.774 0 0 1-5.025-1.383l-.36-.214-3.733.977.997-3.645-.236-.374A9.778 9.778 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
      </svg>
    ),
  },
  {
    label: 'Yelp',
    href: 'https://www.yelp.com/biz/feinkost-mesch-karlsfeld-2',
    path: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]" aria-hidden="true">
        <path d="M20.16 12.73l-3.948 1.12c-1.007.286-1.813-.8-1.266-1.694l2.16-3.598c.55-.915 1.916-.607 2.04.453l.397 3.22a1 1 0 0 1-.383.499zm-9.47 3.53l-1.122 3.948c-.286 1.008.8 1.814 1.694 1.267l3.598-2.16c.915-.55.607-1.916-.453-2.04l-3.22-.397a1 1 0 0 0-.497.382zm-5.1-7.09L2.52 11.3c-.908.574-.608 1.937.452 2.06l3.22.397a1 1 0 0 0 1.1-.883l.397-3.22c.124-1.007-.943-1.773-1.81-1.207l-.298.193zm1.657 8.946l-2.16 3.597c-.55.915.35 2.015 1.38 1.694l3.948-1.122a1 1 0 0 0 .675-1.175l-.793-3.156c-.249-.99-1.513-1.22-2.05-.34l-.999.502zM13.25 2.05l-3.948 1.12C8.295 3.456 8.29 4.73 9.17 5.157l2.913 1.402a1 1 0 0 0 1.337-.523l1.292-2.988c.412-.953-.501-1.94-1.462-1.998z"/>
      </svg>
    ),
  },
];

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

            {/* Social links */}
            <div className="flex items-center gap-2 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-colors duration-200"
                >
                  {s.path}
                </a>
              ))}
            </div>
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
