import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OurPaths.css";

const contentData = {
  "Who we are?":
    "We Are mission is driven by the desire to make a lasting impact. We believe that through our efforts, we can contribute to a better future for our communities and the world. By embracing challenges and seizing opportunities, we strive to empower individuals, drive innovation, and support sustainable growth. Our work is about more than just business—it's about making a difference.",
  "Why we do?":
    "Our mission is driven by the desire to make a lasting impact. We believe that through our efforts, we can contribute to a better future for our communities and the world. By embracing challenges and seizing opportunities, we strive to empower individuals, drive innovation, and support sustainable growth. Our work is about more than just business—it's about making a difference.",
  "What you get?":
    "By partnering with us, you gain access to unmatched expertise, innovative solutions, and a network of support that will help you thrive. Our clients benefit from our customized approach, tailored to meet their unique needs and goals. We deliver value, inspire confidence, and ensure that you are positioned for success, no matter the challenges you face.",
};

const OurPaths = () => {
  const [hovered, setHovered] = useState("Who we are?");

  return (
    <div className="container-fluid custom-container p-5">
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="content-box p-5">
            <p>{contentData[hovered]}</p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="btn-group-vertical w-100">
            {Object.keys(contentData).map((key) => (
              <button
                key={key}
                className={`btn btn-lg btn-custom mb-3 ${
                  hovered === key ? "active" : ""
                }`}
                onMouseEnter={() => setHovered(key)}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurPaths;
