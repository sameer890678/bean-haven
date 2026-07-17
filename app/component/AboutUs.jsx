export default function AboutUs() {
  return (
    <section className="flex items-center justify-between py-24 px-20 bg-amber-50">
      
      {/* Left Side - Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src="/images/Barrista.jpg"
          alt="About Bean Haven"
          className="w-[450px] rounded-2xl shadow-xl"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2">
        <h2 className="text-4xl font-bold text-amber-900 mb-6">
          About Bean Haven
        </h2>

        <p className="text-gray-700 leading-8 max-w-lg">
          At Bean Haven, every cup tells a story. We carefully select premium
          coffee beans from trusted farms around the world and roast them to
          perfection. Whether you're looking for a quick morning boost or a
          relaxing afternoon break, our handcrafted coffee is made to deliver
          the perfect experience every single time.
        </p>

        <button className="mt-8 px-6 py-3 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition duration-300 cursor-pointer">
          Learn More
        </button>
      </div>
    </section>
  );
}