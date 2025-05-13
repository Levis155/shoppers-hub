import "./CustomerPage.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser, FaRegHeart, FaRegEdit } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { TextField } from "@mui/material";

function CustomerPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="customer-page-wrapper">
        <nav className="customer-page-nav">
          <NavLink to="/my-account">
            <FaRegUser /> <p>My Account</p>
          </NavLink>
          <NavLink to="/orders">
            <LuPackage /> <p>orders</p>
          </NavLink>
          <NavLink to="/pending-reviews">
            <MdOutlineRateReview /> <p>pending reviews</p>
          </NavLink>
          <NavLink to="/wishlist">
            <FaRegHeart /> <p>wishlist</p>
          </NavLink>
        </nav>

        <div className="customer-page-col2">
          <AccountDetails />
          <EditAccountDetails />
        </div>
      </div>
    </>
  );
}

function AccountDetails() {
  return (
    <div className="my-account-section">
      <p className="my-account-section-title">account overview</p>

      <div className="my-account-section-body">
        <div className="account-details">
          <div className="account-details-title">
            <p>account details</p>
            <Link>
              <FaRegEdit />
            </Link>
          </div>

          <div className="account-details-body">
            <p>Levis Mbui</p>
            <p>levismbui@gmail.com</p>
            <p>+254720875598</p>
          </div>
        </div>

        <div className="shipping-address">
          <div className="shipping-address-title">
            <p>shipping address</p>
            <Link>
              <FaRegEdit />
            </Link>
          </div>

          <div className="shipping-address-body">
            <p>Nyeri Town, Nyeri</p>
            <p>
              Skyveshop Nyeri Station - Hamwa building Gakere rd Opposite Naivas
              Smkt, Next to hass petrol station
            </p>
          </div>
        </div>
      </div>

      <div>
        <Link className="change-password-link" to={"#"}>
          change password <FaRegEdit />
        </Link>
      </div>
    </div>
  );
}

function EditAccountDetails() {
  return (
    <div className="edit-account-details-section">
      <p className="edit-account-details-title">edit your account details</p>

      <div className="edit-account-details-body">
        <TextField
          id="outlined-basic-1"
          label="First Name"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-input": {
              fontSize: "1.6rem", // Input text size
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-2"
          label="Last Name"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-3"
          label="Email Address"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          id="outlined-basic-4"
          label="Phone Number"
          variant="outlined"
          sx={{
            marginBottom: 2,
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
      </div>
      <div>
        <button className="save-account-details-btn">
          save
        </button>
      </div>
    </div>
  );
}

export default CustomerPage;
