import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa6";

import { FaLocationDot } from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-20 px-6 md:px-12 lg:px-20">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-xl md:text-4xl font-bold text-amber-400 tracking-wide">
            Bean Haven
          </h2>

          <p className="mt-4 text-sm md:text-base text-stone-400 leading-8 text-justify">
            Freshly brewed coffee crafted with passion. Experience premium
            flavors, warm hospitality, and a cozy atmosphere every time you
            visit Bean Haven.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-5 text-amber-300 uppercase tracking-wider">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li>
              <Link href="#home" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="#menu" className="hover:text-amber-400 transition">
                Menu
              </Link>
            </li>

            <li>
              <Link href="#gallery" className="hover:text-amber-400 transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="#about" className="hover:text-amber-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="#contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Information */}
        <div>

          <h3 className="text-2xl font-semibold mb-5 text-amber-300 uppercase tracking-wider">
            Contact Us
          </h3>

          <div className="space-y-3 text-stone-300">

            <div className="flex items-start gap-3">
            <FaLocationDot className="text-amber-300 text-lg" />
            <p>123 Brew Street Coffee District Seattle, WA 98101</p>
            </div>

            <div className="flex items-start gap-3">
            <FaPhone className="text-amber-300 text-lg" />
            <p>+1 (555) 123-4567</p>
            </div>

            <div className="flex items-start gap-3">
            <FaEnvelope className="text-amber-300 text-lg" />
            <p>hello@beanhaven.com</p>
            </div>

            <div className="flex items-start gap-3">
            <FaClock className="text-amber-300 text-lg" />
            <p>Mon - Sun | 8:00 AM - 10:00 PM</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="border-t border-amber-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-stone-500 text-sm text-center md:text-left">
          © 2026 Bean Haven. All Rights Reserved.
        </p>

        <div className="flex gap-5 text-3xl">

        <a href="https://www.facebook.com/">
        <FaFacebook className="hover:text-amber-300 hover:-translate-y-1 hover:scale-110 transition duration-300" />
        </a>

        <a href="https://www.instagram.com/">
        <FaInstagram className="hover:text-amber-300 hover:-translate-y-1 hover:scale-110 transition duration-300" />
        </a>

        <a href="https://x.com/">
        <FaXTwitter className="hover:text-amber-300 hover:-translate-y-1 hover:scale-110 transition duration-300" />
        </a>

      </div>

      </div>

    </footer>
  );
}