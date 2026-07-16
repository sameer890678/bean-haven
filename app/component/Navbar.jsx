import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className="flex items-center justify-between gap-20 px-16 py-4 bg-gradient-to-r from-amber-900 to-yellow-800 dark:bg-amber-900">
            <div className="flex font-bold text-2xl text-white">
                <h1>Bean Haven</h1>
            </div>
            <div className="flex gap-6 cursor-pointer font-semibold text-white">
                <Link className="hover:text-amber-400 transition-colors duration-300" href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="px-4 py-2 hover:bg-amber-600 transition-colors duration-300 rounded-lg cursor-pointer font-semibold text-white">
                <Link href="/visit-us">Visit Us</Link>
            </div>
            </div>
        </nav>
        
    );
}

export default Navbar;