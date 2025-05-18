import "./Success.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-page">
      <div className="success-card">
        <FaCheckCircle />

        <p className="success-title">Thank you for shopping with us!</p>
        <p className="success-excerpt">
          Your order was successfully placed. <br /> We will send you a
          confirmation email shortly.{" "}
        </p>

        <div className="success-links">
          <Link to="/customer/orders" className="view-orders-link">
            view your orders
          </Link>
          <Link to="/" className="continue-shopping-link">
            continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
