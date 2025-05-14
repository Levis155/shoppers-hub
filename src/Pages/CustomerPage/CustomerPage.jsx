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
  Rating,
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
          <ReviewProducts />
          <RateAndReviewForm />
          <Wishlist />
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
              fontSize: "1.6rem",
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

function OrderedProduct() {
  return (
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
  );
}

function ReviewProducts() {
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
          <img src="src\assets\jbl-live.png" alt="" />
        </div>
      </div>
      <div className="product-to-review-details">
        <p className="product-to-review-headline">
          Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
          Bass,Foldable, Long-Lasting Battery
        </p>
      </div>

      <div className="product-to-review-link">
        <Link>rate this product</Link>
      </div>
    </div>
  );
}

function RateAndReviewForm() {
  const [value, setValue] = useState(0);

  return (
    <form className="rate-and-review-form" action="">
      <p className="rate-and-review-form-title">rate & review</p>

      <div className="rate-and-review-form-body">
        <div className="rate-container">
          <p className="rate-container-title">
            select the stars to rate the product
          </p>

          <div className="rate-container-card">
            <div className="rate-container-card-col1">
              <div className="rate-container-card-img">
                <img src="src\assets\jbl-live.png" alt="" />
              </div>
            </div>

            <div className="rate-container-card-col2">
              <p className="rate-container-card-product-headline">
                Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
                Bass,Foldable, Long-Lasting Battery
              </p>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
        </div>

        <div className="review-container">
          <p className="review-container-title">leave a review</p>

          <div className="review-container-body">
            <div className="text-field-container">
              <TextField
                id="outlined-basic-1"
                label="Review Title"
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
                id="outlined-basic-1"
                label="Your Name"
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
            </div>

            <div className="text-area-container">
              <TextField
                id="outlined-multiline-static"
                label="Detailed Review"
                multiline
                rows={7}
                // defaultValue="Default Value"
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: "1.6rem",
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "1.2rem",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <button className="submit-review-btn">submit you review</button>
      </div>
    </form>
  );
}

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
          <img src="src\assets\jbl-live.png" alt="" />
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

export default CustomerPage;
