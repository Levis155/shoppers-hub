import Header from "../../Components/Header/Header"
import MobileHeader from "../../Components/MobileHeader/MobileHeader"
import Hero from "../../Components/Hero/Hero"
import CategoriesSelect from "../../Components/CategoriesSelect/CategoriesSelect"
import ProductsGrid from "../../Components/ProductsGrid/ProductsGrid";


function Home() {
  return (
    <div>
      <Header />
      <MobileHeader />
      <Hero />
      <CategoriesSelect />
      <ProductsGrid />
    </div>
  )
}

export default Home;
