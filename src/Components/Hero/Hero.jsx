import "./Hero.css";
import shoeImg from "../../assets/shoe.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="stats-grid">
          <Stat
            statTitle={"20000+"}
            statText={"verified suppliers worldwide"}
          />
          <Stat
            statTitle={"4.9 / 5"}
            statText={"average customer satisfaction"}
          />
          <Stat statTitle={"10m+"} statText={"products delivered anually"} />
          <Stat statTitle={"24h"} statText={"personalized sourcing service"} />
        </div>

        <div className="featured-products">
          <div className="featured-products-category">
            <div className="featured-products-category-title">save big</div>

            <div className="featured-products-category-body">
              <FeaturedProduct />
              <FeaturedProduct />
            </div>
          </div>

          <div className="featured-products-category">
            <div className="featured-products-category-title">hot products</div>

            <div className="featured-products-category-body">
              <FeaturedProduct />
              <FeaturedProduct />
            </div>
          </div>

          <div className="featured-products-category">
            <div className="featured-products-category-title">
              highest rated
            </div>

            <div className="featured-products-category-body">
              <FeaturedProduct />
              <FeaturedProduct />
            </div>
          </div>
        </div>

        <div className="swiper-container">
          <Swiper
            className="featured-products-hidden"
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={10}
          >
            <SwiperSlide className="swiper-slide">
              <div className="featured-products-category">
                <div className="featured-products-category-title">save big</div>

                <div className="featured-products-category-body">
                  <FeaturedProduct />
                  <FeaturedProduct />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-products-category">
                <div className="featured-products-category-title">
                  hot products
                </div>

                <div className="featured-products-category-body">
                  <FeaturedProduct />
                  <FeaturedProduct />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="featured-products-category">
                <div className="featured-products-category-title">
                  highest rated
                </div>

                <div className="featured-products-category-body">
                  <FeaturedProduct />
                  <FeaturedProduct />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Stat({ statTitle, statText }) {
  return (
    <div className="stat-cont">
      <p className="stat-title">{statTitle}</p>
      <p className="stat-text">{statText}</p>
    </div>
  );
}

function FeaturedProduct() {
  return (
    <div className="featured-product">
      <div className="featured-product-img">
        <img src={shoeImg} alt="" />
      </div>

      <p className="featured-product-price">ksh 1700</p>

      <div className="featured-product-discount">
        <p className="featured-product-discounted-figure">ksh 2500</p>
        <p className="featured-product-percentage-discount">-32%</p>
      </div>
    </div>
  );
}

export default Hero;
