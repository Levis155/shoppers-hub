import Home from "./Pages/Home"
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/" element={<CartPage />} />
    </Routes>
    </>
  )
}

export default App
