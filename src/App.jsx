import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">
            Smecrer <span className="text-indigo-600">Kenama</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#products" className="hover:text-indigo-600">Products</a>
            <a href="#story" className="hover:text-indigo-600">Why Us</a>
            <a href="#cta" className="hover:text-indigo-600">Join</a>
            <a href="/test" className="text-gray-500 hover:text-gray-700">Backend Test</a>
          </nav>
          <a href="#cta" className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">
            Shop Now
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Gallery />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

export default App
