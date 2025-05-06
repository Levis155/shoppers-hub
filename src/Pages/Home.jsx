import Header from "../Components/Header/Header"
import MobileHeader from "../Components/MobileHeader/MobileHeader"
import HeroSection from "../Components/HeroSection/HeroSection"
import CategoriesSection from "../Components/CategorySection/CategoriesSection"
import AllProductsSection from "../Components/AllProductsSection/AllProductsSection"

function Home() {
  return (
    <div>
      <Header />
      <MobileHeader />
      <HeroSection />
      <CategoriesSection />
      <AllProductsSection />
    </div>
  )
}

export default Home
