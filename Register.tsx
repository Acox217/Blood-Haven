import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState<{
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear related errors when field changes
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof typeof errors];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};
    
    // Password validation
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsRegistering(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Registration successful", formData);
      setRegistered(true);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false
      });
    } catch (error) {
      setErrors({
        general: "An error occurred during registration. Please try again."
      });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h1 style={{ color: 'var(--primary-color)' }}>Create an Account</h1>
                <p className="text-muted">Join Blood Haven and help save lives</p>
              </div>
              
              {registered && (
                <Alert variant="success" className="mb-4">
                  <Alert.Heading>Registration Successful!</Alert.Heading>
                  <p>Your account has been created. Please check your email for verification instructions.</p>
                  <div className="d-flex justify-content-end">
                    <Link to="/login" className="btn btn-outline-success">
                      Proceed to Login
                    </Link>
                  </div>
                </Alert>
              )}
              
              {errors.general && (
                <Alert variant="danger" className="mb-4">
                  {errors.general}
                </Alert>
              )}
              
              {!registered && (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name" 
                          required
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name" 
                          required
                        />
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
                      placeholder="Enter your email" 
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a password" 
                      required
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      Password must be at least 8 characters long.
                    </Form.Text>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password" 
                      required
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <div className="custom-checkbox-wrapper d-flex align-items-start">
                      <Form.Check
                        type="checkbox"
                        id="terms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        required
                        aria-label="Accept terms checkbox"
                        className="me-2"
                        style={{ marginTop: '2px' }}
                      />
                      <Form.Label 
                        htmlFor="terms" 
                        className="mb-0 consent-text"
                        style={{ marginTop: '3.5px' }}
                      >
                        I agree to the{' '}
                        <Link to="/terms-of-service" className="text-decoration-none">
                          Terms of Service
                        </Link>
                        {' '}and{' '}
                        <Link to="/privacy-policy" className="text-decoration-none">
                          Privacy Policy
                        </Link>
                      </Form.Label>
                    </div>
                  </Form.Group>
                  
                  <div className="d-grid mb-4">
                    <Button 
                      type="submit" 
                      style={{ 
                        backgroundColor: 'var(--primary-color)', 
                        border: 'none',
                        padding: '0.75rem'
                      }}
                      disabled={isRegistering || !formData.acceptTerms}
                      >
                      {isRegistering ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                  
                  <div className="text-center">
                    <p>
                      Already have an account?{' '}
                      <Link to="/login" className="text-decoration-none">
                        Login here
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;