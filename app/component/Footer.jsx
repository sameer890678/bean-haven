import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-16 px-20">

      <div className="grid grid-cols-3 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400">
            Bean Haven
          </h2>

          <p className="mt-4 text-stone-300 leading-7">
            Freshly brewed coffee crafted with passion. Experience premium
            flavors, warm hospitality, and a cozy atmosphere every time you
            visit Bean Haven.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 text-amber-300">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/menu" className="hover:text-amber-400 transition">
                Menu
              </Link>
            </li>

            <li>
              <Link href="/gallery" className="hover:text-amber-400 transition">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-amber-400 transition">
                About
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-amber-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Information */}
        <div>

          <h3 className="text-2xl font-semibold mb-5 text-amber-300">
            Contact Us
          </h3>

          <div className="space-y-3 text-stone-300">

            <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-amber-400" />
            <p>123 Coffee Street, Lahore</p>
            </div>

            <p>📞 +1 (555) 123-4567</p>

            <p>✉️ hello@beanhaven.com</p>

            <p>🕒 Mon - Sun | 8:00 AM - 10:00 PM</p>

          </div>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="border-t border-amber-800 mt-12 pt-6 flex justify-between items-center">

        <p className="text-stone-400">
          © 2026 Bean Haven. All Rights Reserved.
        </p>

        <div className="flex gap-5 text-xl">

          <a href="#" className="hover:text-amber-400 transition">
            Facebook
          </a>

          <a href="#" className="hover:text-amber-400 transition">
            Instagram
          </a>

          <a href="#" className="hover:text-amber-400 transition">
            Twitter
          </a>

        </div>

      </div>

    </footer>
  );
}