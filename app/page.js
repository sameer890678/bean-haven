import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";  
import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedMenu from "./component/FeaturedMenu";
import About from "./component/About";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
