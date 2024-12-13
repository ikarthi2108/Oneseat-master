import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SupportedColleges from "./components/SupportedColleges/SupportedColleges";
import Steps from "./components/Steps/Steps";
import StudentForm from "./components/StudentForm/StudentForm";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ReferModal from "./components/ReferModal/ReferModal";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import AdvertisementModal from "./components/AdvertisementModal/AdvertisementModal";

const App = () => {
  const [showReferModal, setShowReferModal] = useState(false);
  const [showAdModal, setShowAdModal] = useState(false);

  // Check if the advertisement modal should be displayed
  useEffect(() => {
    const adLastClosedTime = localStorage.getItem("adLastClosedTime");
    const currentTime = new Date().getTime();

    // Show the ad if no record exists or more than 1 hour (3600000ms) has passed
    if (!adLastClosedTime || currentTime - adLastClosedTime > 1 * 60 * 60 * 1000) {
      setShowAdModal(true);
    }
  }, []);

  // Handle closing the advertisement modal
  const handleAdClose = () => {
    setShowAdModal(false);

    // Save the current time as the last closed time
    const currentTime = new Date().getTime();
    localStorage.setItem("adLastClosedTime", currentTime);
  };

  const handleReferClick = () => {
    setShowReferModal(true);
  };

  const handleReferClose = () => {
    setShowReferModal(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supportedcolleges" element={<SupportedColleges />} />
        <Route path="/steps" element={<Steps />} />
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
      {/* Advertisement Modal */}
      <AdvertisementModal show={showAdModal} onClose={handleAdClose} />
      {/* Refer Button */}
      <FloatingButton onClick={handleReferClick} />
      {/* Refer Modal */}
      <ReferModal show={showReferModal} onClose={handleReferClose} />
      {/* Back to Top Button */}
      <BackToTopButton />
    </Router>
  );
};

export default App;