import Home from "./Pages/Home"
import ProductPage from "./Pages/ProductPage/ProductPage"
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<ProductPage />} />
    </Routes>
    </>
  )
}

export default App
