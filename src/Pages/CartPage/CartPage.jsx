import "./CartPage.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="cart-container">
        <div className="cart-container-col1">
          <p className="cart-container-col1-title">cart (2)</p>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div className="cart-container-col2">
          <p className="cart-container-col2-title">cart summary</p>
          <div className="cart-container-col2-subtotal">
            <p className="cart-container-col2-subtotal-title">subtotal</p>
            <p className="cart-container-col2-subtotal-price">ksh 1998</p>
          </div>
          <div className="cart-container-col2-btn">
            <button onClick={() => {navigate("/checkout")}}>checkout (ksh 1998)</button>
          </div>
        </div>
      </div>
    </>
  );
}

function CartCard() {
  return (
    <div className="cart-container-col1-card">
      <div className="cart-container-col1-card-details">
        <div className="cart-card-col1">
          <img src="src\assets\jbl-live.png" alt="" />
        </div>

        <div className="cart-card-col2">
          <p className="cart-card-headline">
            Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
            Bass,Foldable, Long-Lasting Battery
          </p>
          <p className="cart-card-variation">
            variation: <span>black</span>
          </p>
          <p className="cart-card-stock-status">in stock</p>
        </div>

        <div className="cart-card-col3">
          <p className="cart-card-price">ksh 1998</p>
        </div>
      </div>
      <div className="cart-container-col1-card-btns">
        <div className="cart-card-remove-btn">
          <button>
            <FaRegTrashAlt /> remove
          </button>
        </div>

        <div className="cart-card-cart-controls-btns">
          <button>-</button>
          <div>2</div>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
