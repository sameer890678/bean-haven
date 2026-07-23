export default function Hero() {
  return (
    <section id="home" className="flex items-center px-20 py-24 bg-amber-50">
      {/* Left Side */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-amber-950 leading-tight max-w-xl">
          Freshly Brewed Coffee, Crafted with Passion
        </h1>

        <p className="mt-6 text-lg text-stone-600 leading-8 max-w-lg">
          Indulge in the rich aroma and exquisite flavors of our carefully
          selected coffee beans, roasted to perfection for a truly satisfying
          experience.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition duration-300 cursor-pointer shadow-md">
            Order Now
          </button>

          <button className="px-6 py-3 border-2 border-amber-700 text-amber-700 font-semibold rounded-lg hover:bg-amber-700 hover:text-white transition duration-300 cursor-pointer">
            View Menu
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/images/image.jpg"
          alt="Freshly brewed coffee"
          className="w-[450px] h-[450px] object-cover rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
}