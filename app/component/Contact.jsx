import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-amber-50 py-16 lg:py-24 px-6 md:px-12 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-amber-700 font-semibold tracking-widest uppercase">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mt-2">
          Visit Bean Haven
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg leading-8 text-stone-700 px-2">
          We'd love to welcome you! Stop by for a fresh cup of coffee or get in
          touch if you have any questions.
        </p>

      </div>

      {/* Contact Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-xl md:text-2xl font-bold text-amber-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

        
              
              <div className="flex items-start gap-3 text-stone-700">
                <FaMapMarkerAlt className="text-amber-900" />
                <p>123 Brew Street Coffee District Seattle, WA 98101</p>
              </div>
              
              <div className="flex items-start gap-3 text-stone-700">
                <FaPhone className="text-amber-900" />
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-start gap-3 text-stone-700">
                <FaEnvelope className="text-amber-900" />
                <p>hello@beanhaven.com</p>
              </div>
              
              <div className="flex items-start gap-3 text-stone-700">
                <FaClock className="text-amber-900" />
                <p>Mon - Sun | 8:00 AM - 10:00 PM</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center bg-amber-100 rounded-2xl p-6 md:p-10">

            <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
              We'd Love to See You!
            </h3>

            <p className="text-stone-700 leading-8 mb-8 text-justify">
              Whether you're looking for your morning coffee, a cozy place to
              work, or a relaxing evening with friends, Bean Haven is always
              ready to serve you.
            </p>

            <a 
             href="https://www.google.com/maps/place/123+Brew+Street,+Coffee+District,+Seattle,+WA+98101"
             target="_blank"
             className="w-full md:w-fit px-6 py-3 flex items-center justify-center bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition duration-300 cursor-pointer">
              Get Directions
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}