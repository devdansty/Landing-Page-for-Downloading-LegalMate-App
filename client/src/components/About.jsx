import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Users } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Users size={32} color="var(--primary)" />,
      title: "For the Common Citizen",
      desc: "Legal concepts translated into simple language. Easily understand your rights and procedures without legal jargon."
    },
    {
      icon: <ShieldCheck size={32} color="var(--primary)" />,
      title: "Trusted & Secure",
      desc: "Built with privacy in mind. Your data and legal queries remain confidential and secure at all times."
    },
    {
      icon: <Scale size={32} color="var(--primary)" />,
      title: "For Legal Professionals",
      desc: "Lawyers can connect with potential clients and streamline document drafting with AI assistance."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What is LegalMate?
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            LegalMate bridges the gap between complex legal systems and everyday people. We provide an accessible platform for both laymen and lawyers.
          </motion.p>
        </div>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.div 
              className="card about-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="about-icon-wrapper">
                {card.icon}
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
