import { motion } from 'framer-motion'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1675328657878-194029e7ccbc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm8lMjBTZXJpZXMlMjAlRTIlODAlOTMlMjBNYXR0ZSUyMEJsYWNrfGVufDB8MHx8fDE3NjIwOTAwMjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Pro Series – Matte Black',
  },
  {
    src: 'https://images.unsplash.com/photo-1675328657878-194029e7ccbc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcm8lMjBTZXJpZXMlMjAlRTIlODAlOTMlMjBNYXR0ZSUyMEJsYWNrfGVufDB8MHx8fDE3NjIwOTAwMjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Street Edition – Sunset Fade',
  },
  {
    src: 'https://images.unsplash.com/photo-1697988677752-4b43a0a5f0d6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHJlZXQlMjBFZGl0aW9uJTIwJUUyJTgwJTkzJTIwU3Vuc2V0JTIwRmFkZXxlbnwwfDB8fHwxNzYyMDkwMDI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Classic Maple – Satin',
  },
  {
    src: 'https://images.unsplash.com/photo-1761735575053-86276fb0e3ac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbGFzc2ljJTIwTWFwbGUlMjAlRTIlODAlOTMlMjBTYXRpbnxlbnwwfDB8fHwxNzYyMDkwMDI2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Limited Drop – Horizon',
  },
]

export default function Gallery() {
  return (
    <section id="products" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Featured Kendamas
            </h2>
            <p className="text-gray-600 mt-2">Reusable lifestyle photos showcasing real texture and finish.</p>
          </div>
          <a href="#cta" className="hidden sm:inline-block text-indigo-600 font-semibold hover:text-indigo-700">
            View all products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((p, idx) => (
            <motion.figure
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
            >
              <img src={p.src} alt={p.caption} className="h-64 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-semibold drop-shadow">{p.caption}</span>
                <a
                  href="#cta"
                  className="rounded-full bg-white/90 text-gray-900 text-sm font-semibold px-3 py-1.5 shadow hover:bg-white"
                >
                  Buy
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
