'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#spezialitaeten', label: 'Spezialitäten' },
  { href: '#catering',       label: 'Catering' },
  { href: '#ueber-uns',      label: 'Über uns' },
  { href: '#oeffnungszeiten',label: 'Öffnungszeiten' },
  { href: '#kontakt',        label: 'Kontakt' },
];

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [solid, setSolid]     = useState(false);

  useEffect(() => {
    const handler = () => setSolid(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-[#0A0806]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-20 md:h-24">

        {/* Logo */}
        <a href="#" aria-label="Feinkost Mesch – Startseite">
          <Image
            src="/images/logo.webp"
            alt="Feinkost Mesch"
            width={180}
            height={52}
            className="h-11 md:h-13 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </a>

        {/* Desktop-Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[#EDE9E3]/75 hover:text-[#EDE9E3] text-[13px] font-medium tracking-wide transition-colors duration-200
                         after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-[#C49A3C]
                         after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            className="border border-[#C49A3C]/60 text-[#C49A3C] hover:bg-[#C49A3C] hover:text-white
                       px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide
                       transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,154,60,0.3)]"
          >
            Catering anfragen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#EDE9E3]/80 hover:text-[#EDE9E3] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile-Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0A0806]/95 backdrop-blur-xl border-t border-white/5`}
      >
        <nav className="flex flex-col px-5 py-5 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#EDE9E3]/75 hover:text-[#EDE9E3] py-3 px-3 rounded-lg hover:bg-white/5 transition-colors text-[15px] font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            onClick={() => setOpen(false)}
            className="mt-3 border border-[#C49A3C]/60 text-[#C49A3C] px-5 py-3.5 rounded-full font-semibold text-center text-[15px] hover:bg-[#C49A3C] hover:text-white transition-all duration-300"
          >
            Catering anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
