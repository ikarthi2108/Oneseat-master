import React, { useState } from "react";
import { Modal, Form, Button, Spinner, Row, Col } from "react-bootstrap";
import AWS from "aws-sdk";
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

  const [idProof, setIdProof] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);

  const districts = ["District 1", "District 2", "District 3"];
  const colleges = ["College 1", "College 2", "College 3"];

  // AWS S3 Configuration
  const S3_BUCKET = "proofdetailbucket";
  const REGION = "eu-north-1";
  AWS.config.update({
    accessKeyId: "AKIAYXWBNTK32CBUX6EE", // Replace with your Access Key
    secretAccessKey: "c4DxXGmZFDd15BOJGdiBpLhirI1rJpR65CVeXzQC", // Replace with your Secret Key
    region: REGION,
  });

  const s3 = new AWS.S3();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setIdProof(e.target.files[0]);
  };

  const uploadFileToS3 = async () => {
    return new Promise((resolve, reject) => {
      const fileName = `${Date.now()}_${idProof.name}`;
      const params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Body: idProof,
        ContentType: idProof.type,
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error("Error uploading file:", err);
          reject(err);
        } else {
          console.log("File uploaded successfully:", data.Location);
          resolve(data.Location);
        }
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let idProofUrl = "Not Provided";

      if (idProof) {
        toast.info("Uploading ID Proof...");
        idProofUrl = await uploadFileToS3();
        setFileUrl(idProofUrl);
        toast.success("File uploaded successfully!");
      }

      const serviceID = "service_gjlqobt";
      const templateID = "template_igkbdih";
      const publicKey = "kkbG-uv2B1KZ1WpQj";

      const payload = {
        referrer_name: formData.referrerName || "Not Provided",
        referrer_mobile: formData.referrerMobile || "Not Provided",
        name: formData.name || "Not Provided",
        phone: formData.phone || "Not Provided",
        father_name: formData.fatherName || "Not Provided",
        district: formData.district || "Not Provided",
        preferredCourse: formData.preferredCourse || "Not Provided",
        preferredCollege: formData.preferredCollege || "Not Provided",
        id_proof_url: idProofUrl,
      };

      await emailjs.send(serviceID, templateID, payload, publicKey);

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
      setIdProof(null);
      setFileUrl("");
    } catch (error) {
      toast.error("Failed to submit referral details. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
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
            <Row>
              <Col md={6}>
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
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Referrer's Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="referrerMobile"
                    value={formData.referrerMobile}
                    onChange={handleChange}
                    placeholder="Enter Referrer's Mobile"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Candidate's Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Candidate's Name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Candidate's Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Candidate's Phone"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Father's Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter Father's Name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>District</Form.Label>
                  <Form.Control
                    as="select"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Preferred Course</Form.Label>
                  <Form.Control
                    type="text"
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    placeholder="Enter Preferred Course"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Preferred College</Form.Label>
                  <Form.Control
                    as="select"
                    name="preferredCollege"
                    value={formData.preferredCollege}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select College</option>
                    {colleges.map((college, index) => (
                      <option key={index} value={college}>
                        {college}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group>
              <Form.Label>Upload ID Proof</Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                required
              />
              {fileUploading && <Spinner animation="border" size="sm" className="ml-2" />}
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="refer-modal-submit-btn mt-3"
              disabled={loading || fileUploading}
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
