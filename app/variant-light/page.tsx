import type { Metadata } from 'next';
import HeaderLight from '@/components/light/HeaderLight';
import HeroLight from '@/components/light/HeroLight';
import SpecialtiesLight from '@/components/light/SpecialtiesLight';
import CateringLight from '@/components/light/CateringLight';
import AboutLight from '@/components/light/AboutLight';
import OpeningHoursLight from '@/components/light/OpeningHoursLight';
import ContactLight from '@/components/light/ContactLight';
import FooterLight from '@/components/light/FooterLight';

export const metadata: Metadata = {
  title: 'Feinkost Mesch Karlsfeld | Mediterrane Feinkost & Catering',
  description:
    'Hausgemachte mediterrane Feinkost, frische Spezialitäten und Catering in Karlsfeld, München und Umgebung.',
};

export default function VariantLight() {
  return (
    <>
      <HeaderLight />
      <main>
        <HeroLight />
        <SpecialtiesLight />
        <CateringLight />
        <AboutLight />
        <OpeningHoursLight />
        <ContactLight />
      </main>
      <FooterLight />
    </>
  );
}
