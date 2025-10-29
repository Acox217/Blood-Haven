import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setIsLoggingIn(true);
    
    // Login process
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show error for empty fields or success
      if (!email || !password) {
        setLoginError("Please enter both email and password.");
      } else {
        // Success
        console.log("Login successful", { email, password, rememberMe });
      }
    } catch (error) {
      setLoginError("An error occurred during login. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card className="shadow">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <h1 style={{ color: 'var(--primary-color)' }}>Login</h1>
                <p className="text-muted">Sign in to your Blood Haven account</p>
              </div>
              
              {loginError && (
                <Alert variant="danger" className="mb-4">
                  {loginError}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="custom-checkbox-wrapper d-flex align-items-center">
                      <Form.Check 
                        type="checkbox" 
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        aria-label="Remember me checkbox"
                        className="me-2"
                      />
                      <Form.Label 
                        htmlFor="remember-me" 
                        className="mb-0 consent-text"
                      >
                        Remember me
                      </Form.Label>
                    </div>
                    <Link to="/forgot-password" className="text-decoration-none">
                      Forgot password?
                    </Link>
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
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
                
                <div className="text-center">
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="text-decoration-none">
                      Register now
                    </Link>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
          
          <div className="text-center mt-4">
            <p>
              <Link to="/terms-of-service" className="text-decoration-none mx-2">
                Terms of Service
              </Link>
              <span className="text-muted">|</span>
              <Link to="/privacy-policy" className="text-decoration-none mx-2">
                Privacy Policy
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;