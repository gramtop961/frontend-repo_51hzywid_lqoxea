import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-300/60 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-indigo-300/60 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Smecrer Kenama
            </motion.h1>
            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Precision-crafted kendamas built for flow, style, and progression. Designed for
              daily play, competition, and creative expression.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition"
              >
                Shop Kendamas
              </a>
              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-full bg-white/70 backdrop-blur px-6 py-3 font-semibold border border-gray-200 text-gray-900 hover:bg-white transition"
              >
                Our Story
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/60">
              <img
                src="https://images.unsplash.com/photo-1601571111140-ec9c4387c338?q=80&w=1200&auto=format&fit=crop"
                alt="Smecrer Kenama premium kendama"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />
            </div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm font-semibold">Hand-finished maple + beech</p>
            </motion.div>

            {/* Extra: Google-found kendama image (Wikimedia hosted) */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/Kendama.jpg"
                alt="Kendama (credit: Wikimedia Commons)"
                className="w-28 h-28 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
