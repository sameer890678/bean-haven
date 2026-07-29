"use client";

import {useState} from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-amber-950/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
      
      {menuOpen && (
  <div className="md:hidden bg-amber-950 px-4 pb-4">

    <div className="flex flex-col space-y-4 text-white font-medium">

      <Link href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </Link>

      <Link href="#menu" onClick={() => setMenuOpen(false)}>
        Menu
      </Link>

      <Link href="#about" onClick={() => setMenuOpen(false)}>
        About
      </Link>

      <Link href="#gallery" onClick={() => setMenuOpen(false)}>
        Gallery
      </Link>

      <Link href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </Link>

      <Link
        href="https://www.google.com/maps/place/123+Brew+Street,+Coffee+District,+Seattle,+WA+98101"
        target="_blank"
        className="mt-2 px-4 py-2 rounded-lg bg-amber-600 text-center"
      >
        Visit Us
      </Link>

    </div>

  </div>
)}
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-amber-300 hover:text-white transition duration-300"
        >
          Bean Haven
        </Link>

        {/* Navigation Links */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
      >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            href="#home"
            className="hover:text-amber-300 transition duration-300"
          >
            Home
          </Link>

          <Link
            href="#menu"
            className="hover:text-amber-300 transition duration-300"
          >
            Menu
          </Link>

          <Link
            href="#about"
            className="hover:text-amber-300 transition duration-300"
          >
            About
          </Link>

          <Link
            href="#gallery"
            className="hover:text-amber-300 transition duration-300"
          >
            Gallery
          </Link>

          <Link
            href="#contact"
            className="hover:text-amber-300 transition duration-300"
          >
            Contact
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          href="https://www.google.com/maps/place/123+Brew+Street,+Coffee+District,+Seattle,+WA+98101"
          target="_blank"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-500 hover:scale-105 transition duration-300 shadow-lg"
        >
          Visit Us
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;