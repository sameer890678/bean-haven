export default function FeaturedMenu() {
    return (
        <div className="py-50 px-60 items-center justify-content justify-center bg-gradient-to-r from-amber-950 to-amber-900 sm:items-start">
            <h1 className="mt-8flex max-w-xs items-center justify-content justify-center text-3xl font-semibold leading-10 text-black dark:text-zinc-50">
                Featured Menu
            </h1>
            <p>
                Explore our handpicked selection of specialty coffee drinks, each crafted with care and precision to deliver a unique and satisfying experience. From classic favorites to innovative creations, our featured menu offers something for every coffee enthusiast.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-5">
            <div className="p-6 rounded-xl flex flex-col text-white bg-amber-800 shadow-lg max-w-sm hover:scale-105 transition-transform duration-500">
                <img src="/images/Cappuccino.jpg" alt="Cappuchino" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="text-2xl font-semibold mb-2">Cappuchino</h3>
                <p className="flex items-center justify-content justify-centre">
                    A rich and creamy coffee drink made with espresso and steamed milk.
                </p>
                <p>
                    Price: $3.50
                </p>
                <button className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
                    Order Now
                </button>
            </div>
            <div className="p-6 rounded-xl flex flex-col text-white bg-amber-800 shadow-lg max-w-sm hover:scale-105 transition-transform duration-500">
                <img src="/images/espresso.jpg" alt="Espresso" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="flex justify-content text-2xl font-semibold mb-2">Espresso</h3>
                <p className="flex items-center justify-content justify-centre">
                    A strong and bold coffee drink made with concentrated espresso.
                </p>
                <p>
                    Price: $2.50
                </p>
                <button className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
                    Order Now
                </button>
            </div>
            <div className="p-6 rounded-xl flex flex-col text-white bg-amber-800 shadow-lg max-w-sm hover:scale-105 transition-transform duration-500">
                <img src="/images/latte.jpg" alt="Latte" className="w-full h-48 object-cover mb-4 rounded-lg" />
                <h3 className="flex items-center justify-centre text-2xl font-semibold mb-2">Latte</h3>
                <p className="flex items-center justify-centre">
                    A smooth and velvety coffee drink made with espresso and steamed milk.
                </p>
                <p>
                    Price: $5.00
                </p>
                <button className="mt-4 px-4 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 cursor-pointer">
                    Order Now
                </button>
            </div>
            </div>
        </div>
    );
}

