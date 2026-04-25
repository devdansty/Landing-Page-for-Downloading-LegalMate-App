import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple } from 'lucide-react';
import { IOSDownloadModal } from './Modal';
import './Hero.css';

const Hero = () => {
  const [isIOSModalOpen, setIsIOSModalOpen] = React.useState(false);

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
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering Pakistani citizens and lawyers with simplified legal guidance, AI document generation, and professional connections.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="http://localhost:5000/api/download/apk" className="btn btn-primary btn-lg">
              <Download size={20} />
              Download APK
            </a>
            <button 
              className="btn btn-secondary btn-lg" 
              onClick={() => setIsIOSModalOpen(true)}
            >
              <Apple size={20} />
              iOS Download
            </button>
          </motion.div>
          <motion.p 
            className="hero-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            * Direct download for Android devices
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

      <IOSDownloadModal 
        isOpen={isIOSModalOpen} 
        onClose={() => setIsIOSModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
