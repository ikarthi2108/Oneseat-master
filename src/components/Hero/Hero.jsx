import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import bg01 from "../../assets/Hero-bg1.jpg";
import bgLeft02 from "../../assets/Hero-bg4.jpg";
import bg02 from "../../assets/Hero-bg5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  { url: bg01, quote: "Empowering students to find their perfect college" },
  { url: bg02, quote: "Choose the best path for your education" },
  { url: bgLeft02, quote: "We help you unlock your potential" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showModal, setShowModal] = useState(true); // Initially show modal
  const [isSubmitting, setIsSubmitting] = useState(false); // State for loader
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
  });

  useEffect(() => {
    const detailsEntered = localStorage.getItem("isDetailsEntered");
    if (detailsEntered === "true") {
      setShowModal(false); // Don't show the modal if details were entered
    }

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Show loader

    const templateParams = {
      fullName: formData.fullName,
      mobileNumber: formData.mobileNumber,
    };

    try {
      await emailjs.send(
        "service_wn0zeif",
        "template_sa2r8fm",
        templateParams,
        "5H2BJZTgAqjNdCBMz"
      );
      toast.success("Details sent successfully!");
      setShowModal(false); // Close modal on success
      setFormData({ fullName: "", mobileNumber: "" }); // Reset form data

      // Store the flag in localStorage
      localStorage.setItem("isDetailsEntered", "true");
    } catch (error) {
      toast.error("Failed to send details. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false); // Hide loader
    }
  };

  const handleExploreNowClick = () => {
    navigate("/supportedcolleges"); // Navigate to the supported colleges page
  };

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="hero-container">
      <ToastContainer />

      {images.map((image, index) => (
        <motion.div
          key={index}
          className={`hero-image ${index === currentImageIndex ? "visible" : ""}`}
          style={{
            backgroundImage: `url(${image.url})`,
          }}
          initial="hidden"
          animate={index === currentImageIndex ? "visible" : "hidden"}
          variants={fadeIn}
        ></motion.div>
      ))}

      <motion.div
        className={`hero-text ${fade ? "fade" : ""}`}
        initial="hidden"
        animate="visible"
        variants={slideUp}
      >
        <h1 className="desktop-heading">{images[currentImageIndex].quote}</h1>
        <p className="desktop-paragraph">
          PLEASE LOGIN TO SELECT DOMAINS AND COLLEGES
        </p>
        <motion.div
          className="btn btn-primary"
          onClick={handleExploreNowClick}
          variants={zoomIn}
          whileHover={{ scale: 1.1 }}
        >
          Explore Now <img src={dark_arrow} alt="arrow icon" />
        </motion.div>
      </motion.div>

      {showModal && (
        <motion.div
          className="modal show"
          style={{ display: "block" }}
          tabIndex="-1"
          initial="hidden"
          animate="visible"
          variants={zoomIn}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  disabled // Disable the close button
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <motion.form onSubmit={handleSubmit} variants={fadeIn}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting} // Disable while submitting
                  >
                    {isSubmitting ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Hero;
