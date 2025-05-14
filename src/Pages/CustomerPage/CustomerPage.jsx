import "./CustomerPage.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import regionTownMap from "../../../data/regionTownMap";
import { generatePickupStations } from "../../../utils/generatePickupStations";
import { NavLink, Link } from "react-router-dom";
import { FaRegUser, FaRegHeart, FaRegEdit } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { useState } from "react";
import * as React from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const formControlStyle = {
  "& .MuiInputBase-root": {
    fontSize: "1.4rem",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1.4rem",
  },
  "& .MuiInputLabel-shrink": {
    fontSize: "1.3rem",
  },
};

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
          <EditShippingAddress />
          <EditPassword />
          <OrderedProducts />
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

      <form className="edit-account-details-body">
        <TextField
          id="outlined-basic-1"
          label="First Name"
          variant="outlined"
          sx={{
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
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />

        <div>
          <button className="save-account-details-btn">save</button>
        </div>
      </form>
    </div>
  );
}

function EditShippingAddress() {
  const [region, setRegion] = useState("Nairobi");
  const [town, setTown] = useState("CBD");
  const [pickupStation, setPickupStation] = useState("CBD Pickup Station 1");

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setTown("");
    setPickupStation("");
  };

  const handleTownChange = (e) => {
    setTown(e.target.value);
    setPickupStation("");
  };

  const handlePickupStationChange = (e) => {
    setPickupStation(e.target.value);
  };

  return (
    <div className="edit-shipping-address-section">
      <p className="edit-shipping-address-title">edit your shipping address</p>

      <form className="edit-shipping-address-body">
        <FormControl sx={formControlStyle}>
          <InputLabel id="region-label">Region</InputLabel>
          <Select
            labelId="region-label"
            id="region-select"
            value={region}
            label="Region"
            onChange={handleRegionChange}
          >
            {Object.keys(regionTownMap).map((regionName) => (
              <MenuItem key={regionName} value={regionName}>
                {regionName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={formControlStyle} disabled={!region}>
          <InputLabel id="town-label">Town</InputLabel>
          <Select
            labelId="town-label"
            id="town-select"
            value={town}
            label="Town"
            onChange={handleTownChange}
          >
            {(regionTownMap[region] || []).map((townName) => (
              <MenuItem key={townName} value={townName}>
                {townName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={formControlStyle} disabled={!town}>
          <InputLabel id="pickup-label">Pickup Station</InputLabel>
          <Select
            labelId="pickup-label"
            id="pickup-select"
            value={pickupStation}
            label="Pickup Station"
            onChange={handlePickupStationChange}
          >
            {generatePickupStations(town).map((station) => (
              <MenuItem key={station} value={station}>
                {station}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div>
          <button className="save-shipping-address-btn">save</button>
        </div>
      </form>
    </div>
  );
}

function EditPassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="edit-password-section">
      <p className="edit-password-title">change your password</p>

      <form className="edit-password-body">
        <FormControl variant="outlined" sx={formControlStyle}>
          <InputLabel htmlFor="outlined-adornment-password">
            Old Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl variant="outlined" sx={formControlStyle}>
          <InputLabel htmlFor="outlined-adornment-password">
            New Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl variant="outlined" sx={formControlStyle}>
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div>
          <div>
            <button className="save-new-pass-btn">save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

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

function OrderedProduct () {
  return(
            <div className="ordered-product-card">
          <div className="ordered-product-img">
            <img src="src\assets\jbl-live.png" alt="" />
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
              pickup station: Skyveshop Nyeri Station - Hamwa building Gakere rd
              Opposite Naivas Smkt, Next to hass petrol station
            </p>
          </div>
        </div>
  )
}


export default CustomerPage;
