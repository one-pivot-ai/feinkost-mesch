'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { ExternalLink, X, Lock, AlertTriangle } from 'lucide-react';

interface PendingLink {
  href: string;
  domain: string;
}

export default function ExternalLinkGuard() {
  const [pending, setPending] = useState<PendingLink | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setPending(null), []);

  const proceed = useCallback(() => {
    if (pending) {
      window.open(pending.href, '_blank', 'noopener,noreferrer');
    }
    setPending(null);
  }, [pending]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const isBlank = target.getAttribute('target') === '_blank';
      if (!href || !isBlank) return;

      // Only intercept http/https external links (skip tel:, mailto:, relative)
      if (!href.startsWith('http://') && !href.startsWith('https://')) return;

      // Skip same-origin links
      try {
        const url = new URL(href);
        if (url.origin === window.location.origin) return;
        e.preventDefault();
        const domain = url.hostname.replace(/^www\./, '');
        setPending({ href, domain });
      } catch {
        // Invalid URL — let it pass
      }
    };

    document.addEventListener('click', handler, true);
    return () => document.removeEventListener('click', handler, true);
  }, []);

  useEffect(() => {
    if (!pending) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [pending, close]);

  // Focus trap
  useEffect(() => {
    if (!pending || !dialogRef.current) return;
    const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();
  }, [pending]);

  if (!pending) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="elg-title"
    >
      <div
        ref={dialogRef}
        className="w-full max-w-sm bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header band */}
        <div className="relative flex items-center gap-3 px-5 pt-5 pb-4">
          <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
            <ExternalLink size={18} className="text-accent-foreground" strokeWidth={2} />
          </div>
          <div>
            <p
              id="elg-title"
              className="text-foreground font-bold text-base leading-tight"
            >
              Externe Website
            </p>
            <p className="text-muted text-xs mt-0.5">Weiterleitung außerhalb dieser Seite</p>
          </div>
          <button
            onClick={close}
            aria-label="Schließen"
            className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-surface-muted transition-colors duration-200"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 pb-4">
          <p className="text-muted text-sm leading-relaxed">
            Sie werden zu{' '}
            <span className="font-semibold text-foreground">{pending.domain}</span>{' '}
            weitergeleitet. Diese Seite liegt außerhalb von{' '}
            <span className="font-medium text-foreground">feinkost-mesch.de</span>.
          </p>
        </div>

        {/* Info box */}
        <div className="mx-5 mb-5 bg-surface-muted border border-border rounded-xl overflow-hidden divide-y divide-border">
          <div className="flex items-center gap-3 px-4 py-3">
            <Lock size={14} className="text-muted shrink-0" strokeWidth={1.5} />
            <p className="text-muted text-xs leading-snug">
              Feinkost Mesch ist nicht verantwortlich für Inhalte externer Seiten.
            </p>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <AlertTriangle size={14} className="text-muted shrink-0" strokeWidth={1.5} />
            <p className="text-muted text-xs leading-snug">
              Es gelten die Datenschutzrichtlinien von{' '}
              <span className="font-medium">{pending.domain}</span>.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 px-5 pb-5">
          <button
            onClick={close}
            className="px-4 py-2.5 rounded-xl border border-border bg-surface-muted text-muted hover:text-foreground hover:border-border/80 transition-colors duration-200 text-sm font-medium"
          >
            Bleiben
          </button>
          <button
            onClick={proceed}
            className="px-4 py-2.5 rounded-xl bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-200 text-sm font-semibold"
          >
            Fortfahren
          </button>
        </div>
      </div>
    </div>
  );
}
