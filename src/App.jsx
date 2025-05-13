import Home from "./Pages/Home"
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import CustomerPage from "./Pages/CustomerPage/CustomerPage";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/" element={<CustomerPage />} />
    </Routes>
    </>
  )
}

export default App
