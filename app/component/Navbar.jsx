"use client";

import {useState} from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-amber-950/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-5">
      
      {menuOpen && (
        <div
         className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
         menuOpen
      ? "max-h-96 opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
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
  </div>
)}
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-4xl font-extrabold tracking-wide text-amber-300 hover:text-white transition duration-300"
        >
          Bean Haven
        </Link>

        {/* Navigation Links */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
      >
          <span
           className={`inline-block transition-transform duration-300 ${
            menuOpen ? "rotate-90" : "rotate-0"
            }`}
            >
           {menuOpen ? "✕" : "☰"}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-10 text-white font-semibold tracking-wide">

          <Link
            href="#home"
            className="hover:text-amber-300 hover:scale-110 transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="#menu"
            className="hover:text-amber-300 hover:scale-110 transition-all duration-300"
          >
            Menu
          </Link>

          <Link
            href="#about"
            className="hover:text-amber-300 hover:scale-110 transition-all duration-300"
          >
            About
          </Link>

          <Link
            href="#gallery"
            className="hover:text-amber-300 hover:scale-110 transition-all duration-300"
          >
            Gallery
          </Link>

          <Link
            href="#contact"
            className="hover:text-amber-300 hover:scale-110 transition-all duration-300"
          >
            Contact
          </Link>

        </div>

        {/* CTA Button */}
        <Link
          href="https://www.google.com/maps/place/123+Brew+Street,+Coffee+District,+Seattle,+WA+98101"
          target="_blank"
          className="hidden md:inline-block px-5 py-2 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-500 hover:scale-110 active:scale-95 transition duration-300 shadow-lg"
        >
          Visit Us
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;