import React, { useState } from "react";
import useOnScreen from "../Hooks/Animation";

export const Work = () => {
  const [sectionRef, isVisible] = useOnScreen(0.3);

  const [currentImage, setCurrentImage] = useState(
    "laptop.webp"
  );
  const handleImageChange = (image) => {
    setCurrentImage(image);
  };
  return (
    <>
      <section className="work bg-black">
        <div className="container">
          <div className="bg-img">
            <img src="/images/background/line.png" alt="" />
          </div>
          <div className="how-it-works">
            <div ref={sectionRef} className={`how-it-works-content ${isVisible ? 'fadeInUp' : ''}`}>
              <h2>How It Works</h2>
              <ol className="steps">
                <li>
                  <div
                    className={currentImage == "laptop.webp" ? "line-active" : "line"}
                  ></div>
                  <h3
                    onClick={() => handleImageChange("laptop.webp")}
                  >
                    Create Your Route
                  </h3>
                  <p>
                    Enter your pickup & dropoff locations or the number of hours you
                    wish to book a car and driver for.
                  </p>
                </li>
                <li>
                  <div className={currentImage == "desktop.webp" ? "line-active" : "line"}></div>
                  <h3
                    onClick={() => handleImageChange("desktop.webp")}
                  >
                    Choose Vehicle For You
                  </h3>
                  <p>
                    On the day of your ride, you will receive two email and SMS
                    updates – one informing you that.
                  </p>
                </li>
                <li>
                  <div className={currentImage == "desktop2.webp" ? "dot-active" : "dot"}></div>
                  <h3
                    onClick={() => handleImageChange("desktop2.webp")}
                  >
                    Enjoy The Journey
                  </h3>
                  <p>
                    After your ride has taken place, we would appreciate it if you
                    could rate your car and driver.
                  </p>
                </li>
              </ol>
            </div>
            <div className="img-container">
              <img src={"/images/background/" + currentImage} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
