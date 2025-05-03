import "./HeroSection.css";
import shoeImg from "../../assets/shoe.jpg";
import earbudsImg from "../../assets/earbuds.jpg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-wrapper">
        <div className="stats-grid">
          <div className="stat-cont">
            <p className="stat-title">20000+</p>
            <p className="stat-text">verified suppliers worldwide</p>
          </div>

          <div className="stat-cont">
            <p className="stat-title">4.9 / 5</p>
            <p className="stat-text">average customer satisfaction</p>
          </div>

          <div className="stat-cont">
            <p className="stat-title">10m+</p>
            <p className="stat-text">products delivered anually</p>
          </div>

          <div className="stat-cont">
            <p className="stat-title">24h</p>
            <p className="stat-text">personalized sourcing service</p>
          </div>
        </div>

        <div className="featured-products">
          <div className="featured-products-group">
            <p className="feature-products-group-title">buy in bulk</p>

            <div className="featured-products-group-divs">
              <div className="featured-products-group-div">
                <div className="featured-products-group-div-img">
                  <img src={shoeImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1700.00</p>
              </div>

              <div className="featured-products-group-div div2">
                <div className="featured-products-group-div-img">
                  <img src={earbudsImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1350.00</p>
              </div>
            </div>
          </div>

          <div className="featured-products-group">
            <p className="feature-products-group-title">popular products</p>

            <div className="featured-products-group-divs">
              <div className="featured-products-group-div">
                <div className="featured-products-group-div-img">
                  <img src={shoeImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1700.00</p>
              </div>

              <div className="featured-products-group-div div2">
                <div className="featured-products-group-div-img">
                  <img src={earbudsImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1350.00</p>
              </div>
            </div>
          </div>

          <div className="featured-products-group">
            <p className="feature-products-group-title">fast delivery</p>

            <div className="featured-products-group-divs">
              <div className="featured-products-group-div">
                <div className="featured-products-group-div-img">
                  <img src={shoeImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1700.00</p>
              </div>

              <div className="featured-products-group-div div2">
                <div className="featured-products-group-div-img">
                  <img src={earbudsImg} alt="" />
                </div>
                <p className="featured-products-group-div-price">kes 1350.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
