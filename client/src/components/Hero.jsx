import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple } from 'lucide-react';
// import { IOSDownloadModal } from './Modal';
import './Hero.css';

const Hero = () => {
  // const [isIOSModalOpen, setIsIOSModalOpen] = React.useState(false);

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Legal Assistant <br/>
            <span className="text-primary">for Everyone</span>
          </motion.h1>
          
          <motion.div 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="hero-subtitle">
              Empowering Pakistani citizens and lawyers with simplified legal guidance, AI document generation, and professional connections.
            </p>
            <p className="hero-text">
              LegalMate is Pakistan's first comprehensive AI-driven legal companion designed to bridge the gap between complex law and the common man. Whether you need to understand your rights, draft professional legal documents in seconds, or find verified lawyers nearby, our platform provides accessible, accurate, and instant solutions tailored to the Pakistani legal framework.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/api/download" className="btn btn-primary btn-lg pulse-button">
              <Download size={20} />
              Download APK
            </a>
            <button 
              className="btn btn-coming-soon btn-lg"
              type="button"
            >
              <Apple size={20} />
              iOS Download
              <span className="coming-soon-badge">Coming Soon</span>
            </button>
          </motion.div>
          <motion.p 
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            * Direct download for Android devices. iOS coming soon.
          </motion.p>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-header">
                <div className="app-logo">LegalMate</div>
              </div>
              <div className="app-chat">
                <div className="chat-bubble ai">Hello! How can I help you with your legal matters today?</div>
                <div className="chat-bubble user">I need to draft a rent agreement.</div>
                <div className="chat-bubble ai generating">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>


    </section>
  );
};

export default Hero;
