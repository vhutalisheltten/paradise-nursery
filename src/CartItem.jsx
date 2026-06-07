import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  selectCartItems,
  selectCartTotalQuantity,
  updateQuantity
} from "./CartSlice.jsx";

function calculateTotalAmount(cartItems) {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartTotalQuantity);
  const totalCost = calculateTotalAmount(cartItems);

  const handleDecreaseQuantity = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, change: -1 }));
    }
  };

  return (
    <main className="page-shell cart-page">
      <div className="cart-summary">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h1>Your plant order</h1>
        </div>
        <div className="summary-totals">
          <span>Total plants: {totalQuantity}</span>
          <strong>Total cost: ${totalCost.toFixed(2)}</strong>
        </div>
      </div>

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty</h2>
          <Link className="primary-button" to="/plants">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <>
          <section className="cart-list" aria-label="Cart items">
            {cartItems.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="quantity-controls" aria-label={`${item.name} quantity controls`}>
                  <button type="button" onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </article>
            ))}
          </section>

          <div className="cart-actions">
            <Link className="secondary-link" to="/plants">
              Continue Shopping
            </Link>
            <button type="button" className="primary-button" onClick={() => alert("Coming Soon")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default CartItem;
