import { motion, AnimatePresence } from 'framer-motion'

export default function CartPage({ items = [], onRemove, onQtyChange, onBack, onCheckout }) {
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 mb-6"
        >
          ← Continue shopping
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 mb-4">Your Cart</h1>
            {items.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                <AnimatePresence initial={false}>
                  {items.map((it, idx) => (
                    <motion.li
                      key={it.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4"
                    >
                      <img src={it.image} alt={it.title} className="w-20 h-20 rounded-xl object-cover border border-gray-100" />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{it.title}</p>
                        <p className="text-sm text-gray-600">${it.price.toFixed(2)} each</p>
                        <div className="mt-2 inline-flex items-center rounded-full border border-gray-200">
                          <button
                            onClick={() => onQtyChange(it.id, Math.max(1, it.qty - 1))}
                            className="px-3 py-1 text-gray-700 hover:bg-gray-50"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="px-3 py-1 text-sm font-semibold">{it.qty}</span>
                          <button
                            onClick={() => onQtyChange(it.id, it.qty + 1)}
                            className="px-3 py-1 text-gray-700 hover:bg-gray-50"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${(it.price * it.qty).toFixed(2)}</p>
                        <button
                          onClick={() => onRemove(it.id)}
                          className="mt-2 text-sm font-semibold text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="h-fit rounded-2xl border border-gray-100 p-6 bg-gray-50"
          >
            <h2 className="text-lg font-extrabold text-gray-900">Order Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-semibold">${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="">Calculated at checkout</span></div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-extrabold">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              disabled={items.length === 0}
              className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
