export default function About() {
  return (
    <section className="bg-amber-50 py-24 px-20">
      <div className="flex items-center justify-between gap-16">

        {/* Left Side - Image */}
        <div className="w-1/2">
          <img
            src="/images/Interior.jpg"
            alt="Coffee Shop"
            className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2">

          <p className="text-amber-700 font-semibold tracking-widest uppercase">
            About Us
          </p>

          <h2 className="mt-3 text-5xl font-bold text-amber-950 leading-tight">
            Every Cup Has a Story
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            At Bean Haven, coffee is more than just a drink—it's an experience.
            We carefully source premium coffee beans from trusted farms and
            roast them with precision to bring out their richest flavors.
          </p>

          <p className="mt-5 text-lg leading-8 text-stone-700">
            Whether you're meeting friends, catching up on work, or simply
            taking a quiet break, our welcoming atmosphere and handcrafted
            beverages are designed to make every visit memorable.
          </p>

          <div className="mt-10 flex gap-6">

            <div>
              <h3 className="text-4xl font-bold text-amber-700">10+</h3>
              <p className="text-stone-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-700">25K+</h3>
              <p className="text-stone-600">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-amber-700">40+</h3>
              <p className="text-stone-600">Coffee Varieties</p>
            </div>

          </div>

          <button className="mt-10 px-8 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition duration-300 cursor-pointer">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}