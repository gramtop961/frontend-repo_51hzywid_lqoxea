import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'
import Footer from './components/Footer'

function App() {
  const [view, setView] = useState('home') // 'home' | 'product' | 'cart'
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cart, setCart] = useState([])

  // Sync view with hash for simple routing
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'product') setView('product')
      else if (hash === 'cart') setView('cart')
      else setView('home')
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  const handleBuy = (product) => {
    setSelectedProduct(product)
    setView('product')
    window.location.hash = '#product'
  }

  const handleBackHome = () => {
    setView('home')
    setSelectedProduct(null)
    window.location.hash = '#products'
  }

  const handleGoCart = () => {
    setView('cart')
    window.location.hash = '#cart'
  }

  const addToCart = (item) => {
    setCart((prev) => {
      const id = item.id || `${item.title}-${item.image}`
      const existing = prev.find((p) => p.id === id)
      if (existing) {
        return prev.map((p) => (p.id === id ? { ...p, qty: p.qty + (item.qty || 1) } : p))
      }
      return [...prev, { id, title: item.title, image: item.image, price: item.price, qty: item.qty || 1 }]
    })
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((p) => p.id !== id))

  const changeQty = (id, qty) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)))

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onHome={handleBackHome} onCart={handleGoCart} cartCount={cart.reduce((n, i) => n + i.qty, 0)} />
      {view === 'home' && <Home onBuy={handleBuy} />}
      {view === 'product' && (
        <ProductPage
          product={selectedProduct || undefined}
          onBack={handleBackHome}
          onAddToCart={(entry) => {
            addToCart(entry)
            handleGoCart()
          }}
        />
      )}
      {view === 'cart' && (
        <CartPage
          items={cart}
          onRemove={removeFromCart}
          onQtyChange={changeQty}
          onBack={handleBackHome}
          onCheckout={() => alert('Checkout is mocked in this demo.')} 
        />
      )}
      <Footer />
    </div>
  )
}

export default App
