import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import BuildingVideo from "./components/BuildingVideo";
import VirtualTour from "./components/VirtualTour";
import ApartmentTypes from "./components/ApartmentTypes";
import FloorPlans from "./components/FloorPlans";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { getFloors } from "./data/building";

export default async function Home() {
  const floors = await getFloors();

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <BuildingVideo />
      <VirtualTour />
      <ApartmentTypes />
      <FloorPlans floors={floors} />
      <ContactSection />
      <Footer />
    </main>
  );
}
