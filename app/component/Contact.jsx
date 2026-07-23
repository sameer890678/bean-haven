import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-amber-50 py-24 px-20">

      {/* Heading */}
      <div className="text-center mb-14">

        <p className="text-amber-700 font-semibold tracking-widest uppercase">
          Contact
        </p>

        <h2 className="text-5xl font-bold text-amber-950 mt-2">
          Visit Bean Haven
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-stone-700">
          We'd love to welcome you! Stop by for a fresh cup of coffee or get in
          touch if you have any questions.
        </p>

      </div>

      {/* Contact Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-12">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h3 className="text-2xl font-bold text-amber-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

        
              
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-amber-900" />
                <p>123 Brew Street Coffee District Seattle, WA 98101</p>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhone className="text-amber-900" />
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-amber-900" />
                <p>hello@beanhaven.com</p>
              </div>
              
              <div className="flex items-center gap-3">
                <FaClock className="text-amber-900" />
                <p>Mon - Sun | 8:00 AM - 10:00 PM</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center bg-amber-100 rounded-2xl p-10">

            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              We'd Love to See You!
            </h3>

            <p className="text-stone-700 leading-8 mb-8">
              Whether you're looking for your morning coffee, a cozy place to
              work, or a relaxing evening with friends, Bean Haven is always
              ready to serve you.
            </p>

            <button className="px-6 py-3 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition duration-300 cursor-pointer">
              Get Directions
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}