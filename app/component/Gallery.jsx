export default function Gallery() {
  return (
    <section className="bg-amber-100 py-24 px-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-amber-700 font-semibold tracking-widest uppercase">
          Gallery
        </p>

        <h2 className="text-5xl font-bold text-amber-950 mt-2">
          A Taste of Bean Haven
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-lg text-stone-700 leading-8">
          Step inside Bean Haven and explore our handcrafted coffee, cozy
          atmosphere, talented baristas, and delicious treats through our
          gallery.
        </p>

      </div>

      {/* Gallery Grid */}

      <div className="grid grid-cols-3 gap-8">

        <img
          src="/images/gallery/gallery1.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

        <img
          src="/images/gallery/gallery2.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

        <img
          src="/images/gallery/gallery3.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

        <img
          src="/images/gallery/gallery4.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

        <img
          src="/images/gallery/gallery5.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

        <img
          src="/images/gallery/gallery6.jpg"
          alt="Coffee"
          className="w-full h-80 object-cover rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
        />

      </div>

    </section>
  );
}