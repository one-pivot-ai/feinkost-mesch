import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – Feinkost Mesch Karlsfeld',
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/" className="inline-flex items-center gap-2 text-[#5A8A1F] hover:text-[#3d6014] font-medium mb-10 transition-colors">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-10" style={{ fontFamily: 'var(--font-playfair)' }}>
          Impressum
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8 text-[#626262]">
          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Feinkost Mesch<br />
              Dieselstraße 2<br />
              85757 Karlsfeld
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4915112139212" className="text-[#5A8A1F] hover:underline">0151 12 13 92 12</a><br />
              E-Mail: <a href="mailto:selda.kadic@yahoo.de" className="text-[#5A8A1F] hover:underline">selda.kadic@yahoo.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">Haftung für Inhalte</h2>
            <p className="text-sm leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">Haftung für Links</h2>
            <p className="text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2D2D2D] mb-3">Urheberrecht</h2>
            <p className="text-sm leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
