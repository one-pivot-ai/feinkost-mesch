'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`;
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className="relative h-dvh min-h-[700px] flex items-end pb-20 overflow-hidden">
      {/* Parallax image layer — oversized top so movement never shows a gap */}
      <div className="absolute inset-x-0 bottom-0 -top-[28%]" ref={imgRef} style={{ willChange: 'transform' }}>
        <Image
          src="/images/hero-new.jpg"
          alt="Mediterrane Feinkostplatten und hausgemachte Cremes von Feinkost Mesch in Karlsfeld"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, var(--hero-from) 0%, var(--hero-via) 45%, transparent 100%)' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, var(--hero-side) 0%, transparent 55%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          <div className="hero-in hero-d1 flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/50" />
            <span className="text-white/60 text-xs font-semibold tracking-[0.2em] uppercase">
              Seit 2009 in Karlsfeld
            </span>
          </div>

          <h1
            className="hero-in hero-d2 text-white mb-5 leading-[1.08]"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 400,
            }}
          >
            Mediterrane Feinkost{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300, fontFamily: 'var(--font-highlight)' }}>
              &amp; Catering
            </em>{' '}
            in Karlsfeld
          </h1>

          <p className="hero-in hero-d3 text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Hausgemachte Frischkäsecremes, Antipasti, Mittagssnacks und
            Cateringplatten – frisch zubereitet in der Dieselstraße 2.
          </p>

          <div className="hero-in hero-d4 flex flex-wrap gap-3">
            <a
              href="mailto:selda.kadic@yahoo.de?subject=Catering-Anfrage Feinkost Mesch"
              className="btn-shimmer inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full
                         font-semibold text-sm tracking-wide hover:opacity-90 active:scale-[0.97]
                         transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              Catering anfragen
            </a>
            <a
              href="#spezialitaeten"
              className="inline-flex items-center gap-2 border border-white/30 text-white/85
                         px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide
                         hover:border-white/55 hover:text-white active:scale-[0.97]
                         transition-all duration-200"
            >
              Spezialitäten ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
