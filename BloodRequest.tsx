import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

const BloodRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    hospitalName: "",
    bloodType: "",
    urgency: "Within 24 Hours",
    contactInfo: "",
    additionalNotes: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log("Blood request submitted:", formData);
      setSubmitted(true);
      setError("");
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          age: "",
          hospitalName: "",
          bloodType: "",
          urgency: "Within 24 Hours",
          contactInfo: "",
          additionalNotes: ""
        });
      }, 3000);
    } catch (err) {
      setError("There was an error submitting your request. Please try again.");
    }
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h1 style={{ color: 'var(--primary-color)' }}>Need Blood?</h1>
          <h3 className="mb-4">We're Here for You</h3>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg={7} xl={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              {submitted && (
                <Alert variant="success" className="mb-4">
                  Your blood request has been submitted successfully! Our team will process it immediately.
                </Alert>
              )}
              
              {error && (
                <Alert variant="danger" className="mb-4">
                  {error}
                </Alert>
              )}
              
              <div className="mb-4">
                <h4>How We Help</h4>
                <ul>
                  <li>We match your request with available donors immediately</li>
                  <li>Priority system ensures the most urgent needs are addressed first</li>
                  <li>Notifications are sent directly to potential donors and hospitals</li>
                </ul>
              </div>
              
              <h4 className="mb-3">Request Form</h4>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Age"
                        min="0"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Hospital Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="hospitalName"
                    value={formData.hospitalName}
                    onChange={handleChange}
                    placeholder="Enter hospital name"
                    required
                  />
                </Form.Group>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Required Blood Type</Form.Label>
                      <Form.Select
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Blood Type</option>
                        {bloodTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Urgency Level</Form.Label>
                      <Form.Select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        required
                      >
                        <option value="Emergency">Emergency</option>
                        <option value="Within 24 Hours">Within 24 Hours</option>
                        <option value="Routine">Routine</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Contact Information</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactInfo"
                    value={formData.contactInfo}
                    onChange={handleChange}
                    placeholder="Email / Phone"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Additional Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    placeholder="Any additional information that might be helpful"
                  />
                </Form.Group>
                
                <div className="d-grid">
                  <Button 
                    type="submit" 
                    style={{ 
                      backgroundColor: 'var(--primary-color)', 
                      border: 'none',
                      padding: '0.75rem'
                    }}
                    disabled={submitted}
                  >
                    {submitted ? "Processing..." : "Submit Request"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={5} xl={4} className="mt-4 mt-lg-0">
          <Card className="shadow" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <Card.Body className="p-4">
              <h4 className="border-bottom pb-2 mb-3">Emergency?</h4>
              <p>For life-threatening emergencies, please call:</p>
              <h3 className="mb-4">911</h3>
              
              <h4 className="border-bottom pb-2 mb-3">Urgent Helpline</h4>
              <p>Our emergency blood request hotline:</p>
              <h3 className="mb-4">(555) 123-4567</h3>
              
              <div className="mt-4 pt-3 border-top">
                <h5>Blood Type Compatibility</h5>
                <p className="mb-2">If you need:</p>
                <ul className="list-unstyled">
                  <li>👉 O- can receive: <strong>O- only</strong></li>
                  <li>👉 O+ can receive: <strong>O+, O-</strong></li>
                  <li>👉 A- can receive: <strong>A-, O-</strong></li>
                  <li>👉 A+ can receive: <strong>A+, A-, O+, O-</strong></li>
                  <li>👉 B- can receive: <strong>B-, O-</strong></li>
                  <li>👉 B+ can receive: <strong>B+, B-, O+, O-</strong></li>
                  <li>👉 AB- can receive: <strong>AB-, A-, B-, O-</strong></li>
                  <li>👉 AB+ can receive: <strong>ALL types</strong></li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BloodRequest;