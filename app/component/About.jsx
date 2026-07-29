import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-amber-50 py-16 lg:py-28 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/Interior.jpg"
            alt="Coffee Shop"
            width={500}
            height={500}
            className="w-full max-w-md lg:max-w-full h-80 md:h-[450px] lg:h-[500px] object-cover rounded-3xl shadow-2xl mx-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <p className="text-amber-700 font-semibold tracking-widest uppercase">
            About Us
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-amber-950 leading-tight tracking-tight">
            Every Cup Has a Story
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-stone-700 text-justify">
            At Bean Haven, coffee is more than just a drink—it's an experience.
            We carefully source premium coffee beans from trusted farms and
            roast them with precision to bring out their richest flavors.
          </p>

          <p className="mt-5 text-lg leading-8 text-stone-700 text-justify">
            Whether you're meeting friends, catching up on work, or simply
            taking a quiet break, our welcoming atmosphere and handcrafted
            beverages are designed to make every visit memorable.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-8">

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

        </div>

      </div>
    </section>
  );
}