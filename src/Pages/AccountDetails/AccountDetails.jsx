import "./AccountDetails.css";
import { FaRegEdit } from "react-icons/fa";
import { Link, Outlet, useLocation } from "react-router-dom";

function AccountDetails() {
  const location = useLocation();
  const inEditAccountDetailsSection = location.pathname.endsWith("/edit-account-details");
  const inEditShippingAddressSection = location.pathname.endsWith("/edit-shipping-address");
  const inChangePasswordSection = location.pathname.endsWith("/change-password");

  const isEditing = inEditAccountDetailsSection || inEditShippingAddressSection || inChangePasswordSection;

  if (isEditing) {
    return <Outlet />;
  }

  return (
    <div className="my-account-section">
      <p className="my-account-section-title">account overview</p>

      <div className="my-account-section-body">
        <div className="account-details">
          <div className="account-details-title">
            <p>account details</p>
            <Link to="edit-account-details">
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
            <Link to="edit-shipping-address">
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
        <Link className="change-password-link" to="change-password">
          change password <FaRegEdit />
        </Link>
      </div>
    </div>
  );
}

export default AccountDetails;
