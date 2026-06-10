'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '#spezialitaeten', label: 'Spezialitäten' },
  { href: '#catering',       label: 'Catering' },
  { href: '#ueber-uns',      label: 'Über uns' },
  { href: '#oeffnungszeiten',label: 'Öffnungszeiten' },
  { href: '#kontakt',        label: 'Kontakt' },
];

type VT = { ready: Promise<void>; finished?: Promise<void> };
type DocWithVT = Document & { startViewTransition?: (cb: () => void) => VT };

export default function Header() {
  const [open, setOpen]       = useState(false);
  const [solid, setSolid]     = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const { theme, setTheme }   = useTheme();
  const pathname              = usePathname();
  const effectiveSolid        = solid || pathname !== '/';

  // Scroll-spy: update URL hash as sections scroll into view
  useEffect(() => {
    if (pathname !== '/') return;
    const ids = [
      'spezialitaeten', 'catering', 'ueber-uns',
      'oeffnungszeiten', 'faq', 'bewertungen', 'kontakt',
    ];
    const spy = () => {
      let active = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          active = id;
        }
      }
      const next = active ? `#${active}` : window.location.pathname;
      if (window.location.hash !== (active ? `#${active}` : '')) {
        history.replaceState(null, '', next);
      }
    };
    window.addEventListener('scroll', spy, { passive: true });
    return () => window.removeEventListener('scroll', spy);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
    const handler = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const startVT = (document as DocWithVT).startViewTransition;

    if (!startVT) {
      setTheme(next);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const r = Math.hypot(
      Math.max(x, window.innerWidth  - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.classList.add('vt-running');

    const vt = startVT.call(document, () => setTheme(next));

    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' },
      );
    });

    vt.finished?.then(() => root.classList.remove('vt-running'));
  }, [theme, setTheme]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        effectiveSolid
          ? 'bg-[var(--nav-bg)] border-border shadow-sm'
          : 'bg-transparent border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-20 md:h-24">

        {/* Logo */}
        <a href={pathname === '/' ? '#' : '/'} aria-label="Feinkost Mesch Karlsfeld – Startseite">
          <Image
            src="/images/logo.webp"
            alt="Feinkost Mesch Karlsfeld – Logo"
            width={180}
            height={52}
            className="h-11 md:h-13 w-auto transition-[filter,opacity] duration-300 hover:opacity-100"
            style={{
              opacity: effectiveSolid ? 0.95 : 1,
              filter: !effectiveSolid
                ? 'drop-shadow(0 1px 5px rgba(0,0,0,0.65)) drop-shadow(0 0 12px rgba(0,0,0,0.4))'
                : mounted && theme === 'dark'
                  ? 'brightness(1.15) saturate(1.1) drop-shadow(0 0 4px rgba(116,180,38,0.2))'
                  : 'none',
            }}
            priority
          />
        </a>

        {/* Desktop-Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200
                after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-px after:bg-accent
                after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                ${effectiveSolid ? 'text-muted hover:text-foreground' : 'text-white/85 hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                effectiveSolid
                  ? 'border-border text-muted hover:text-foreground hover:border-accent/50'
                  : 'border-white/25 text-white/85 hover:border-white/50 hover:text-white'
              }`}
              aria-label="Design-Modus wechseln"
            >
              <span key={theme} className="theme-icon-anim">
                {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
              </span>
            </button>
          )}

          <a
            href="#kontakt"
            className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 ${
              effectiveSolid
                ? 'border border-accent/60 text-accent hover:bg-accent hover:text-accent-foreground'
                : 'border border-white/40 text-white/85 hover:bg-white/10 hover:text-white'
            }`}
          >
            Catering anfragen
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${
            effectiveSolid ? 'text-muted hover:text-foreground' : 'text-white/80 hover:text-white'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Scroll progress */}
      <div
        className="absolute bottom-0 left-0 h-px pointer-events-none"
        style={{
          width: `${progress}%`,
          background: 'var(--accent)',
          opacity: effectiveSolid ? 0.55 : 0,
          transition: 'width 0.12s linear, opacity 0.4s ease',
        }}
      />

      {/* Mobile-Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        } bg-[var(--nav-bg)] backdrop-blur-md border-t border-border`}
      >
        <nav className="flex flex-col px-5 py-5 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-foreground py-3 px-3 rounded-lg hover:bg-surface-muted transition-colors text-[15px] font-medium"
            >
              {l.label}
            </a>
          ))}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2.5 text-muted hover:text-foreground py-3 px-3 rounded-lg hover:bg-surface-muted transition-colors text-[15px] text-left"
            >
              <span key={theme} className="theme-icon-anim">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </span>
              <span>{theme === 'dark' ? 'Helles Design' : 'Dunkles Design'}</span>
            </button>
          )}

          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-3 border border-accent/60 text-accent px-5 py-3.5 rounded-full font-semibold text-center text-[15px] hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Catering anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
