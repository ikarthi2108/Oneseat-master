import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Progress.css';

const stepsData = [
  "Register",
  "Select Course",
  "Fill Application",
  "Upload Documents",
  "Admission Confirmed"
];

const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % stepsData.length);
    }, 1000); // Change step every 1 second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Application Progress</h2>
      <div className="d-flex justify-content-between align-items-center progress-wrapper">
        {stepsData.map((step, index) => (
          <div className="d-flex align-items-center step-container" key={index}>
            <div className={`step px-3 py-2 ${index <= activeStep ? 'active' : ''}`}>
              {step}
            </div>
            {index < stepsData.length - 1 && <div className="line" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
