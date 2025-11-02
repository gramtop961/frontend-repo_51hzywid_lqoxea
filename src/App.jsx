import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home') // 'home' | 'product'
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleBuy = (product) => {
    setSelectedProduct(product)
    setView('product')
    // Update URL hash for a light-weight deep link (no extra deps)
    window.location.hash = '#product'
  }

  const handleBackHome = () => {
    setView('home')
    setSelectedProduct(null)
    window.location.hash = '#products'
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onHome={handleBackHome} />
      {view === 'home' ? (
        <Home onBuy={handleBuy} />
      ) : (
        <ProductPage product={selectedProduct || undefined} onBack={handleBackHome} />
      )}
      <Footer />
    </div>
  )
}

export default App
