import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/CartSlice.jsx'
import { plantCatalog } from '../data/plants.js'

function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const categories = [...new Set(plantCatalog.map((plant) => plant.category))]
  const grouped = categories.map((category) => ({
    category,
    plants: plantCatalog.filter((plant) => plant.category === category),
  }))

  const handleAdd = (product) => {
    dispatch(addItem(product))
  }

  return (
    <main className="page-content product-page">
      <section className="page-intro">
        <p className="eyebrow">Plant shop</p>
        <h1>Browse our houseplants</h1>
        <p>Choose from fresh, curated categories and add plants to your cart with one click.</p>
      </section>

      {grouped.map(({ category, plants }) => (
        <section key={category} className="product-category">
          <h2>{category}</h2>
          <div className="product-grid">
            {plants.map((plant) => {
              const added = Boolean(cartItems[plant.id])
              return (
                <article key={plant.id} className="product-card">
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="product-price">${plant.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="button button-primary"
                      onClick={() => handleAdd(plant)}
                      disabled={added}
                    >
                      {added ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </main>
  )
}

export default ProductList
