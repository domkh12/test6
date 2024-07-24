import React, { useEffect, useState } from "react";
import CardTemplate from "./CardTemplate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

function TemplatesSection() {
  const [slidesToShow, setSlidesToShow] = useState(3); // Initial value
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      // Adjust the number of slides based on window width
      if (windowWidth < 532) {
        setSlidesToShow(1);
      } else if (windowWidth < 540) {
        setSlidesToShow(1.2);
      } else if (windowWidth < 768) {
        setSlidesToShow(1.4);
      } else if (windowWidth < 800) {
        setSlidesToShow(1.5);
      } else if (windowWidth < 950) {
        setSlidesToShow(1.6);
      } else if (windowWidth < 1280) {
        setSlidesToShow(1.7);
      } else if (windowWidth < 1350) {
        setSlidesToShow(1.9);
      } else if (windowWidth < 1536) {
        setSlidesToShow(2);
      } else if (windowWidth < 1650) {
        setSlidesToShow(2.2);
      } else if (windowWidth > 1650) {
        setSlidesToShow(2.7);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow, // Dynamically set based on state
    centerMode: true,
    centerPadding: "10px",
  };

  const templateData = [
    { type: "Developer", image: "https://i.pinimg.com/originals/9d/73/a9/9d73a9cad2e1ee6887321ddb7ea0707c.jpg" },
    { type: "Marketing", image: "https://i.pinimg.com/originals/95/8d/84/958d84b6bf7cd6cc52487ccacdc6336d.jpg" },
    { type: "Business", image: "https://i.pinimg.com/originals/6e/34/ff/6e34ffa4e019603d9e9dba96e42e02d2.png" },
    { type: "Photography", image: "https://i.pinimg.com/originals/e1/72/4d/e1724d5908627ffdd2d5c71c0a87999d.png" },
  ];

  const handleCardClick = () => {
    const isLoggedIn = !!localStorage.getItem("access");
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <section
      className="sm:py-10 lg:px-40 sm-max:px-0 sm:px-10 sm-max:py-5 bg-[#F7F7F7] dark:bg-gray-800 font-sans section"
      name="template"
    >
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="xl:text-4xl text-primary font-semibold sm:text-2xl sm-max:text-2xl sm-max:px-10 sm-max:text-center">
          Transform your work into art with our templates
        </h2>
        <p className="text-lg dark:text-gray-100">Our popular templates!</p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>

      <div className="slider-container mt-10 sm-max:mx-5">
        <Slider {...settings}>
          {templateData.map((template) => (
            <div key={template.type} onClick={handleCardClick} className="cursor-pointer">
              <div className="px-5">
                <CardTemplate {...template} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default TemplatesSection;
