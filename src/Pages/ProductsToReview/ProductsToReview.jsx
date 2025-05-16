import "./ProductsToReview.css";
import headphonesImg from "../../assets/jbl-live.png";
import { Link, useLocation, Outlet } from "react-router-dom";

function ProductsToReview() {
  const location = useLocation();
  const inRateAndReviewSection = location.pathname.endsWith('/rate-and-review');

  if(inRateAndReviewSection) {
    return (<Outlet />)
  }

  return (
    <div className="review-products-section">
      <p className="review-products-section-title">pending reviews (4)</p>

      <div className="review-products-section-body">
        <ProductToReview />
        <ProductToReview />
        <ProductToReview />
        <ProductToReview />
      </div>
    </div>
  );
}

function ProductToReview() {
  return (
    <div className="product-to-review-card">
      <div className="product-to-review-img">
        <div className="product-to-review-img-wrapper">
          <img src={headphonesImg} alt="" />
        </div>
      </div>
      <div className="product-to-review-details">
        <p className="product-to-review-headline">
          Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
          Bass,Foldable, Long-Lasting Battery
        </p>
      </div>

      <div className="product-to-review-link">
        <Link to="rate-and-review">rate this product</Link>
      </div>
    </div>
  );
}

export default ProductsToReview;
