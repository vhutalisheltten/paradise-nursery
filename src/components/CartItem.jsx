import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateQuantity, removeItem, selectCartItems, selectCartTotal, selectCartQuantity } from '../redux/CartSlice.jsx'
import Header from './Header.jsx'

function CartItem() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectCartTotal)
  const totalQuantity = useSelector(selectCartQuantity)

  const handleContinueShopping = () => {
    // This is handled by the Link, but if we need a function it's here
  }

  const handleCheckout = () => {
    alert('Checkout functionality coming soon!')
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
    } else {
      dispatch(removeItem(item.id))
    }
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.id))
  }

  return (
    <div className="cart-container">
      <Header />
      <main className="page-content cart-page">
        <section className="cart-summary">
          <div>
            <p className="eyebrow">Shopping cart</p>
            <h1>Your Shopping Cart</h1>
            <p>{totalQuantity} plant{totalQuantity === 1 ? '' : 's'} in your cart</p>
          </div>
          <div className="cart-total-box">
            <p className="cart-total-label">Total Cart Amount</p>
            <p className="cart-total-value">${totalAmount.toFixed(2)}</p>
          </div>
        </section>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Start shopping for houseplants to add to your cart.</p>
            <Link to="/plants" className="button button-primary">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-actions">
              <Link to="/plants" className="button button-secondary" onClick={handleContinueShopping}>
                Continue Shopping
              </Link>
              <button
                type="button"
                className="button button-primary"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <article key={item.id} className="cart-item">
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">Unit price: ${item.price.toFixed(2)}</p>
                    <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-control">
                      <button type="button" onClick={() => handleDecrement(item)}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => handleIncrement(item)}>
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="button button-secondary delete-button cart-item-delete"
                      onClick={() => handleRemove(item)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default CartItem
