import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Catering from "@/components/Catering";
import About from "@/components/About";
import OpeningHours from "@/components/OpeningHours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Catering />
        <About />
        <OpeningHours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
