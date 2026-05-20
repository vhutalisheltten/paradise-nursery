import './App.css'
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function Landing() {
  const navigate = useNavigate()

  return (
    <main className="landing-page background-image">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Welcome to Paradise Nursery</p>
          <h1>Bring home a greener space today</h1>
          <p>
            Explore our curated indoor plant collection and add beautiful houseplants to your cart.
            Click Get Started to begin shopping.
          </p>
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
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
