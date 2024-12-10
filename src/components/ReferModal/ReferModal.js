import React, { useState } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ReferModal.css";

const ReferModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerMobile: "",
    name: "",
    phone: "",
    fatherName: "",
    district: "",
    preferredCourse: "",
    preferredCollege: "",
  });

  const [loading, setLoading] = useState(false);

  const districts = ["District 1", "District 2", "District 3"];
  const colleges = ["College 1", "College 2", "College 3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_gjlqobt"; // Replace with your EmailJS service ID
    const templateID = "template_igkbdih"; // Replace with your EmailJS template ID
    const publicKey = "kkbG-uv2B1KZ1WpQj"; // Replace with your EmailJS public key

    // Map empty fields to "Not Provided" to ensure no blank data is sent
    const payload = {
      referrer_name: formData.referrerName || "Not Provided",
      referrer_mobile: formData.referrerMobile || "Not Provided",
      name: formData.name || "Not Provided",
      phone: formData.phone || "Not Provided",
      father_name: formData.fatherName || "Not Provided",
      district: formData.district || "Not Provided",
      preferredCourse: formData.preferredCourse || "Not Provided",
      preferredCollege: formData.preferredCollege || "Not Provided",
    };

    emailjs
      .send(serviceID, templateID, payload, publicKey)
      .then(
        (response) => {
          setLoading(false);
          toast.success("Referral details submitted successfully!");
          onClose();
          setFormData({
            referrerName: "",
            referrerMobile: "",
            name: "",
            phone: "",
            fatherName: "",
            district: "",
            preferredCourse: "",
            preferredCollege: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to submit referral details. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={onClose} size="lg" centered className="refer-modal">
        <Modal.Header closeButton className="refer-modal-header">
          <Modal.Title className="refer-modal-title">Refer A Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body className="refer-modal-body">
          <Form onSubmit={handleSubmit}>
            <div className="refer-modal-grid">
              {/* Referrer Information */}
              <Form.Group>
                <Form.Label>Referrer's Name</Form.Label>
                <Form.Control
                  type="text"
                  name="referrerName"
                  value={formData.referrerName}
                  onChange={handleChange}
                  placeholder="Enter Referrer's Name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Referrer's Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="referrerMobile"
                  value={formData.referrerMobile}
                  onChange={handleChange}
                  placeholder="Enter Referrer's Mobile Number"
                  required
                />
              </Form.Group>

              {/* Referral Information */}
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Friend's Name"
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
                  placeholder="Enter Friend's Phone Number"
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
                  placeholder="Enter Friend's Father's Name"
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
                  <option value="" disabled>
                    Select District
                  </option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred Course</Form.Label>
                <Form.Control
                  type="text"
                  name="preferredCourse"
                  value={formData.preferredCourse}
                  onChange={handleChange}
                  placeholder="Enter Preferred Course"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Preferred College</Form.Label>
                <Form.Control
                  as="select"
                  name="preferredCollege"
                  value={formData.preferredCollege}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select College
                  </option>
                  {colleges.map((college, index) => (
                    <option key={index} value={college}>
                      {college}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            <Button
              variant="primary"
              type="submit"
              className="refer-modal-submit-btn mt-3"
              disabled={loading}
            >
              {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReferModal;
