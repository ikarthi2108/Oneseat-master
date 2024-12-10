import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SupportedColleges from "./components/SupportedColleges/SupportedColleges";
import Steps from "./components/Steps/Steps";
import StudentForm from "./components/StudentForm/StudentForm";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ReferModal from "./components/ReferModal/ReferModal"; // Import ReferModal
import BackToTopButton from "./components/BackToTopButton/BackToTopButton"; // Import BackToTopButton

const App = () => {
  const [showReferModal, setShowReferModal] = useState(false); // State to manage modal visibility

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
      <FloatingButton onClick={handleReferClick} /> {/* Refer Button */}
      <ReferModal show={showReferModal} onClose={handleReferClose} /> {/* Refer Modal */}
      <BackToTopButton /> {/* Back to Top Button */}
    </Router>
  );
};

export default App;
