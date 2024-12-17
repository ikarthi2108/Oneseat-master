import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
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
  const [showModal, setShowModal] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    mobileNumber: "",
  });

  useEffect(() => {
    const detailsEntered = localStorage.getItem("isDetailsEntered");
    if (detailsEntered === "true") {
      setShowModal(false);
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

    if (name === "mobileNumber") {
      if (!/^\d{0,10}$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          mobileNumber: "Enter up to 10 numbers only",
        }));
      } else if (value.length === 10) {
        setErrors((prev) => ({
          ...prev,
          mobileNumber: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          mobileNumber: "Mobile number must be exactly 10 digits.",
        }));
      }
    }

    if (name === "fullName") {
      if (!/^[a-zA-Z ]*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          fullName: "Only alphabets are allowed",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          fullName: "",
        }));
      }
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure no error exists before submitting
    if (errors.fullName || errors.mobileNumber || formData.mobileNumber.length !== 10) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

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
      setShowModal(false);
      setFormData({ fullName: "", mobileNumber: "" });

      localStorage.setItem("isDetailsEntered", "true");
    } catch (error) {
      toast.error("Failed to send details. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExploreNowClick = () => {
    navigate("/supportedcolleges");
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
        />
      ))}

      <motion.div
        className={`hero-text ${fade ? "fade" : ""}`}
      >
        <h1 className="desktop-heading">{images[currentImageIndex].quote}</h1>
        <p className="desktop-paragraph">
          PLEASE LOGIN TO SELECT DOMAINS AND COLLEGES
        </p>
        <motion.div
          className="btn btn-primary"
          onClick={handleExploreNowClick}
          whileHover={{ scale: 1.1 }}
        >
          Explore Now <img src={dark_arrow} alt="arrow icon" />
        </motion.div>
      </motion.div>

      {showModal && (
        <motion.div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Details</h5>
              </div>
              <div className="modal-body">
                <motion.form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.fullName && (
                      <div className="text-danger">{errors.fullName}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      required
                    />
                    {errors.mobileNumber && (
                      <div className="text-danger">{errors.mobileNumber}</div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
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
