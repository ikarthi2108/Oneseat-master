import React from "react";
import "./OurRecords.css";
import CountUp from "react-countup";

const OurRecords = () => {
  return (
    <div className="container-fluid main-container">
      <div className="row justify-content-center">
        <div className="col-12 mt-5">
          <div className="row info text-center justify-content-center">
            <div className="col-12 col-md-2 counter-section">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-512-thumb/jumping-students-981258.png"
                alt="Happy Students"
                className="counter-image"
              />
              <h3>
                <CountUp start={0} end={2000} duration={3} separator="," />+
              </h3>
              <p>Happy Students</p>
            </div>

            <div className="col-12 col-md-2 counter-section">
              <img
                src="https://www.pngall.com/wp-content/uploads/8/College-PNG-High-Quality-Image.png"
                alt="Colleges"
                className="counter-image"
              />
              <h3>
                <CountUp start={0} end={50} duration={4} separator="," />+
              </h3>
              <p>Colleges in TN</p>
            </div>

            <div className="col-12 col-md-2 counter-section">
              <img
                src="https://www.freepngimg.com/download/map/71552-map-google-computer-icons-paper-location-world.png"
                alt="Districts"
                className="counter-image"
              />
              <h3>
                <CountUp start={0} end={9} duration={5} />+
              </h3>
              <p>Districts in TN</p>
            </div>

            <div className="col-12 col-md-2 counter-section">
              <img
                src="https://icon-library.com/images/experience-icon-png/experience-icon-png-4.jpg"
                alt="Savings"
                className="counter-image"
              />
              <h3>
                <CountUp start={0} end={10} duration={6} />+
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecords;
