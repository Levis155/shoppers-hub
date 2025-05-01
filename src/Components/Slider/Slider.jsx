import React, { useState } from "react";
import "./Slider.css";

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const slides = [
    [
      { text: "Nature", image: "https://picsum.photos/id/1015/400/300" },
      { text: "Mountains", image: "https://picsum.photos/id/1003/400/300" },
      { text: "Ocean", image: "https://picsum.photos/id/1025/400/300" },
      { text: "Forest", image: "https://picsum.photos/id/1040/400/300" },
      { text: "City", image: "https://picsum.photos/id/1031/400/300" },
      { text: "Desert", image: "https://picsum.photos/id/1050/400/300" },
    ],
    [
      { text: "Dog", image: "https://picsum.photos/id/237/400/300" },
      { text: "Cat", image: "https://picsum.photos/id/593/400/300" },
      { text: "Horse", image: "https://picsum.photos/id/284/400/300" },
      { text: "Parrot", image: "https://picsum.photos/id/1062/400/300" },
      { text: "Panda", image: "https://picsum.photos/id/1084/400/300" },
      { text: "Tiger", image: "https://picsum.photos/id/1074/400/300" },
    ],
    [
      { text: "Sunset", image: "https://picsum.photos/id/1000/400/300" },
      { text: "Aurora", image: "https://picsum.photos/id/1016/400/300" },
      { text: "Canyon", image: "https://picsum.photos/id/1041/400/300" },
      { text: "Lake", image: "https://picsum.photos/id/1018/400/300" },
      { text: "Snow", image: "https://picsum.photos/id/1036/400/300" },
      { text: "Rain", image: "https://picsum.photos/id/1022/400/300" },
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
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="slide-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={prevSlide} className="arrow left">
        ◀
      </button>
      <button onClick={nextSlide} className="arrow right">
        ▶
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

export default SliderComponent;
