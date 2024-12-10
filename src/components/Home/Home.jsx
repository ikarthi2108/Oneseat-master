import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Hero from "../Hero/Hero";
import OurRecords from "../OurRecords/OurRecords";
import OurPaths from "../OurPaths/OurPaths";
import Progress from "../Progress/Progress";
import Reviews from "../Reviews/Reviews";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Remove AOS animation from Hero */}
      <div>
        <Hero />
      </div>

      <div data-aos="fade-right">
        <OurRecords />
      </div>

      <div data-aos="fade-left">
        <Progress />
      </div>

      <div data-aos="zoom-in">
        <OurPaths />
      </div>

      <div data-aos="flip-up">
        <Reviews />
      </div>

      <Footer />
    </>
  );
};

export default Home;
