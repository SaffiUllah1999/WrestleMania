import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images }) => {
  const sliderRef = useRef(null);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "50px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            className="crausel"
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent:"center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: activeIndex === index ? "100%" : "95%",
                padding: activeIndex === index ? "0px" : "20px", // Padding for active image
                borderRadius: "20px",
                transition: "padding 0.3s ease, width 0.3s ease", // Smooth transitions
              }}
            />
          </div>
        ))}
      </Slider>
      <button
        onMouseEnter={() => setHoverPrev(true)}
        onMouseLeave={() => setHoverPrev(false)}
        onClick={prevSlide}
        style={{
          ...buttonStyle,
          left: 10,
          backgroundColor: hoverPrev
            ? "rgba(192, 192, 192, 0.8)"
            : "rgba(192, 192, 192, 0.5)",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          size="1x"
          style={{ color: "black" }}
        />
      </button>
      <button
        onMouseEnter={() => setHoverNext(true)}
        onMouseLeave={() => setHoverNext(false)}
        onClick={nextSlide}
        style={{
          ...buttonStyle,
          right: 10,
          backgroundColor: hoverNext
            ? "rgba(192, 192, 192, 0.8)"
            : "rgba(192, 192, 192, 0.5)",
        }}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="1x"
          style={{ color: "black" }}
        />
      </button>
    </div>
  );
};

// Styles
const slideStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

// Button styles
const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
  borderRadius: "0px",
  zIndex: 1,
};

export default Carousel;
