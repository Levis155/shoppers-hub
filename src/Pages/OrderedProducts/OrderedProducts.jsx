import "./OrderedProducts.css"
import headphonesImg from "../../assets/jbl-live.png";

function OrderedProducts() {
  return (
    <div className="ordered-products-section">
      <p className="ordered-products-section-title">ordered products</p>

      <div className="ordered-products-section-body">
        <OrderedProduct />
        <OrderedProduct />
        <OrderedProduct />
        <OrderedProduct />
      </div>
    </div>
  );
}

function OrderedProduct() {
  return (
    <div className="ordered-product-card">
      <div className="ordered-product-img">
        <img src={headphonesImg} alt="" />
      </div>
      <div className="ordered-product-details">
        <p className="ordered-product-headline">
          Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
          Bass,Foldable, Long-Lasting Battery
        </p>
        <p className="ordered-product-quantity">qty: 1</p>
        <p className="ordered-product-items-total">items total: ksh 1998</p>
        <p className="ordered-product-delivery-date">
          delivered on: 14 May 2025
        </p>
        <p className="ordered-product-pickup-station">
          pickup station: Skyveshop Nyeri Station 
        </p>
      </div>
    </div>
  );
}

export default OrderedProducts;