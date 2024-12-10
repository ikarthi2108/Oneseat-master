import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faClock } from "@fortawesome/free-solid-svg-icons"; 

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    // Handle newsletter signup logic here
  };

  return (
    <footer className="footer-container  ">
      <div className="footer-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget intro-widget">
                <a href="index.html" className="logo-link">
                  <img src={Logo} alt="logo" />
                </a>
                <p>
                  We understand that choosing the right path can be confusing.
                  That's why we are dedicated to developing solutions that
                  simplify your decisions and guide you towards success.
                </p>
                <ul className="contact-info-list ">
                  <li>
                    <span className="icon-container">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    0123456789
                  </li>
                  <li>
                    <span className="icon-container mt-2">
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span className="mt-3"> Mon - Sat 8.00 - 18.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget course-list-widget">
                <h5 className="widget-title">Popular Colleges</h5>
                <ul className="course-links text-light">
                  <li>
                    PSG TECH
                  </li>
                  <li>
                    PSG ARTS
                  </li>
                  <li>
                    NGP TECH
                  </li>
                  <li>
                    NGP ARTS
                  </li>
                  <li>
                    SRI KRISHNA
                  </li>
                  <li>
                    GRD ARTS
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget news-widget">
                <h5 className="widget-title">Latest News</h5>
                <ul className="news-list">
                  <li>
                    <div className="news-item text-light">
                        OCTOBER 05, 2024
                      <h6 className="news-title text-light">
                          Applications for PG Start from December                        
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="news-item text-light">
                        OCTOBER 05, 2024
                      <h6 className="news-title text-light">
                         Application for for UG start from January
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget newsletter-widget">
                <h5 className="widget-title">Newsletter</h5>
                <div className="newsletter-section">
                  <p>
                    Register with us to get latest updates & services
                  </p>
                  {/* <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      name="newsletter-email"
                      id="newsletter-email"
                      placeholder="Your email address"
                      required
                    />
                    <input type="submit" value="Send" />
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 text-sm-left text-center">
              <span className="copyright-text">
                © Cooked by Sandy001.   All
                Rights Reserved.   2024
              </span>
            </div>
            <div className="col-md-6 col-sm-6">
              <ul className="terms-privacy-list d-flex justify-content-sm-end justify-content-center">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
