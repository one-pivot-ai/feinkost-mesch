import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum – Feinkost Mesch Karlsfeld',
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-accent hover:text-foreground font-medium mb-10 transition-colors text-sm">
            ← Zurück zur Startseite
          </Link>

          <h1
            className="text-foreground mb-10"
            style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}
          >
            Impressum
          </h1>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-border space-y-8 text-muted">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                Feinkost Mesch<br />
                Dieselstraße 2<br />
                85757 Karlsfeld
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Kontakt</h2>
              <p>
                Telefon: <a href="tel:+4915112139212" className="text-accent hover:underline">0151 12 13 92 12</a><br />
                E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-accent hover:underline">selda.kadic@yahoo.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
              <p className="text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Links</h2>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Urheberrecht</h2>
              <p className="text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
