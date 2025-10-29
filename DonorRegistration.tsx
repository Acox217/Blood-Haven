import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const DonorRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodType: "",
    email: "",
    phone: "",
    address: "",
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for registering as a donor!");
    // Reset form
    setFormData({
      name: "",
      age: "",
      bloodType: "",
      email: "",
      phone: "",
      address: "",
      consent: false
    });
  };

  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h1 style={{ color: 'var(--primary-color)' }}>Become a Donor</h1>
                <h5 className="text-muted">Ready to Save Lives? Join Our Donor Network.</h5>
              </div>

              <div className="mb-4">
                <h4>Why Register?</h4>
                <ul>
                  <li>Help save lives in your community</li>
                  <li>Get notified when your blood type is urgently needed</li>
                  <li>Track your impact on others' lives</li>
                </ul>
              </div>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Your age"
                        min="18"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Blood Type</Form.Label>
                      <Form.Select 
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          bloodType: e.target.value
                        }))}
                        required
                      >
                        <option value="">Select Blood Type</option>
                        {bloodTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Your address"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className="custom-checkbox-wrapper d-flex align-items-center">
                    <Form.Check
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      id="consent-checkbox"
                      aria-label="Consent checkbox"
                      className="me-2" // Add margin to the right of the checkbox
                    />
                    <Form.Label 
                      htmlFor="consent-checkbox" 
                      className="mb-0 text-muted consent-text"
                      style={{ 
                        opacity: 0.8,  // Makes the text slightly transparent
                        fontSize: '0.9rem'  // Makes the text slightly smaller
                      }}
                    >
                      I consent to be contacted when my blood type is needed
                    </Form.Label>
                  </div>
                </Form.Group>

                <div className="d-grid">
                  <Button 
                    type="submit" 
                    style={{ 
                      backgroundColor: 'var(--primary-color)', 
                      border: 'none',
                      padding: '0.75rem'
                    }}
                  >
                    Submit Registration
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DonorRegistration;