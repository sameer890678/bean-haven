import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-20 lg:py-28 bg-amber-50 gap-16 lg:gap-20">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-950 leading-tight tracking-tight max-w-xl mx-auto lg:mx-0">
          Freshly Brewed Coffee, Crafted with Passion
        </h1>

        <p className="mt-6 text-base md:text-lg text-stone-600 leading-7 md:leading-8 max-w-lg mx-auto lg:mx-0 text-justify">
          Indulge in the rich aroma and exquisite flavors of our carefully
          selected coffee beans, roasted to perfection for a truly satisfying
          experience.
        </p>

        <div className="flex justify-center lg:justify-start mt-8">
         <a
           href="/menu/menu.pdf"
           target="_blank"
           rel="noopener noreferrer"
           className="px-8 py-3 border-2 border-amber-700 text-amber-700 font-semibold rounded-lg hover:bg-amber-700 hover:text-white transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl">
            View Menu
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/image.jpg"
          alt="Freshly brewed coffee"
          width={450}
          height={450}
          className="w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-[32px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
        />
      </div>
    </section>
  );
}