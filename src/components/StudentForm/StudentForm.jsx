import React, { useState } from 'react';
import './StudentForm.css';
import { Button, Form, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formDataInitial, districts, colleges, twelfthGroups } from '../Hero/formData';

const StudentForm = () => {
  const [formData, setFormData] = useState({ ...formDataInitial, feesRange: '', preferredCourse2: '', preferredCollege2: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      tenthSchool,
      twelfthSchool,
      twelfthGroup,
      preferredCourse1,
      preferredCollege1,
      email,
      name,
    } = formData;

    // Check for mandatory fields
    if (!tenthSchool || !twelfthSchool || !twelfthGroup || !preferredCourse1 || !preferredCollege1 || !formData.feesRange) {
      toast.error('All fields are mandatory!');
      setLoading(false);
      return;
    }

    // Parameters for the admin email
    const adminEmailParams = {
      from_name: name,
      ...formData,
      reply_to: email,
    };

    // Send email to Admin
    emailjs
      .send('service_uhgnfcc', 'template_yll0hkf', adminEmailParams, 'wPCxvoMnXXj_VMZfl')
      .then(() => {
        toast.success('Thank you! We have received your details.');

        // Parameters for the user confirmation email
        const userEmailParams = {
          to_email: email, // Send email to user's email
          name: name, // Include user name
          message: `Hello ${name},\n\nThank you for submitting your details to WayedEd. Our team will get back to you shortly.`,
        };

        // Send confirmation email to User
        emailjs
          .send('service_uhgnfcc', 'template_ii79ydn', userEmailParams, 'wPCxvoMnXXj_VMZfl')
          .then(() => {
            toast.success('A confirmation email has been sent to your email.');
            setFormData({ ...formDataInitial, feesRange: '', preferredCourse2: '', preferredCollege2: '' }); // Reset form fields
          })
          .catch((error) => {
            console.error('Error sending confirmation email:', error);
            toast.error('Error sending confirmation email to user!');
          });
      })
      .catch((error) => {
        console.error('Error sending admin email:', error);
        toast.error('Error sending email to admin!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="student-form mt-5">
      <h2>Student Details</h2>

      <ToastContainer />

      <Form onSubmit={handleSubmit}>
        <div className="form-row">
          {/* Left Column */}
          <div className="form-column">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>District</Form.Label>
              <Form.Control
                as="select"
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                <option value="" disabled>Select District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expected Fees Range</Form.Label>
              <Form.Control
                as="select"
                name="feesRange"
                value={formData.feesRange}
                onChange={handleChange}
              >
                <option value="" disabled>Select Fee Range</option>
                <option value="20000-30000">20000 - 30000</option>
                <option value="30000-50000">30000 - 50000</option>
                <option value="50000-70000">50000 - 70000</option>
                <option value="70000-100000">70000 - 1 Lakh</option>
                <option value="moreThan100000">More than 1 Lakh</option>
              </Form.Control>
            </Form.Group>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <Form.Group>
              <Form.Label>10th Studied School</Form.Label>
              <Form.Control
                type="text"
                name="tenthSchool"
                value={formData.tenthSchool}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>12th Studied School</Form.Label>
              <Form.Control
                type="text"
                name="twelfthSchool"
                value={formData.twelfthSchool}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>12th Group</Form.Label>
              <Form.Control
                as="select"
                name="twelfthGroup"
                value={formData.twelfthGroup}
                onChange={handleChange}
              >
                <option value="" disabled>Select Group</option>
                {twelfthGroups.map((group, index) => (
                  <option key={index} value={group}>
                    {group}
                  </option>
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
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Preferred College 1</Form.Label>
              <Form.Control
                as="select"
                name="preferredCollege1"
                value={formData.preferredCollege1}
                onChange={handleChange}
              >
                <option value="" disabled>Select College</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college}>
                    {college}
                  </option>
                ))}
              </Form.Control>
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
              <Form.Label>Preferred College 2</Form.Label>
              <Form.Control
                as="select"
                name="preferredCollege2"
                value={formData.preferredCollege2}
                onChange={handleChange}
              >
                <option value="" disabled>Select College</option>
                {colleges.map((college, index) => (
                  <option key={index} value={college}>
                    {college}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <Button variant="primary" type="submit" className="submit-btn" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
      </Form>
    </div>
  );
};

export default StudentForm;
