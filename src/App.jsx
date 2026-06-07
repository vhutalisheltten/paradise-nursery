import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import CartItem from "./CartItem.jsx";
import ProductList from "./ProductList.jsx";

function LandingPage({ setShowProductList }) {
  return (
    <main className="landing-page">
      <section className="landing-content">
        <p className="eyebrow">Indoor plant specialists</p>
        <h1>Welcome to Paradise Nursery</h1>
        <AboutUs />
        <button
          type="button"
          className="primary-button"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </section>
    </main>
  );
}

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          showProductList ? (
            <ProductList />
          ) : (
            <LandingPage setShowProductList={setShowProductList} />
          )
        }
      />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
