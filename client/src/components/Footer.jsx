import React from 'react';
import { Scale } from 'lucide-react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo footer-logo">
              <Scale size={28} color="var(--primary)" />
              <span>LegalMate</span>
            </a>
            <p className="footer-desc">
              AI Legal Assistant for Everyone. Empowering citizens and lawyers with simple, accessible legal help.
            </p>
            <div className="footer-social">
              <a href="#"><FiFacebook size={20} /></a>
              <a href="#"><FiTwitter size={20} /></a>
              <a href="#"><FiInstagram size={20} /></a>
              <a href="#"><FiLinkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Disclaimer</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LegalMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
