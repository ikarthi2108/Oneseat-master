import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Reviews.css"; // Custom CSS file for hover effects

const Reviews = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card review-card">
            <div className="img-container">
              <img
                src="https://img.freepik.com/premium-photo/young-indian-college-student-india_75648-286.jpg?w=1480"
                className="card-img-top"
                alt="Review Image 1"
              />
              <div className="card-hover-text">
                <p>"The personalized attention I received was amazing! They walked me through every step of the application process. I felt supported and confident in my choices!"</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Ram</h5>
              <p className="card-text">"Supportive"</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card review-card">
            <div className="img-container">
              <img
                src="https://media.istockphoto.com/photos/one-female-student-picture-id1179017978?k=6&m=1179017978&s=612x612&w=0&h=pWphafA08y0dpM0TdG8h_Ox9DwOBj8TQD8xfPyDZdIM="
                className="card-img-top"
                alt="Review Image 2"
              />
              <div className="card-hover-text">
                <p>"Choosing a college can be overwhelming, but this team made it easy! They listened to my needs and matched me with the ideal college. I'm forever grateful!"</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Janani</h5>
              <p className="card-text">"Life changing"</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card review-card">
            <div className="img-container">
              <img
                src="https://thumbs.dreamstime.com/b/happy-indian-student-sitting-stairs-showing-thumb-up-working-laptop-university-campus-technology-education-117129486.jpg"
                className="card-img-top"
                alt="Review Image 3"
              />
              <div className="card-hover-text">
                <p>"Thanks to edusity, I found the perfect college that aligns with my goals. The support I received was exceptional! I couldn't have done it without their guidance."</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Suresh</h5>
              <p className="card-text">"Inspiring"</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card review-card">
            <div className="img-container">
              <img
                src="https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720433-stock-photo-young-indian-student.jpg"
                className="card-img-top"
                alt="Review Image 4"
              />
              <div className="card-hover-text">
                <p>"My college experience changed completely after registering with this service. They helped me explore options I never considered. I'm now thriving in my dream program!"</p>
              </div>
            </div>
            <div className="card-body">
              <h5 className="card-title">Dinesh</h5>
              <p className="card-text">"Transformative"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;