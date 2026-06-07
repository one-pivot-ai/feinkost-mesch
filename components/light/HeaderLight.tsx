'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#spezialitaeten-l', label: 'Spezialitäten' },
  { href: '#catering-l',       label: 'Catering' },
  { href: '#ueber-uns-l',      label: 'Über uns' },
  { href: '#oeffnungszeiten-l',label: 'Öffnungszeiten' },
  { href: '#kontakt-l',        label: 'Kontakt' },
];

export default function HeaderLight() {
  const [open, setOpen]   = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const h = () => setSolid(window.scrollY > 80);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-[#FDFAF5]/92 backdrop-blur-xl shadow-sm border-b border-[#E0D5C0]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-20 md:h-24">
        <a href="/variant-light" aria-label="Feinkost Mesch">
          <Image
            src="/images/logo.webp"
            alt="Feinkost Mesch"
            width={180}
            height={52}
            className="h-11 md:h-13 w-auto object-contain transition-opacity hover:opacity-80"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[#2A2018]/70 hover:text-[#2A2018] text-[13px] font-medium tracking-wide transition-colors
                         after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-[#3D6E0F]
                         after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
            className="bg-[#3D6E0F] text-white px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide
                       hover:bg-[#2d5208] transition-all duration-300 shadow-sm"
          >
            Catering anfragen
          </a>
        </nav>

        <button
          className={`md:hidden p-2 transition-colors ${solid ? 'text-[#2A2018]' : 'text-[#2A2018]'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#FDFAF5]/97 backdrop-blur-xl border-t border-[#E0D5C0]`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
               className="text-[#2A2018]/75 hover:text-[#2A2018] py-3 px-3 rounded-lg hover:bg-[#F4EDE2] transition-colors text-[15px]">
              {l.label}
            </a>
          ))}
          <a href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
             onClick={() => setOpen(false)}
             className="mt-2 bg-[#3D6E0F] text-white px-5 py-3.5 rounded-full font-semibold text-center text-[15px]">
            Catering anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
