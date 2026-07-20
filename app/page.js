import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedMenu from "./component/FeaturedMenu";
import AboutUs from "./component/AboutUs";
import About from "./component/About";
import Gallery from "./component/Gallery";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <About />
      <Gallery />
      <AboutUs />
    </>
  );
}
