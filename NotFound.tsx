import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Container className="py-5 text-center">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="my-5">
            <h1 style={{ fontSize: '6rem', color: 'var(--primary-color)' }}>404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            
            <div className="mb-5">
              <p className="lead">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              <p>
                Please check the URL or navigate back to our homepage.
              </p>
            </div>
            
            <div className="mb-4 d-flex justify-content-center gap-3">
              <Button 
                as={Link} 
                to="/"
                style={{ 
                  backgroundColor: 'var(--primary-color)', 
                  border: 'none',
                  padding: '0.75rem 1.5rem'
                }}
              >
                Go to Homepage
              </Button>
              
              <Button 
                as={Link} 
                to="/contact"
                variant="outline-secondary"
                style={{ padding: '0.75rem 1.5rem' }}
              >
                Contact Support
              </Button>
            </div>
          </div>
          
          <div className="mt-5">
            <h3 className="mb-4">Suggested Pages</h3>
            <Row className="justify-content-center">
              <Col xs={6} md={4}>
                <Link to="/donor-registration" className="text-decoration-none">
                  <div className="p-3 mb-3" style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    borderRadius: 'var(--radius-sm)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}>
                    Become a Donor
                  </div>
                </Link>
              </Col>
              
              <Col xs={6} md={4}>
                <Link to="/blood-request" className="text-decoration-none">
                  <div className="p-3 mb-3" style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    borderRadius: 'var(--radius-sm)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}>
                    Request Blood
                  </div>
                </Link>
              </Col>
              
              <Col xs={6} md={4}>
                <Link to="/donor-finder" className="text-decoration-none">
                  <div className="p-3 mb-3" style={{ 
                    backgroundColor: 'var(--card-bg)', 
                    borderRadius: 'var(--radius-sm)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}>
                    Find Donors
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;