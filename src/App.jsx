import Register from "./Pages/Register/Register";
import {Login, CustomerLogin, AdminLogin} from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import QueriedProducts from "./Pages/QueriedProducts/QueriedProducts";
import ProductOverview from "./Pages/ProductOverview/ProductOverview";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Customer from "./Pages/Customer/Customer";
import AccountDetails from "./Pages/AccountDetails/AccountDetails";
import EditAccountDetails from "./Pages/EditAccountDetails/EditAccountDetails";
import EditPassword from "./Pages/EditPassword/EditPassword";
import EditShippingAddress from "./Pages/EditShippingAddress/EditShippingAdress";
import OrderedProducts from "./Pages/OrderedProducts/OrderedProducts";
import ProductsToReview from "./Pages/ProductsToReview/ProductsToReview";
import RateAndReview from "./Pages/RateAndReview/RateAndReview";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        
        <Route path="/login" element={<Login />}>
          <Route index element ={<Navigate to="customer" replace />} />

          <Route path="customer" element={<CustomerLogin />} />
          <Route path="admin" element={<AdminLogin />} />
          <Route />
        </Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/queried-products" element={<QueriedProducts />} />
        <Route path="/product" element={<ProductOverview />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/customer" element={<Customer />}>
          <Route index element={<Navigate to="account" replace />} />

          <Route path="account" element={<AccountDetails />}>
            <Route
              path="edit-account-details"
              element={<EditAccountDetails />}
            />
            <Route
              path="edit-shipping-address"
              element={<EditShippingAddress />}
            />
            <Route path="change-password" element={<EditPassword />} />
          </Route>

          <Route path="orders" element={<OrderedProducts />} />

          <Route path="pending-reviews" element={<ProductsToReview />}>
            <Route path="rate-and-review" element={<RateAndReview />} />
          </Route>

          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
