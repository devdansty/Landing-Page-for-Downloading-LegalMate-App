import React from 'react';
import { motion } from 'framer-motion';
import { Download as DownloadIcon, Apple, CheckCircle } from 'lucide-react';
import { QRCodeCanvas } from 'qrcode.react';
import { IOSDownloadModal } from './Modal';
import './Download.css';

const Download = () => {
  const [isIOSModalOpen, setIsIOSModalOpen] = React.useState(false);
  const downloadUrl = "http://localhost:5000/api/download/apk";

  return (
    <section className="download" id="download">
      <div className="container">
        <div className="download-wrapper">
          <motion.div 
            className="download-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="download-title">Get LegalMate Today</h2>
            <p className="download-desc">
              Experience the future of legal assistance. Download the Android APK directly or join our iOS beta to start resolving your legal matters instantly.
            </p>
            
            <ul className="download-benefits">
              <li><CheckCircle size={20} className="text-primary" /> Free to download and use</li>
              <li><CheckCircle size={20} className="text-primary" /> No hidden subscriptions for basic features</li>
              <li><CheckCircle size={20} className="text-primary" /> Instant access to AI assistance</li>
            </ul>

            <div className="download-buttons">
              <a href={downloadUrl} className="btn btn-primary btn-lg pulse-button">
                <DownloadIcon size={22} />
                Download Android APK
              </a>
              <button 
                className="btn btn-coming-soon btn-lg"
                onClick={() => setIsIOSModalOpen(true)}
              >
                <Apple size={22} />
                iOS Download
                <span className="coming-soon-badge">Coming Soon</span>
              </button>
            </div>
            <p className="install-note">
              * Android: Direct download. iOS: Available via TestFlight.
            </p>
          </motion.div>
          
          <motion.div 
            className="download-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="qr-placeholder">
              <div className="qr-container">
                <QRCodeCanvas 
                  value={downloadUrl} 
                  size={180}
                  level={"H"}
                  includeMargin={true}
                  imageSettings={{
                    src: "/favicon.ico", // Placeholder logo
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </div>
              <p>Scan to download Android APK directly</p>
            </div>
          </motion.div>
        </div>
      </div>

      <IOSDownloadModal 
        isOpen={isIOSModalOpen} 
        onClose={() => setIsIOSModalOpen(false)} 
      />
    </section>
  );
};

export default Download;
