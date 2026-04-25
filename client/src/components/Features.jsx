import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Languages, Zap, Users, ScanText } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <Bot size={28} />,
      title: "AI Legal Assistant",
      desc: "Ask any legal questions and get instant, accurate answers based on Pakistani law."
    },
    {
      icon: <FileText size={28} />,
      title: "Document Generator",
      desc: "Create standard legal documents like rent agreements, affidavits, and notices in minutes."
    },
    {
      icon: <Users size={28} />,
      title: "Lawyer Connection",
      desc: "Connect directly with verified lawyers through the app dashboard for consultation and guidance."
    },
    {
      icon: <ScanText size={28} />, // Added ScanText icon
      title: "Legal Text Scanner",
      desc: "Scan complex legal documents and convert them into simple language using AI."
    },
    {
      icon: <Languages size={28} />,
      title: "Urdu & English Support",
      desc: "Fully accessible in both Urdu and English so everyone can understand their rights."
    },
    {
      icon: <Zap size={28} />,
      title: "Fast & Mobile Friendly",
      desc: "Optimized for mobile devices. Get legal help anytime, anywhere with zero lag."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to navigate the legal landscape effortlessly.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              className="feature-item"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
