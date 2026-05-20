import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="landing-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Paradise Nursery</p>
          <h1>Your indoor garden begins here</h1>
          <p>
            Discover beautiful houseplants, curated plant collections, and a shopping cart that
            makes plant care simple. Browse our categories and add favorite plants to your cart.
          </p>
          <Link to="/plants" className="button button-primary">
            Get Started
          </Link>
        </div>
      </section>

      <section className="landing-info">
        <div className="landing-card">
          <h2>Why choose Paradise?</h2>
          <p>
            We help home gardeners find low-maintenance plants, plant care guidance, and a clean
            shopping experience tailored for first-time plant lovers.
          </p>
        </div>
        <div className="landing-grid">
          <article>
            <h3>Curated collections</h3>
            <p>Indoor favorites chosen for healthy air and easy watering routines.</p>
          </article>
          <article>
            <h3>Friendly shopping</h3>
            <p>One-click cart updates, product categories, and clear checkout details.</p>
          </article>
          <article>
            <h3>Plants you can trust</h3>
            <p>Every plant includes care details and a real image so you know what arrives.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home
