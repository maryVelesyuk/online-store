import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { HomePage, AboutStorePage, ProductPage, Page404 } from "../pages/index";
import { useState, useContext } from "react";
import { Modal } from "../modal/Modal";
import { Cart } from "../cart/Cart";
import { LoginContext } from "../hok/LoginProvider";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [cart, setCart] = useState([]);
  const { isLoggedIn } = useContext(LoginContext);

  const addToCart = (count, price) => {
    setCart([...cart, { count: count, price: price }]);
  };
  const switchModalActive = () => {
    setIsModalActive(!isModalActive);
  };

  return (
    <Router>
      <div className="app">
        <Header setIsModalActive={setIsModalActive} />
        {isLoggedIn && <Cart cart={cart} />}
        <main>
          <Routes>
            <Route
              path="/"
              element={<HomePage addToCart={addToCart} cart={cart} />}
            />
            <Route path="about" element={<AboutStorePage />} />
            <Route
              path=":productId"
              element={<ProductPage addToCart={addToCart} />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        {isModalActive && <Modal switchModalActive={switchModalActive} />}
      </div>
    </Router>
  );
}

export default App;
