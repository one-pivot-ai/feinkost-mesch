import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Impressum – Feinkost Mesch Karlsfeld',
  robots: { index: false, follow: false },
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
              <p className="text-sm leading-relaxed">
                Feinkost Mesch<br />
                Inhaberin: Selda Meschkotat<br />
                Dieselstraße 2<br />
                85757 Karlsfeld
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Kontakt</h2>
              <p className="text-sm leading-relaxed">
                Telefon: <a href="tel:+4915112139212" className="text-accent hover:underline">0151 12 13 92 12</a><br />
                E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-accent hover:underline">selda.kadic@yahoo.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Inhalte</h2>
              <p className="text-sm leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder
                Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Haftung für Links</h2>
              <p className="text-sm leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">Urheberrecht</h2>
              <p className="text-sm leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
