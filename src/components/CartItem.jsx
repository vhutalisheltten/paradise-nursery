import { useDispatch, useSelector } from 'react-redux'
import { updateQuantity, removeItem, selectCartItems } from '../redux/CartSlice.jsx'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const showCartTotal = cartItems.length > 0 && cartItems[0].id === item.id

  const calculateTotalCartAmount = (items) =>
    items.reduce((sum, current) => sum + current.price * current.quantity, 0)

  return (
    <article className="cart-item">
      {showCartTotal && (
        <div className="cart-summary-banner">
          <p className="cart-total-label">Cart total amount</p>
          <p className="cart-total-value">${calculateTotalCartAmount(cartItems).toFixed(2)}</p>
        </div>
      )}
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">Unit price: ${item.price.toFixed(2)}</p>
        <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>
            −
          </button>
          <span>{item.quantity}</span>
          <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
            +
          </button>
        </div>
        <button
          type="button"
          className="button button-secondary delete-button cart-item-delete"
          onClick={() => dispatch(removeItem(item.id))}
        >
          Delete
        </button>
      </div>
    </article>
  )
}

export default CartItem
