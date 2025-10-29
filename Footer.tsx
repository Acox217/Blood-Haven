import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/design.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center text-md-left">
          <Col md={4} className="mb-4 mb-md-0">
            <h4>Blood Haven</h4>
            <p>Empowering communities through lifesaving donations.</p>
            <p>Every drop counts. Join our mission today.</p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/donor-registration">Become a Donor</Link></li>
              <li><Link to="/blood-request">Request Blood</Link></li>
              <li><Link to="/donor-finder">Find Donors</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span role="img" aria-label="Facebook">📱</span></a>
              <a href="#" aria-label="Twitter"><span role="img" aria-label="Twitter">📞</span></a>
              <a href="#" aria-label="Instagram"><span role="img" aria-label="Instagram">📧</span></a>
            </div>
            <p className="mt-3">
              <Link to="/contact">support@bloodhaven.org</Link><br />
              (123) 456-7890
            </p>
          </Col>
        </Row>
        
        <hr style={{ background: 'rgba(255,255,255,0.2)', margin: '2rem 0' }} />
        
        <Row className="text-center">
          <Col>
            <p><Link to="https://www.who.int/news-room/fact-sheets/detail/blood-safety-and-availability" className="WHOinfo">More Information from the World Health Organization</Link></p>
            <p>© 2025 Blood Haven. All Rights Reserved.</p>
            <div>
              <Link to="/privacy-policy">Privacy Policy</Link> | 
              <Link to="/terms-of-service"> Terms of Service</Link> | 
              <Link to="/contact-support"> Contact Support</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;