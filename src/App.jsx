import './App.css'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
