import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "./CategoriesSlider.css";
import phonesAndTelecommunicationsSrc from  "../../assets/phones-and-telecommunications-removebg-preview.png";
import mensFashionSrc from "../../assets/mens-fashion.png";
import homeAppliancesSrc from "../../assets/home-appliances.png"
import accessoriesSrc from "../../assets/accessories.png";
import jewelrySrc from "../../assets/jewelry.png";
import consumerElectronicsSrc from "../../assets/consumer-electronics.png";
import homeImprovementSrc from "../../assets/home-improvement-and-lighting.png";
import hairEssentialsSrc from "../../assets/hair-essentials.png";
import automotiveAndMotorcycleSrc from "../../assets/automotive-and-motorcycle.png";
import luggagesAndBagsSrc from "../../assets/luggages-and-bags.png";
import ShoesSrc from "../../assets/shoes.png";
import womenFashionSrc from "../../assets/women-fashion.png";
import sportsAndEntertainmentSrc from "../../assets/sports-and-entertainment.png";
import toysAndGamesSrc from "../../assets/toys-and-games.png";
import beautyAndHealthSrc from "../../assets/beauty-and-health.png";
import toolsAndIndustrySrc from "../../assets/tools-and-industry.png";
import furnitureSrc from "../../assets/furniture.png";
import petSuppliesSrc from "../../assets/pet-supplies.png";

function CategoriesSlider () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slides = [
    [
      { text: "phones & telecommunications", image: phonesAndTelecommunicationsSrc },
      { text: "home appliances", image: homeAppliancesSrc },
      { text: "accessories", image: accessoriesSrc },
      { text: "jewelry", image: jewelrySrc },
      { text: "consumer electronics", image: consumerElectronicsSrc },
      { text: "home improvement & lighting", image: homeImprovementSrc },
    ],
    [
      { text: "hair essentials", image: hairEssentialsSrc },
      { text: "automotive & motorcycle", image: automotiveAndMotorcycleSrc },
      { text: "luggages & bags", image: luggagesAndBagsSrc },
      { text: "shoes", image: ShoesSrc },
      { text: "men's clothing", image: mensFashionSrc },
      { text: "women's clothing", image: womenFashionSrc },
    ],
    [
      { text: "sports & entertainment", image: sportsAndEntertainmentSrc },
      { text: "toys & games", image: toysAndGamesSrc },
      { text: "beauty & health", image: beautyAndHealthSrc },
      { text: "tools & industries", image: toolsAndIndustrySrc },
      { text: "furniture", image: furnitureSrc },
      { text: "pet supplies", image: petSuppliesSrc },
    ],
  ];

  const goToSlide = (index) => {
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  return (
    <div className="slider-wrapper">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((items, slideIdx) => (
          <div key={slideIdx} className="slide">
            <div className="slide-grid">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="slide-item"
                >
                  <div className="slide-image-wrapper">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="slide-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="arrow left">
      <FaChevronLeft />
      </button>
      <button onClick={nextSlide} className="arrow right">
      <FaChevronRight />
      </button>

      <div className="dots">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`dot ${currentSlide === idx ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSlider;
