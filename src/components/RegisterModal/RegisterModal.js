import React, { useState } from 'react';
import './RegisterModal.css';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { formDataInitial, districts, colleges, twelfthGroups } from '../Hero/formData';

const RegisterModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState(formDataInitial);
  const [step, setStep] = useState(1); // Step control for form navigation
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state
  const [success, setSuccess] = useState(''); // Success state
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form before moving to step 2
  const handleNext = () => {
    const { name, phone, fatherName, motherName, district, email } = formData;

    if (!name || !phone || !fatherName || !motherName || !district || !email) {
      setError('All fields are mandatory!');
      return;
    }

    setError('');
    setStep(2);
  };

  // Go back to Step 1
  const handleBack = () => {
    setStep(1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const { tenthSchool, twelfthSchool, twelfthGroup, preferredCourse1, preferredCollege1 } = formData;

    if (!tenthSchool || !twelfthSchool || !twelfthGroup || !preferredCourse1 || !preferredCollege1) {
      setError('All fields are mandatory!');
      setLoading(false); // Stop loading
      return;
    }

    setError('');

    // Prepare data to send through EmailJS
    const emailParams = {
      from_name: formData.name,
      ...formData,
      reply_to: formData.email, // Reply email for EmailJS
    };

    // Sending email using EmailJS
    emailjs.send('service_pq3nqei', 'template_s1q9km5', emailParams, 'gRA-6d2knpljKso_J')
      .then((result) => {
        setSuccess('Thank you! We have received your details. We will get back to you shortly.');
        navigate('/supportedcolleges');
        onClose();
        setFormData(formDataInitial); // Reset form data to initial values
      })
      .catch((error) => {
        setError('Error sending email!');
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{step === 1 ? 'Personal Details' : 'College Preferences'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Horizontal progress bar */}
        <div className="progress-bar">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step === 2 ? 'active' : ''}`}></div>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          {step === 1 ? (
            <>
              {/* Step 1: Personal Details */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Father's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mother's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>District</Form.Label>
                <Form.Control
                  as="select"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select District</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>{district}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" onClick={handleNext} className="next-btn mt-3">
                Next
              </Button>
            </>
          ) : (
            <>
              {/* Step 2: College Preferences */}
              <Form.Group>
                <Form.Label>10th Studied School</Form.Label>
                <Form.Control
                  type="text"
                  name="tenthSchool"
                  value={formData.tenthSchool}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>12th Studied School</Form.Label>
                <Form.Control
                  type="text"
                  name="twelfthSchool"
                  value={formData.twelfthSchool}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>12th Group</Form.Label>
                <Form.Control
                  as="select"
                  name="twelfthGroup"
                  value={formData.twelfthGroup}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Group</option>
                  {twelfthGroups.map((group, index) => (
                    <option key={index} value={group}>{group}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred Course 1</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredCourse1"
                  value={formData.preferredCourse1}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred Course 2</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredCourse2"
                  value={formData.preferredCourse2}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred College 1</Form.Label>
                <Form.Control
                  as="select"
                  name="preferredCollege1"
                  value={formData.preferredCollege1}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select College</option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college}>{college}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred College 2</Form.Label>
                <Form.Control
                  as="select"
                  name="preferredCollege2"
                  value={formData.preferredCollege2}
                  onChange={handleChange}
                  disabled={!formData.preferredCollege1}
                >
                  <option value="" disabled>Select College</option>
                  {colleges.filter(college => college !== formData.preferredCollege1).map((college, index) => (
                    <option key={index} value={college}>{college}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="secondary" onClick={handleBack} className="back-btn mt-3">
                Back
              </Button>
              <Button variant="primary" type="submit" className="submit-btn" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
              </Button>
            </>
          )}
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
