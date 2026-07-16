export default function Hero() {    
  return (
    <>
      <div className="flex flex-col py-50 px-60 bg-gradient-to-r from-amber-300 to-orange-300 sm:items-start">
        <h1 className="max-w-xs flex flex-col text-3xl font-semibold leading-10 text-black dark:text-zinc-50">
          Freshly Brewed Coffee, Crafted with Passion
        </h1>
        <p className="flex flex-col max-w-xs mt-4 text-lg leading-6 text-black dark:text-zinc-50">
          Indulge in the rich aroma and exquisite flavors of our carefully selected coffee beans, roasted to perfection for a truly satisfying experience.
        </p>
        <div className="flex mt-6 gap-4">
          <button className="px-6 py-2 text-lg font-semibold text-white bg-amber-700 rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
            Order Now
          </button>
          <button className="px-6 py-2 text-lg font-semibold text-brown bg-orange-300 border border-black rounded-lg hover:bg-brown hover:text-black transition-colors duration-300 cursor-pointer">
            View Menu
          </button>
        </div>
      </div>
      <div className="bg-amber-200 mt-2 px-3 flex w-[400px] h-[400px]">
          <img src="/images/image.jpg" className="w-full h-full object-cover"/>
        </div>
    </>
  );
}