import Hero from './Hero'
import Gallery from './Gallery'
import Features from './Features'
import CTA from './CTA'

export default function Home({ onBuy }) {
  return (
    <main>
      <Hero />
      <Gallery onBuy={onBuy} />
      <Features />
      <CTA />
    </main>
  )
}
