import { Truck, Shield, Star, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Performance Finish',
    desc: 'Grippy paint for consistent stalls and lunar balance out of the box.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Pro-Grade Balance',
    desc: 'Optimized sarado-to-ken ratio for reliable juggles and late-catch control.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Built to Last',
    desc: 'Premium maple and beech woods, hand-finished for durability.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Fast Worldwide Shipping',
    desc: 'Tracked shipping with eco-friendly packaging on every order.',
  },
]

export default function Features() {
  return (
    <section id="story" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Smecrer Kenama
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We obsess over weight matching, finish, and balance so you can focus on flow.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
