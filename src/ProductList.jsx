import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems } from "./CartSlice.jsx";

const plantCategories = [
  {
    name: "Easy Care",
    plants: [
      {
        id: "snake-plant",
        name: "Snake Plant",
        price: 18,
        image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "zz-plant",
        name: "ZZ Plant",
        price: 24,
        image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Petite Desk Plants",
    plants: [
      {
        id: "pothos",
        name: "Golden Pothos",
        price: 16,
        image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "peperomia",
        name: "Peperomia",
        price: 14,
        image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    name: "Statement Greens",
    plants: [
      {
        id: "monstera",
        name: "Monstera Deliciosa",
        price: 32,
        image: "https://images.unsplash.com/photo-1614594849809-dfedbc827105?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "fiddle-leaf-fig",
        name: "Fiddle Leaf Fig",
        price: 38,
        image: "https://images.unsplash.com/photo-1597055181300-e3633a207518?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Shop houseplants</p>
        <h1>Choose your next indoor favorite</h1>
      </div>

      {plantCategories.map((category) => (
        <section className="category-section" key={category.name}>
          <h2>{category.name}</h2>
          <div className="product-grid">
            {category.plants.map((plant) => {
              const inCart = cartIds.has(plant.id);

              return (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>${plant.price.toFixed(2)}</p>
                    <button
                      type="button"
                      className="secondary-button"
                      disabled={inCart}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {inCart ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
