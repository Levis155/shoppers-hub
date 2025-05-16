import "./CheckoutPage.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

function CheckoutPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <div className="checkout-page-wrapper">
        <div className="checkout-page-col1">
          <div className="checkout-page-customer-address">
            <div className="checkout-page-customer-address-title">
              <p>
                <IoIosCheckmarkCircle /> 1. customer information
              </p>
              <Link to="/customer/account/edit-account-details">
                change <IoChevronForwardOutline />
              </Link>
            </div>

            <div className="checkout-page-customer-address-body">
              <p className="checkout-page-customer-name">Levis Mbui</p>
              <p className="checkout-page-customer-details">
                levismbui@gmail.com | +254720875598
              </p>
            </div>
          </div>

          <div className="checkout-page-delivery-details">
            <div className="checkout-page-delivery-details-title">
              <p>
                <IoIosCheckmarkCircle /> 2. delivery details
              </p>
            </div>

            <div className="checkout-page-delivery-details-body">
              <p className="checkout-page-delivery-date">
                Delivery between <span>15 may</span> and <span>16 may</span>
              </p>

              <div className="checkout-page-pickup-station">
                <div className="checkout-page-pickup-station-title">
                  <p>pickup station</p>
                  <Link to="/customer/account/edit-shipping-address">
                    change <IoChevronForwardOutline />
                  </Link>
                </div>

                <div className="checkout-page-pickup-station-body">
                  <p className="checkout-page-pickup-station-location">
                    Nyeri - Nyeri Town
                  </p>
                  <p className="checkout-page-pickup-station-address">
                    Skyveshop Nyeri Station - Hamwa building Gakere rd Opposite
                    Naivas Smkt, Next to hass petrol station
                  </p>
                </div>
              </div>

              <div className="checkout-page-shipment">
                <div className="checkout-page-shipment-title">
                  <p>shipment</p>
                  <Link to={"/cart"}>
                    modify cart <IoChevronForwardOutline />
                  </Link>
                </div>

                <div className="checkout-page-shipment-body">
                  <ShipmentCard />
                  <ShipmentCard />
                  <ShipmentCard />
                  <ShipmentCard />
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-page-payment-method">
            <div className="checkout-page-payment-method-title">
              <p>
                <IoIosCheckmarkCircle /> 3. payment method
              </p>
              <Link to={"#"}>
                change <IoChevronForwardOutline />
              </Link>
            </div>

            <div className="checkout-page-payment-method-body">
              <p className="checkout-page-payment-method">
                pay now with bank card
              </p>
              <p className="checkout-page-payment-method-details">
                Pay now fast and securely with Mastercard or Visa
              </p>
            </div>
          </div>
        </div>
        <div className="checkout-page-col2">
          <div className="order-summary-title">
            <p>order summary</p>
          </div>

          <div className="order-summary-body">
            <div className="order-summary-items-total">
              <p className="order-summary-items-total-label">
                item's total (2):
              </p>
              <p className="order-summary-items-total-figure">ksh 3996</p>
            </div>

            <div className="order-summary-delivery-fees">
              <p className="order-summary-delivery-fees-label">
                delivery fees:
              </p>
              <p className="order-summary-delivery-fees-figure">ksh 120</p>
            </div>

            <div className="order-summary-total">
              <p className="order-summary-total-label">total:</p>
              <p className="order-summary-total-figure">ksh 4116</p>
            </div>

            <button className="place-order-btn">place order</button>
          </div>
        </div>
      </div>
    </>
  );
}

function ShipmentCard() {
  return (
    <div className="checkout-page-shipment-card">
      <div className="checkout-page-shipment-card-col1">
        <img src="src\assets\jbl-live.png" alt="" />
      </div>
      <div className="checkout-page-shipment-card-col2">
        <p className="checkout-page-shipment-headline">
          Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure
          Bass,Foldable, Long-Lasting Battery
        </p>

        <p className="checkout-page-shipment-quantity">qty: 1</p>
      </div>
    </div>
  );
}

export default CheckoutPage;
