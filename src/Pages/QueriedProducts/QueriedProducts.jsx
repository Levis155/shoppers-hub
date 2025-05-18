import "./QueriedProducts.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import ProductsGridCard from "../../Components/ProductsGridCard/ProductsGridCard";
import jblImage from "../../assets/jbl-live.png";

function QueriedProducts() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="queried-products-wrapper">
        <p className="section-title">products from your search</p>

        <div className="queried-products-grid">
          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />

          <ProductsGridCard
            productImage={jblImage}
            productDetails={`Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
        Foldable, Long-Lasting Battery`}
            productPrice={"1799"}
            productRating={4}
          />
        </div>
      </div>
    </>
  );
}

export default QueriedProducts;
