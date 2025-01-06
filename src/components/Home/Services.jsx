import React, { useState } from "react";

export const Service = () => {
  const images = [
    {
      url: "/images/slider/service1.png",
      title: "Chauffeur Hailing",
      text: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    },
    {
      url: "/images/slider/service2.png",
      title: "Airport Transfers",
      text: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    },
    {
      url: "/images/slider/service3.png",
      title: "Sprinter Class",
      text: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    },
    {
      url: "/images/slider/wedding.webp",
      title: "Wedding Class",
      text: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    },
    {
      url: "/images/slider/service5.png",
      title: "Intercity Rides",
      text: "Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 4 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <section>
      <div className="container">

        <div className="services">
          <h1>Our Services</h1>
          <div className="slideshow-container">
            {/* Image Row */}
            <div
              className="slideshow-row"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {images.map((image, index) => (
                <div className="image-container">
                  <img
                    key={index}
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className="slideshow-image"
                  />
                  <div class="hover-text">
                    <h5>{image.title}</h5>
                    <p>{image.text}</p>
                  </div>
                </div>

              ))}
            </div>

            {/* Arrows */}
            <button onClick={handlePrev} className="arrow-button arrow-left">
              &#8592;
            </button>
            <button onClick={handleNext} className="arrow-button arrow-right">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
