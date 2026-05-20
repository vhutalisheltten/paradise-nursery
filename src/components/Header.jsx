import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiShoppingCart } from 'react-icons/fi'

function Header() {
  const totalQuantity = useSelector((state) =>
    Object.values(state.cart.items).reduce((sum, item) => sum + item.quantity, 0),
  )

  return (
    <header className="app-header">
      <div className="brand-bar">
        <div className="brand-mark">🌿</div>
        <div>
          <p className="brand-name">Paradise Nursery</p>
          <p className="brand-tagline">Houseplants, easy care, home greenery</p>
        </div>
      </div>
      <nav className="app-nav" aria-label="Primary navigation">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink to="/plants" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Plants
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Cart
        </NavLink>
      </nav>
      <NavLink to="/cart" className="cart-button" aria-label="View shopping cart">
        <FiShoppingCart aria-hidden="true" />
        <span className="cart-count">{totalQuantity}</span>
      </NavLink>
    </header>
  )
}

export default Header
