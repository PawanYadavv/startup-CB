import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Jobs by Location</h2>
        <ul>
          <li>Jobs in Bangalore</li>
          <li>Jobs in Delhi / NCR</li>
          <li>Jobs in Hyderabad</li>
          <li>Jobs in Mumbai</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>Jobs by Function</h2>
        <ul>
          <li>Software Engineering Jobs</li>
          <li>Marketing Jobs</li>
          <li>Sales Jobs</li>
          <li>Internship Jobs</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>For Employers</h2>
        <ul>
          <li>Post Your Jobs</li>
          <li>Success Stories</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className="footer-section">
        <h2>CareerBloomers</h2>
        <ul>
          <li>About</li>
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
