import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import S1 from "../assets/slider1.png";
import S2 from "../assets/slider2.png";
import S3 from "../assets/slider3.png";
import S4 from "../assets/slider4.png";
import S5 from "../assets/slider5.png";
import S6 from "../assets/slider6.png";
import S7 from "../assets/slider7.png";
import S8 from "../assets/slider8.png";
import S9 from "../assets/slider9.png";

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slides = [
    { img: S1 },
    { img: S2 },
    { img: S3 },
    { img: S4 },
    { img: S5 },
    { img: S6 },
    { img: S7 },
    { img: S8 },
    { img: S9 },
  ];

  return (
    <div className="slider-container mt-[50px] w-[80%] mx-[10%]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-2xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
