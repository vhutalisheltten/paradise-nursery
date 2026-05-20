import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItem from './CartItem.jsx'

function Cart() {
  const items = useSelector((state) => Object.values(state.cart.items))
  const totalPlants = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="page-content cart-page">
      <section className="cart-summary">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h1>Your plants</h1>
          <p>{totalPlants} plant{totalPlants === 1 ? '' : 's'} in your cart</p>
        </div>
        <div className="cart-total-box">
          <p className="cart-total-label">Total cost</p>
          <p className="cart-total-value">${totalAmount.toFixed(2)}</p>
        </div>
      </section>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Start shopping for houseplants to add to your cart.</p>
          <Link to="/plants" className="button button-primary">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-actions">
            <Link to="/plants" className="button button-secondary">
              Continue Shopping
            </Link>
            <button
              type="button"
              className="button button-primary"
              onClick={() => window.alert('Checkout coming soon!')}
            >
              Checkout
            </button>
          </div>
          <div className="cart-items-list">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default Cart
