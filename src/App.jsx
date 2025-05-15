import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CartPage from "./Pages/CartPage/CartPage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import CustomerPage from "./Pages/CustomerPage/CustomerPage";
import AccountDetails from "./Components/AccountDetails/AccountDetails";
import EditAccountDetails from "./Components/EditAccountDetails/EditAccountDetails";
import EditPassword from "./Components/EditPassword/EditPassword";
import EditShippingAddress from "./Components/EditShippingAddress/EditShippingAdress";
import OrderedProducts from "./Components/OrderedProducts/OrderedProducts";
import PendingReviews from "./Components/ReviewProducts/PendingReviews";
import RateAndReviewForm from "./Components/RateAndReviewForm/RateAndReviewForm";
import Wishlist from "./Components/Wishlist/Wishlist";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/customer" element={<CustomerPage />}>
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

          <Route path="pending-reviews" element={<PendingReviews />}>
            <Route path="rate-and-review" element={<RateAndReviewForm />} />
          </Route>

          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
