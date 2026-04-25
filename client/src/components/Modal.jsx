import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Info } from 'lucide-react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div 
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="modal-header">
              <h3>{title}</h3>
              <button className="modal-close" onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-content">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const IOSDownloadModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Install LegalMate on iOS">
      <div className="ios-modal-body">
        <div className="info-banner">
          <Info size={20} />
          <p>LegalMate for iOS is currently available via <strong>Apple TestFlight</strong>.</p>
        </div>
        
        <ol className="install-steps">
          <li>
            <span className="step-num">1</span>
            <p>Download the <strong>TestFlight</strong> app from the App Store.</p>
          </li>
          <li>
            <span className="step-num">2</span>
            <p>Click the invitation link below to join the LegalMate beta program.</p>
          </li>
          <li>
            <span className="step-num">3</span>
            <p>Install LegalMate and start using it!</p>
          </li>
        </ol>

        <a 
          href="https://testflight.apple.com/join/your-placeholder-id" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary testflight-btn"
        >
          <ExternalLink size={20} />
          Join TestFlight Beta
        </a>
        
        <p className="modal-note">
          * Stable App Store release coming soon.
        </p>
      </div>
    </Modal>
  );
};

export default Modal;
