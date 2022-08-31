import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutStorePage, ProductPage, Page404, CartPage } from "../pages/index";
import { ProductsList } from "../ProductsList/ProductsList";
import { PrivateRoute } from "../hok/PrivateRoute";
import "./App.css";
import { Layout } from "../layout/Layout";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductsList />} />
            <Route path="about" element={<AboutStorePage />} />
            <Route path="products/:productId" element={<ProductPage />} />
            <Route
              path="cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
