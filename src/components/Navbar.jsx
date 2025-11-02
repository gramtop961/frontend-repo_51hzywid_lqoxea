import { ShoppingCart } from 'lucide-react'

export default function Navbar({ onHome, onCart, cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={onHome} className="font-extrabold tracking-tight text-xl">
          Smecrer <span className="text-indigo-600">Kenama</span>
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <button onClick={onHome} className="hover:text-indigo-600">Products</button>
          <a href="#story" className="hover:text-indigo-600">Why Us</a>
          <a href="#cta" className="hover:text-indigo-600">Join</a>
          <a href="/test" className="text-gray-500 hover:text-gray-700">Backend Test</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">
            Shop Now
          </a>
          <button onClick={onCart} className="relative inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full bg-indigo-600 text-white text-xs grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
