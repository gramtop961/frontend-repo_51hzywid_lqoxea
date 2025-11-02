import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="cta" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(800px 200px at 10% 10%, rgba(255,255,255,0.15), transparent)', backgroundRepeat:'no-repeat'}} />
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to level up your flow?</h3>
              <p className="mt-3 text-gray-300 max-w-2xl">Join the Smecrer crew for product drops, trick tutorials, and exclusive discounts.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex w-full max-w-xl mx-auto md:mx-0"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="flex-1 rounded-l-full px-4 py-3 bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-r-full bg-white text-gray-900 px-6 font-semibold hover:bg-gray-100"
                >
                  Join
                </button>
              </form>
            </motion.div>

            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1604431632206-466c41f3f8d1?q=80&w=1200&auto=format&fit=crop"
                  alt="Smecrer Kenama community"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Smecrer Kenama. All rights reserved.</p>
      </div>
    </section>
  )
}
