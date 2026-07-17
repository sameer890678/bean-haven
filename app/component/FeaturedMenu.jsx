export default function FeaturedMenu() {
  return (
    <section className="bg-amber-100 py-24 px-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold text-amber-900">
          Featured Menu
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-stone-700">
          Explore our handpicked selection of handcrafted coffee, prepared with
          premium beans and perfected by our experienced baristas. Every cup is
          made to deliver comfort, warmth, and unforgettable flavor.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <img
            src="/images/Cappuccino.jpg"
            alt="Cappuccino"
            className="w-full h-60 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-amber-900">
              Cappuccino
            </h3>

            <p className="mt-3 text-stone-600 leading-7">
              A rich espresso blended with silky steamed milk and finished with
              a thick layer of creamy foam.
            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="text-2xl font-bold text-amber-700">
                $3.50
              </span>

              <button className="px-5 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition duration-300 cursor-pointer">
                Order Now
              </button>

            </div>

          </div>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <img
            src="/images/espresso.jpg"
            alt="Espresso"
            className="w-full h-60 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-amber-900">
              Espresso
            </h3>

            <p className="mt-3 text-stone-600 leading-7">
              A bold and concentrated coffee with an intense aroma, perfect for
              those who enjoy strong flavors.
            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="text-2xl font-bold text-amber-700">
                $2.50
              </span>

              <button className="px-5 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition duration-300 cursor-pointer">
                Order Now
              </button>

            </div>

          </div>

        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <img
            src="/images/latte.jpg"
            alt="Latte"
            className="w-full h-60 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold text-amber-900">
              Latte
            </h3>

            <p className="mt-3 text-stone-600 leading-7">
              Smooth espresso combined with perfectly steamed milk to create a
              creamy and comforting classic.
            </p>

            <div className="mt-6 flex items-center justify-between">

              <span className="text-2xl font-bold text-amber-700">
                $5.00
              </span>

              <button className="px-5 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition duration-300 cursor-pointer">
                Order Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

