import { useState } from 'react'

export default function DiscountModal({ open, onClose, onApply }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // very light validation
    const ok = /.+@.+\..+/.test(email)
    if (!ok) {
      setError('Please enter a valid email to receive your $5 discount.')
      return
    }
    onApply?.()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-100 p-6">
        <h3 className="text-xl font-extrabold tracking-tight">Get $5 off your order</h3>
        <p className="mt-1 text-gray-600">Drop your email and we’ll apply an instant discount at checkout.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-900"
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-semibold hover:shadow"
            >
              Apply $5 off
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              Not now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
