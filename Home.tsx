// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/design.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      {/* Landing Page Section */}
      <header className="cool-home-header">
        <div className="header-content">
          <div className="header-overlay">
            <div className="header-text-container">
              <h1 className="animate-fade-in">Blood Haven</h1>
              <h2 className="tagline animate-fade-in-delay">Your Life, Your Blood, Your Call</h2>
              <p className="sub-tagline animate-fade-in-delay-2"style={{ color: 'rgba(64, 0, 0, 0.9)'}}>Every drop counts. Join our mission to save lives today.</p>
              
              <div className="home-buttons animate-fade-in-delay-3">
                <Link to="/blood-request" className="btn btn-secondary btn-lg pulse-button">Request Blood</Link>
                <Link to="/donor-registration" className="btn btn-outline btn-lg glow-button" style={{ color: 'rgba(64, 0, 0, 0.9)', borderColor: 'rgba(64, 0, 0, 0.9)' }}>Become a Donor</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>
      
      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-number">1 = 3</div>
          <div className="stat-label">One donation saves three lives</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">2s</div>
          <div className="stat-label">Someone needs blood every 2 seconds</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">30m</div>
          <div className="stat-label">Average donation time in minutes</div>
        </div>
      </div>

      <main>
        {/* Feature Cards Section */}
        <section className="feature-section">
          <div className="card feature-card">
            <div className="card-icon">❤️</div>
            <h3 className="card-title">Why Donate?</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
              <li>Blood donations save millions of lives each year</li>
              <li>Your single donation can help up to three different patients</li>
              <li>There's no substitute for human blood — every contribution matters</li>
            </ul>
          </div>

          <div className="card feature-card">
            <div className="card-icon">🔄</div>
            <h3 className="card-title">How it Works</h3>
            <ol style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
              <li>Register easily online</li>
              <li>Schedule your donation appointment</li>
              <li>Donate at a local center or mobile drive</li>
              <li>Get updates when your blood helps someone</li>
            </ol>
          </div>

          <div className="card feature-card">
            <div className="card-icon">🏥</div>
            <h3 className="card-title">Need Blood?</h3>
            <ul style={{ textAlign: 'left', paddingLeft: '1.5rem' }}>
              <li>Simple request form for patients and hospitals</li>
              <li>Real-time connection with available donors</li>
              <li>Priority system for emergencies</li>
              <li>Fast, secure, and confidential service</li>
            </ul>
          </div>
        </section>

        {/* Join the Mission */}
        <section className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Ready to Make a Difference?</h2>
          <p>Your contribution can save lives in your community today.</p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link to="/donor-registration" className="btn btn-primary btn-lg">Join Our Donor Network</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;