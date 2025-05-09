import "./ProductPage.css";
import Header from "../../Components/Header/Header";
import MobileHeader from "../../Components/MobileHeader/MobileHeader";
import Rating from "@mui/material/Rating";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosPricetag, IoIosCalendar } from "react-icons/io";
import { TbTruckReturn } from "react-icons/tb";
import { GoShareAndroid } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const variationImages = [
  "src/assets/jbl-live.png",
  "src/assets/blue-jbls.png",
  "src/assets/gold-jbls.png",
  "src/assets/white-jbls.png",
];
const similarProductsDetails = [
  {image:"src/assets/jbl-live.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/blue-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/gold-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/white-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/jbl-live.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/blue-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/gold-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/white-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/jbl-live.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/blue-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/gold-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
  {image:"src/assets/white-jbls.png", headline: "Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,Foldable, Long-Lasting Battery", price: "ksh 1998"},
];

function ProductPage() {
  const [variationImage, setVariationImage] = useState(variationImages[0]);
  let [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <Header />
      <MobileHeader />
      <div className="product-page-wrapper">
        <div className="product-page-wrapper-col1">
          <div className="product-container">
            <div className="product-container-col1">
              <div className="product-container-col1-img">
                <img src={variationImage} alt="" />
              </div>
            </div>
            <div className="product-container-col2">
              <p className="product-container-col2-headline">
                Jbl Tune 520 Wireless Over-Ear Bluetooth Headphones, Pure Bass,
                Foldable, Long-Lasting Battery
              </p>
              <p className="product-container-col2-brand">
                brand: <span>jbl</span> |{" "}
                <span>
                  <a href="">similar products from jbl</a>
                </span>
              </p>
              <p className="product-container-col2-price">ksh 1799</p>
              <p className="product-container-col2-shipping">
                + shipping of ksh 90 to Nairobi CBD.
              </p>
              <div className="product-cont-col2-rating">
                <Rating name="read-only" value={4} readOnly />
              </div>
              <p className="stock-status">in stock</p>

              <div className="product-cont-col2-variations">
                <p>variations</p>
                <div className="variations">
                  {variationImages.map((src) => (
                    <VariationsCard
                      key={Math.random()}
                      src={src}
                      onClick={() => setVariationImage(src)}
                      variationImage={variationImage}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="product-page-product-details">
            <p className="product-page-product-details-title">
              product details
            </p>
            <p className="product-page-product-details-body">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              nisi reprehenderit maxime sit aliquam voluptas corrupti illo ea
              ullam. Eveniet molestiae ex veritatis qui vitae harum odit
              asperiores ratione repudiandae ipsam reiciendis animi, quam
              pariatur illum, tenetur non quaerat, quo adipisci blanditiis.
              Corporis obcaecati ab laborum. Aliquam a tempora esse optio hic
              voluptates, eos debitis cupiditate magnam earum veniam, sint
              consequatur dolore corrupti voluptatem aut iure temporibus autem
              quo alias cumque. Ullam doloribus enim maxime doloremque hic amet
              ducimus autem nesciunt ad. Sapiente mollitia reiciendis minus ipsa
              ad quis doloremque cum sit officiis expedita. Eveniet natus
              numquam iste adipisci eos.
            </p>
          </div>
          <div className="product-page-product-specifications">
            <p className="product-page-product-specifications-title">
              product specifications
            </p>
            <div className="product-page-product-specifications-body">
              <div className="key-features">
                <p className="key-features-title">specifications</p>
                <div className="key-features-body">
                  <p>product: JBL Tune 520 Wireless Over-Ear Headphones</p>
                  <p>Type: Wireless On-Ear Headphones</p>
                  <p>battery life: upto 57 hours</p>
                  <p>connectivity: bluetooth 5.3</p>
                  <p>sound technology: JBL Pure Bass Sound</p>
                  <p>
                    features: multi-point connection, lightweight, design,
                    fast-charging
                  </p>
                  <p>use: Music, calls, travel, work, leisure</p>
                </div>
              </div>

              <div className="whats-in-the-box">
                <p className="whats-in-the-box-title">what's in the box</p>
                <div className="whats-in-the-box-body">
                  <p>
                    1 x JBL Tune 520BT headphones 1 x USB-C Charging Cable 1 x
                    Quick Start Guide
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SimilarProductsSlider />
        </div>
        <div className="product-page-wrapper-col2">
          <div className="product-page-wrapper-col2-title">
            shipping & delivery
          </div>
          <div className="product-page-wrapper-col2-body">
            <div className="product-page-wrapper-col2-detail">
              <IoLocationOutline />
              <p>
                <span>ship to:</span> Nyeri, Nyeri Town.
              </p>
            </div>
            <div className="product-page-wrapper-col2-detail">
              <IoIosPricetag />
              <p>
                <span>shipping fee: </span>KSH 120
              </p>
            </div>
            <div className="product-page-wrapper-col2-detail">
              <IoIosCalendar />{" "}
              <p>
                <span>delivery date: </span>may 30 - jun 02
              </p>
            </div>
            <div className="product-page-wrapper-col2-detail">
              <TbTruckReturn />{" "}
              <p>
                <span>returns & refunds policy:</span> <a href="">details</a>
              </p>
            </div>
            <div className="product-page-wrapper-col2-btn">
              {cartQuantity > 0 ? (
                <div className="product-page-cart-control">
                  <button
                    className="product-page-cart-decrement-btn"
                    onClick={() => {
                      setCartQuantity(cartQuantity - 1);
                    }}
                  >
                    -
                  </button>{" "}
                  <p className="product-page-cart-quantity">{cartQuantity}</p>{" "}
                  <button
                    className="product-page-cart-increment-btn"
                    onClick={() => {
                      setCartQuantity(cartQuantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="product-page-wrapper-col2-add-to-cart"
                  onClick={() => {
                    setCartQuantity(cartQuantity + 1);
                  }}
                >
                  add to cart
                </button>
              )}
            </div>

            <div className="product-page-wrapper-col2-btns">
              <button>
                <GoShareAndroid /> share
              </button>
              <button>
                <FaRegHeart /> wish
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function VariationsCard({ src, onClick, variationImage }) {
  return (
    <div
      className={
        variationImage === src ? "variations-card-clicked" : "variations-card"
      }
      onClick={onClick}
    >
      <img src={src} alt="" />
    </div>
  );
}

function SimilarProductsSlider() {
  return (
    <div className="product-page-similar-items">
      <p className="product-page-similar-items-title">Related products</p>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={10}
      >
        {similarProductsDetails.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="products-page-similar-items-card">
              <div className="products-page-similar-items-card-img">
              <img
              src={item.image}
              alt={`img-${index}`}
            />
              </div>
            <p className="product-page-similar-items-card-headline">{item.headline}</p>

              <p className="product-page-similar-items-card-price">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductPage;
