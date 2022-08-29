import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "../header/Header";
import { AboutStorePage, ProductPage, Page404, CartPage } from "../pages/index";
import { ProductsList } from "../ProductsList/ProductsList";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="about" element={<AboutStorePage />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
