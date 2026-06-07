import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./AboutUs.jsx";
import CartItem from "./CartItem.jsx";
import ProductList from "./ProductList.jsx";
import { selectCartTotalQuantity } from "./CartSlice.jsx";

function Header() {
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

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-content">
        <p className="eyebrow">Indoor plant specialists</p>
        <h1>Paradise Nursery</h1>
        <AboutUs />
        <Link className="primary-button" to="/plants">
          Get Started
        </Link>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/plants"
        element={
          <>
            <Header />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Header />
            <CartItem />
          </>
        }
      />
    </Routes>
  );
}

export default App;
