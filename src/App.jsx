import './App.css'
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import AboutUs from './components/AboutUs.jsx'

function Landing() {
  const navigate = useNavigate()

  return (
    <main className="landing-page background-image">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Paradise Nursery</p>
          <h1>Paradise Nursery</h1>
          <p>
            Explore our curated indoor plant collection and add beautiful houseplants to your cart.
            Click Get Started to begin shopping.
          </p>
          <AboutUs />
          <button className="button button-primary" type="button" onClick={() => navigate('/plants')}>
            Get Started
          </button>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
