import "./Wishlist.css";
import headphonesImg from "../../assets/jbl-live.png";

function Wishlist() {
  return (
    <div className="wishlist-section">
      <p className="wishlist-section-title">wishlist(2)</p>

      <div className="wishlist-section-body">
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
        <WishlistCard />
      </div>
    </div>
  );
}

function WishlistCard() {
  return (
    <div className="wishlist-section-card">
      <div className="wishlist-card-col1">
        <div className="wishlist-card-img">
          <img src={headphonesImg} alt="" />
        </div>
      </div>

      <div className="wishlist-card-col2">
        <p className="wishlist-card-product-headline">
          Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
          Bass,Foldable, Long-Lasting Battery
        </p>

        <p className="wishlist-card-price">ksh 1998</p>

        <div className="wishlist-card-discount">
          <p className="wishlist-card-original-price">ksh 1500</p>
          <p className="wishlist-card-percent-discount">-25%</p>
        </div>
      </div>

      <div className="wishlist-card-col3">
        <button className="wishlist-card-remove-btn">remove</button>
        <button className="wishlist-card-add-btn">add to cart</button>
      </div>
    </div>
  );
}

export default Wishlist;
