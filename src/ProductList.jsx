import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItems, selectCartTotalQuantity } from "./CartSlice.jsx";

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
      },
      {
        id: "spider-plant",
        name: "Spider Plant",
        price: 15,
        image: "https://images.unsplash.com/photo-1616500163667-1ad4b8f9d780?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cast-iron-plant",
        name: "Cast Iron Plant",
        price: 27,
        image: "https://images.unsplash.com/photo-1620127682229-33388276e540?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "jade-plant",
        name: "Jade Plant",
        price: 20,
        image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "rubber-plant",
        name: "Rubber Plant",
        price: 29,
        image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?auto=format&fit=crop&w=600&q=80"
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
      },
      {
        id: "baby-tears",
        name: "Baby Tears",
        price: 13,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "nerve-plant",
        name: "Nerve Plant",
        price: 17,
        image: "https://images.unsplash.com/photo-1620317534384-8a1c61a911ad?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "string-of-pearls",
        name: "String of Pearls",
        price: 21,
        image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "pilea",
        name: "Chinese Money Plant",
        price: 19,
        image: "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?auto=format&fit=crop&w=600&q=80"
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
      },
      {
        id: "bird-of-paradise",
        name: "Bird of Paradise",
        price: 44,
        image: "https://images.unsplash.com/photo-1604762511432-f0111b215b3b?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "areca-palm",
        name: "Areca Palm",
        price: 36,
        image: "https://images.unsplash.com/photo-1604762525953-6f4772bdf022?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "calathea",
        name: "Calathea Orbifolia",
        price: 31,
        image: "https://images.unsplash.com/photo-1620317534384-9827b6d939f7?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "dracaena",
        name: "Dracaena",
        price: 28,
        image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

export function Header() {
  const cartQuantity = useSelector(selectCartTotalQuantity);

  return (
    <header className="site-header">
      <Link className="brand-link" to="/">
        <span className="brand-mark">PN</span>
        <span>Paradise Nursery</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label={`Cart with ${cartQuantity} items`}>
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span className="cart-count">{cartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <>
      <Header />
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
    </>
  );
}

export default ProductList;
