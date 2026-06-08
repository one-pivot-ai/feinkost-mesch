import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutz – Feinkost Mesch Karlsfeld',
};

export default function Datenschutz() {
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
            Datenschutzerklärung
          </h1>

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-border space-y-8 text-muted">
            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
              <p className="text-sm leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">2. Verantwortliche Stelle</h2>
              <p className="text-sm leading-relaxed">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                Feinkost Mesch<br />
                Dieselstraße 2<br />
                85757 Karlsfeld<br /><br />
                Telefon: <a href="tel:+4915112139212" className="text-accent hover:underline">0151 12 13 92 12</a><br />
                E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-accent hover:underline">selda.kadic@yahoo.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-semibold text-foreground mb-2 text-sm">Server-Log-Dateien</h3>
              <p className="text-sm leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem,
                Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              </p>
              <p className="text-sm leading-relaxed">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">4. Ihre Rechte</h2>
              <p className="text-sm leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">5. Hinweis</h2>
              <p className="text-sm leading-relaxed">
                Diese Datenschutzerklärung ist ein Platzhalter und wird bei Bedarf durch eine vollständige,
                rechtlich geprüfte Fassung ersetzt. Bitte lassen Sie die Datenschutzerklärung durch einen
                Rechtsanwalt prüfen, bevor die Website live geht.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
