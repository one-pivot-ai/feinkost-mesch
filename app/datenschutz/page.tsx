import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz – Feinkost Mesch Karlsfeld',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#5A8A1F] hover:text-[#3d6014] font-medium mb-10 transition-colors">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-10" style={{ fontFamily: 'var(--font-playfair)' }}>
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8 text-[#626262]">
          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="text-sm leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-sm leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Feinkost Mesch<br />
              Dieselstraße 2<br />
              85757 Karlsfeld<br /><br />
              Telefon: <a href="tel:+4915112139212" className="text-[#5A8A1F] hover:underline">0151 12 13 92 12</a><br />
              E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-[#5A8A1F] hover:underline">selda.kadic@yahoo.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-[#2D2D2D] mb-2 text-sm">Server-Log-Dateien</h3>
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
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">4. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
              Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
              Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">5. Hinweis</h2>
            <p className="text-sm leading-relaxed">
              Diese Datenschutzerklärung ist ein Platzhalter und wird bei Bedarf durch eine vollständige,
              rechtlich geprüfte Fassung ersetzt. Bitte lassen Sie die Datenschutzerklärung durch einen
              Rechtsanwalt prüfen, bevor die Website live geht.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
