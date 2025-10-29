import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from '../styles/ThemeContext';
import '../styles/design.css';

const BloodHavenNavbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  // Choose logo
  const logoPath = theme === 'dark' ? '/logo.png' : '/logo.png';

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-navbar"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand d-flex align-items-center">
          <img 
            src={logoPath}
            alt="Blood Haven Logo"
            height="30"
            className="me-2"
          />
          Blood Haven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/donor-finder" className="nav-link" onClick={() => setExpanded(false)}>Find Donors</Nav.Link>
            <Nav.Link as={Link} to="/donor-registration" className="nav-link" onClick={() => setExpanded(false)}>Become a Donor</Nav.Link>
            <Nav.Link as={Link} to="/blood-request" className="nav-link" onClick={() => setExpanded(false)}>Request Blood</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link" onClick={() => setExpanded(false)}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/register" className="btn btn-outline" style={{ marginRight: '0.5rem' }} onClick={() => setExpanded(false)}>Register</Nav.Link>
            <Nav.Link as={Link} to="/login" className="btn btn-primary" onClick={() => setExpanded(false)}>Login</Nav.Link>
            
            <div className="theme-toggle-wrapper">
              <label className="theme-switch">
                <input 
                  type="checkbox" 
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BloodHavenNavbar;