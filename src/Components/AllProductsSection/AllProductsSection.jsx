import "./AllProductsSection.css";
import jblImage from "../../assets/jbl-live.png";
import Rating from "@mui/material/Rating";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function AllProductsSection() {
  return (
    <section className="all-products-section">
      <p className="section-title">more to love</p>
      <div className="products-grid">
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
    </section>
  );
}

function ProductsGridCard({
  productImage,
  productDetails,
  productPrice,
  productRating,
}) {
  let [cartQuantity, setCartQuantity] = useState(0);
  const [wishListBtnClicked, setWishListBtnClicked] = useState(false);
  return (
    <div className="products-grid-card">
      <Link to={"/product"} className="products-grid-card-top">
        <div className="products-grid-card-img">
          <img src={productImage} alt="product image" />
        </div>
      </Link>
      <div className="products-grid-card-properties">
        <Link to={"/product"} className="products-grid-card-details">{productDetails}</Link>
        <p className="products-grid-card-price">ksh {productPrice}</p>

        <div className="products-grid-card-discount">
          <p className="products-grid-card-discounted-figure">ksh 2500</p>
          <p className="products-grid-card-percentage-discount">-22%</p>
        </div>
        <div className="products-grid-card-rating">
          <Rating name="read-only" value={productRating} readOnly />
        </div>

        <div className="products-grid-card-buttons">
          {cartQuantity > 0 ? (
            <div className="cart-control">
              <button
                className="cart-decrement-btn"
                onClick={() => {
                  setCartQuantity(cartQuantity - 1);
                }}
              >
                -
              </button>{" "}
              <p className="cart-quantity">{cartQuantity}</p>{" "}
              <button
                className="cart-increment-btn"
                onClick={() => {
                  setCartQuantity(cartQuantity + 1);
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="products-grid-card-add-btn"
              onClick={() => {
                setCartQuantity(cartQuantity + 1);
              }}
            >
              Add to cart
            </button>
          )}
          <button className="products-grid-card-wish-btn" onClick={() => {setWishListBtnClicked(!wishListBtnClicked)}}>
            {wishListBtnClicked ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
      </div>
    </div>
  );
}

export default AllProductsSection;
