import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import FeaturedMenu from "./component/FeaturedMenu";
import AboutUs from "./component/AboutUs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center font-sans dark:bg-blue-500">
        <Navbar />
      </div>
      <div className="flex flex-1 font-sans dark:bg-blue-500">
        <Hero />
      </div>
      <div className="flex flex-1 font-sans dark:bg-blue-500">
        <FeaturedMenu />  
      </div>
      <div className="flex flex-1 font-sans dark:bg-blue-500">
        <AboutUs />
      </div>
    </>
  );
}
