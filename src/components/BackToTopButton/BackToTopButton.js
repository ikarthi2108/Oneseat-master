import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the arrow-up icon
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled beyond a certain point
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

  // Scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div className="back-to-top-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </div>
    )
  );
};

export default BackToTopButton;
