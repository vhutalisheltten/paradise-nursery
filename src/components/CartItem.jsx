import { useDispatch } from 'react-redux'
import { updateQuantity, removeItem } from '../redux/CartSlice.jsx'

function CartItem({ item }) {
  const dispatch = useDispatch()

  return (
    <article className="cart-item">
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
        <button type="button" className="button button-secondary delete-button" onClick={() => dispatch(removeItem(item.id))}>
          Delete
        </button>
      </div>
    </article>
  )
}

export default CartItem
