import "./Customer.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";

function Customer() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="customer-page-wrapper">
        <nav className="customer-page-nav">
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "customer-page-active-link" : ""
            }
            to="account"
          >
            <FaRegUser /> <p>My Account</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "customer-page-active-link" : ""
            }
            to="orders"
          >
            <LuPackage /> <p>orders</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "customer-page-active-link" : ""
            }
            to="pending-reviews"
          >
            <MdOutlineRateReview /> <p>pending reviews</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "customer-page-active-link" : ""
            }
            to="wishlist"
          >
            <FaRegHeart /> <p>wishlist</p>
          </NavLink>
        </nav>

        <div className="customer-page-col2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Customer;
