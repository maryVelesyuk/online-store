import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { HomePage, AboutStorePage, ProductPage, Page404 } from "../pages/index";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (count, price) => {
    setCart([...cart, { count: count, price: price }]);
  };

  return (
    <div className="app">
      <Router>
        <Header cart={cart} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage addToCart={addToCart} cart={cart} />}
            />
            <Route path="about" element={<AboutStorePage />} />
            <Route
              path="products/:productId"
              element={<ProductPage addToCart={addToCart} />}
            />
            {/* <Route path="/cart" element={<Page404 />} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
