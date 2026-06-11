import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Catering from "@/components/Catering";
import About from "@/components/About";
import Founder from "@/components/Founder";
import OpeningHours from "@/components/OpeningHours";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
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
        <Founder />
        <OpeningHours />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
