import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VirtualTour from "./components/VirtualTour";
import ApartmentTypes from "./components/ApartmentTypes";
import FloorPlans from "./components/FloorPlans";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <VirtualTour />
      <ApartmentTypes />
      <FloorPlans />
      <ContactSection />
      <Footer />
    </main>
  );
}
