import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Feinkost Mesch Karlsfeld',
  robots: { index: false, follow: false },
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

          <div className="bg-surface rounded-2xl p-8 shadow-sm border border-border space-y-8 text-muted text-sm leading-relaxed">

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich im Sinne der DSGVO für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="mt-3">
                Selda Meschkotat<br />
                Feinkost Mesch<br />
                Dieselstraße 2<br />
                85757 Karlsfeld<br /><br />
                Telefon: <a href="tel:+4915112139212" className="text-accent hover:underline">0151 12 13 92 12</a><br />
                E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-accent hover:underline">selda.kadic@yahoo.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">2. Allgemeines zur Datenverarbeitung</h2>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte erforderlich ist. Die Verarbeitung personenbezogener
                Daten erfolgt nur nach Einwilligung des Nutzers oder wenn die Verarbeitung durch gesetzliche Vorschriften
                erlaubt ist.
              </p>
              <p className="mt-3">
                Diese Website verwendet keine Cookies, kein Web-Analytics und kein Tracking. Es werden keine
                personenbezogenen Daten für Werbe- oder Marketingzwecke verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">3. Hosting – Vercel</h2>
              <p>
                Diese Website wird gehostet bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
                Bei jedem Aufruf unserer Website erfasst Vercel automatisch sogenannte Server-Log-Dateien. Diese enthalten:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem des anfragenden Rechners</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="mt-3">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an einem sicheren und stabilen Websitebetrieb). Die Daten werden nicht mit anderen Datenquellen
                zusammengeführt. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel:{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  vercel.com/legal/privacy-policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">4. Externe Links</h2>

              <h3 className="font-semibold text-foreground mb-2">Google Maps</h3>
              <p>
                Unsere Website enthält Links zu Google Maps (Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4,
                Irland). Beim Klick auf einen solchen Link verlassen Sie unsere Website und werden zu Google Maps
                weitergeleitet. Google kann dabei Daten über Sie erfassen. Wir haben keinen Einfluss auf diese
                Datenerhebung. Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  policies.google.com/privacy
                </a>.
              </p>

              <h3 className="font-semibold text-foreground mb-2 mt-4">WhatsApp</h3>
              <p>
                Unsere Website enthält einen Link zu WhatsApp (Meta Platforms Ireland Ltd., 4 Grand Canal Square,
                Dublin 2, Irland). Beim Klick auf diesen Link werden Sie zur WhatsApp-App bzw. dem WhatsApp-Webdienst
                weitergeleitet. Dabei können Daten wie Ihre Telefonnummer und IP-Adresse an Meta übermittelt werden.
                Weitere Informationen:{' '}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  whatsapp.com/legal/privacy-policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">5. Ihre Rechte</h2>
              <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p className="mt-3">
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten durch uns zu beschweren. Zuständige Aufsichtsbehörde für Bayern ist das
                Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground mb-3">6. Kontakt bei Datenschutzfragen</h2>
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:<br /><br />
                Selda Meschkotat<br />
                E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-accent hover:underline">selda.kadic@yahoo.de</a><br />
                Telefon: <a href="tel:+4915112139212" className="text-accent hover:underline">0151 12 13 92 12</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
