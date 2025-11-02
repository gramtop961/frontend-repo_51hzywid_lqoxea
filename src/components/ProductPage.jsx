import { useEffect, useState } from 'react'
import DiscountModal from './DiscountModal'

const DEFAULT_PRODUCT = {
  title: 'Smecrer Kenama — Pro Series',
  image:
    'https://images.unsplash.com/photo-1675328657878-194029e7ccbc?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  price: 40,
}

const reviews = [
  {
    name: 'Luca M.',
    rating: 5,
    text: 'Balance is unreal. Sticky tama and crisp bevel make stalls effortless.'
  },
  {
    name: 'Ava R.',
    rating: 5,
    text: 'Gorgeous finish and feels premium in hand. Worth every dollar.'
  },
  {
    name: 'Noah T.',
    rating: 4,
    text: 'Great control. Packaging was nice too. Would buy again.'
  }
]

export default function ProductPage({ product = DEFAULT_PRODUCT, onBack }) {
  const [showDiscount, setShowDiscount] = useState(false)
  const [discountApplied, setDiscountApplied] = useState(false)

  useEffect(() => {
    // Show discount popup shortly after the page loads
    const t = setTimeout(() => setShowDiscount(true), 600)
    return () => clearTimeout(t)
  }, [])

  const basePrice = product.price
  const finalPrice = discountApplied ? Math.max(0, basePrice - 5) : basePrice

  return (
    <section className="min-h-[calc(100vh-4rem)] bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 mb-6"
        >
          ← Back to products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">{product.title}</h1>
            <p className="mt-3 text-gray-600">Built for flow. Tuned for control. Designed with a pro-grade cup profile and tacky tama finish for confident spikes and buttery stalls.</p>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-3xl font-extrabold tracking-tight">${finalPrice.toFixed(2)}</span>
              {discountApplied && (
                <span className="text-sm text-green-600 font-semibold">$5 off applied</span>
              )}
            </div>

            {!discountApplied && (
              <button
                onClick={() => setShowDiscount(true)}
                className="mt-4 inline-flex items-center rounded-full bg-emerald-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-emerald-700"
              >
                Get $5 off
              </button>
            )}

            <div className="mt-8">
              <button className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-md">
                Add to Cart
              </button>
            </div>

            <div className="mt-10 border-t border-gray-100 pt-8">
              <h2 className="text-lg font-extrabold tracking-tight mb-4">Reviews</h2>
              <div className="space-y-5">
                {reviews.map((r, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{r.name}</span>
                      <span className="text-amber-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                    </div>
                    <p className="mt-2 text-gray-700">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DiscountModal
        open={showDiscount}
        onClose={() => setShowDiscount(false)}
        onApply={() => {
          setDiscountApplied(true)
          setShowDiscount(false)
        }}
      />
    </section>
  )
}
