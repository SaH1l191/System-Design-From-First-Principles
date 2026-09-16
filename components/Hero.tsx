import Link from 'next/link'

export function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">A stage-by-stage system design reference</p>
      <h1 className="hero-title">
        System Design, from <em>first principles</em>.
      </h1>
      <p className="hero-description">
        Most system design material teaches you to memorize architectures. This
        teaches you the machinery underneath — why a database uses B-Trees and
        not red-black trees, what a load balancer actually decides per
        request, what CAP really means and what it doesn&apos;t. Every chapter
        is a self-contained reference with diagrams, tradeoff tables, and
        interview-ready explanations.
      </p>
      <nav className="hero-actions" aria-label="Getting started">
        <Link href="/01-core-building-blocks" className="btn btn-primary">
          Start with Core Building Blocks <span aria-hidden="true">→</span>
        </Link>
        <a href="#the-stages" className="btn btn-secondary">
          See all stages
        </a>
      </nav>
    </section>
  )
}