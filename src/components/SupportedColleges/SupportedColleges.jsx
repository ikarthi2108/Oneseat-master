import React, { useState } from 'react';
import './SupportedColleges.css';
import collegeData from './collegeData'; // Ensure collegeData.js has the correct structure
import { Modal, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundVideo from '../../assets/videodomain.mp4';

const SupportedColleges = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);

  const types = ['Medical & Dental', 'Engineering', 'Agri', 'Arts & Science'];
  const districts = ['Coimbatore', 'Namakkal', 'Salem', 'Erode', 'Tirunelveli', 'Ramnad', 'Dindigul','Madurai'];

  const filteredColleges = Object.keys(collegeData)
    .filter((stream) => selectedType === '' || stream === selectedType)
    .flatMap((stream) =>
      Object.keys(collegeData[stream]).flatMap((location) =>
        collegeData[stream][location].map((college) => ({
          ...college,
          stream,
          location,
        }))
      )
    )
    .filter(college => selectedDistrict === '' || college.location === selectedDistrict);

  const handleCardClick = (college) => {
    setSelectedCollege(college);
    setShowModal(true);
  };

  const clearFilters = () => {
    setSelectedType('');
    setSelectedDistrict('');
  };

  return (
    <div className="supported-colleges-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="college-container container my-5">
        {/* Heading: Our Domains */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="college-heading">OUR DOMAINS</h1>
        </motion.div>

        {/* Instructional Text: Select a Domain */}
        <div className="instruction-text text-center mb-3">
          <p className='text-white'><strong>Select a domain</strong></p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons mb-4 d-flex justify-content-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {types.map((type) => (
            <motion.div key={type} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setSelectedType(type)}
                className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              >
                {type}
              </Button>
            </motion.div>
          ))}
          {/* Clear Filters Button */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button onClick={clearFilters} className="filter-btn">
              Clear Filters
            </Button>
          </motion.div>
        </motion.div>

        {/* District Buttons */}
        {selectedType && (
          <>
            <div className="instruction-text text-center mb-3">
              <p><strong>Select a district</strong></p>
            </div>
            <motion.div
              className="district-buttons mb-4 d-flex justify-content-center gap-3 flex-wrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {districts.map((district) => (
                <motion.div key={district} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setSelectedDistrict(district)}
                    className={`filter-btn ${selectedDistrict === district ? 'active' : ''}`}
                  >
                    {district}
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}

        {/* Show college cards based on selected type */}
        {selectedType && (
          <>
            {filteredColleges.length > 0 ? (
              <div className="row">
                {filteredColleges.map((college, index) => (
                  <motion.div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 mb-3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="card college-card" onClick={() => handleCardClick(college)}>
                      <img src={college.image} className="card-img-top college-image" alt={college.name} />
                      <div className="card-body">
                        <h5 className="card-title">{college.name}</h5>
                        <p className="card-location">{college.location}</p>
                        <p className="card-text"><strong>Fees: </strong>{college.fees}</p>
                        <p className="card-text-admission text-success"><strong>Admissions Done: </strong>{college.admissionsDone}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center">No colleges found for the selected domain & district.</p>
            )}
          </>
        )}

        {/* Modal with Larger Design */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCollege?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedCollege && (
              <>
                {/* Image */}
                <img src={selectedCollege.image} alt={selectedCollege.name} className="img-fluid mb-3" />

                {/* Apply Now Button */}
                <Link to={'/studentform'} className="btn btn-primary mb-3">Apply Now</Link>

                {/* Description */}
                <p><strong>Description: </strong>{selectedCollege.description}</p>

                {/* Certifications */}
                <h5>Certifications</h5>
                {selectedCollege.certifications?.length ? (
                  selectedCollege.certifications.map((cert, index) => (
                    <p key={index}>
                      <strong>{cert.name}</strong>
                    </p>
                  ))
                ) : (
                  <p>No certifications available.</p>
                )}

                {/* Facilities */}
                <h5>Facilities</h5>
                <ul>
                  {selectedCollege.facilities?.length ? (
                    selectedCollege.facilities.map((facility, index) => (
                      <li key={index}>{facility.name}</li>
                    ))
                  ) : (
                    <li>No facilities listed.</li>
                  )}
                </ul>

                {/* Placement Companies Marquee */}
                <h5>Placement Companies</h5>
                <div className="marquee">
                  <div className="marquee-content">
                    {selectedCollege.placementCompanies?.length ? (
                      selectedCollege.placementCompanies.map((company, index) => (
                        <div className="marquee-item" key={index}>
                          <img src={company.image} alt={company.name} />
                        </div>
                      ))
                    ) : (
                      <p>No placement companies available.</p>
                    )}
                  </div>
                </div>

                {/* Courses Table */}
                <h5>Courses</h5>
                <div style={{ overflowX: 'auto' }}>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Management Quota Fees</th>
                      <th>Govt Quota Fees</th>
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCollege.coursesAvailable?.length ? (
                      selectedCollege.coursesAvailable.map((course, index) => (
                        <tr key={index}>
                          <td>{course}</td>
                          <td>{selectedCollege.managementFees}</td>
                          <td>{selectedCollege.govtQuotaFees}</td>
                          <td>{selectedCollege.fees}</td>
                        </tr>
                      ))
                    ) : (
                      <tr><td colSpan="4">No courses available.</td></tr>
                    )}
                  </tbody>
                </Table>
                </div>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SupportedColleges;
