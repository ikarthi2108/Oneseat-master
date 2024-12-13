// BackToTopButton.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`offer-banner ${!showButton ? "full-width-banner" : ""}`}>
        <span className="offer-text">🎉 25% Off on New Consultation! 🎉</span>
      </div>

      {showButton && (
        <div className="back-to-top-button" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} size="lg" />
        </div>
      )}
    </>
  );
};

export default BackToTopButton;