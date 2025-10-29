import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <Container className="py-5">
      {/* Header Section */}
      <Row className="mb-5">
        <Col className="text-center">
          <h1 style={{ color: 'var(--primary-color)' }}>About Our Blood Haven</h1>
          <h3 className="mt-3">Our Mission to Save Lives</h3>
        </Col>
      </Row>
      
      {/* Main Content */}
      <Row className="mb-5">
        <Col lg={6} className="mb-4">
          <img 
            src="/about-image.png" 
            alt="Blood donation center" 
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: 'auto' }}
          />
        </Col>
        
        <Col lg={6}>
          <h2>Who We Are</h2>
          <p className="lead">
            Blood Haven is a platform built by students to make blood requesting and donating easier.
          </p>
          <p>
            Our goal is to make blood donation and access easier, faster, and more reliable for everyone. 
            We believe that technology can help solve the persistent problem of blood shortages and improve 
            access to this life-saving resource.
          </p>
          
          <h2 className="mt-4">Why We Exist</h2>
          <p>
            Blood shortages happen every day, affecting patients who need transfusions for surgeries, 
            cancer treatments, chronic illnesses, and traumatic injuries.
          </p>
          <p>
            We bridge the gap between donors and those in urgent need through technology and outreach, 
            creating a community of life-savers ready to help when needed most.
          </p>
        </Col>
      </Row>
      
      {/* Our Commitment Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Our Commitment</h2>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body className="text-center p-4">
              <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>⚡</div>
              <h3>Fast Service</h3>
              <p>
                When medical emergencies strike, time is critical. Our platform enables rapid response 
                for urgent medical needs, connecting donors and recipients efficiently.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body className="text-center p-4">
              <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>🔒</div>
              <h3>Secure &amp; Confidential</h3>
              <p>
                We take data protection seriously, ensuring secure and confidential handling of donor 
                and recipient information throughout the donation process.
              </p>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body className="text-center p-4">
              <div style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>👥</div>
              <h3>Community Driven</h3>
              <p>
                Our platform is powered by everyday heroes like you. We believe in the power of community 
                to solve one of healthcare's most persistent challenges.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Join the Mission */}
      <Row className="my-5">
        <Col className="text-center">
          <Card className="bg-primary text-white p-5 shadow">
            <h2>Join Our Life-Saving Mission Today</h2>
            <p className="lead">
              Whether you're looking to donate blood or need assistance finding a donor, 
              Blood Haven is here to help you make a difference.
            </p>
            <div className="mt-4">
              <a href="/donor-registration" className="btn btn-lg" 
                 style={{ backgroundColor: 'white', color: 'var(--primary-color)', fontWeight: 'bold', marginRight: '1rem' }}>
                Become a Donor
              </a>
              <a href="/blood-request" className="btn btn-lg btn-outline" 
                 style={{ borderColor: 'white', color: 'white' }}>
                Request Blood
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;