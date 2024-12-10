import React from "react";
import "./Steps.css";
import "bootstrap/dist/css/bootstrap.min.css";

import firstGif from "../../assets/Hero-bg2.jpg";
import secondGif from "../../assets/Hero-bg3.jpg";

const Steps = () => {
  return (
    <div className="container-fluid page-container">
      {/* Header Section */}
      <div className="container">
        <header className="text-center py-5 header-section">
          <h1 className="header-title">Navigating Your Journey to Higher Education</h1>
          <h2 className="header-subtitle">
            Your Journey to Higher Education Starts Here: Simplified College
            Admissions Process
          </h2>
        </header>

        {/* WHO WE ARE Section */}
        <section className="py-5 who-we-are-section">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src={firstGif}
                className="img-fluid"
                alt="Who We Are"
              />
            </div>
            <div className="col-md-6">
              <h3 className="section-title">WHO WE ARE</h3>
              <p>
                "We are a dedicated team committed to helping students 
                find the perfect college that matches their aspirations and goals. 
                With personalized guidance and a deep understanding of various educational institutions, 
                we simplify the admission process for students across the state. 
                Our mission is to empower students with the right choices, making their college dreams a reality."
              </p>
            </div>
          </div>
        </section>

        {/* WHAT WE DO Section */}
        <section className="py-5 bg-light what-we-do-section">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="section-title">WHAT WE DO</h3>
              <p>
                "We assist students in navigating the college admission process by 
                providing expert guidance and personalized recommendations. 
                From identifying the best-fit colleges to supporting with applications and enrollment,
                we make the journey seamless and stress-free. Our goal is to empower 
                students with the tools and knowledge they need to secure a spot in their dream institution."
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={secondGif}
                className="img-fluid"
                alt="What We Do"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Steps;
