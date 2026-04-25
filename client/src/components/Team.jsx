import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FiLinkedin, FiTwitter } from 'react-icons/fi';
import './Team.css';

const Team = () => {
  const team = [
    {
      name: "Sameer Abid",
      role: "Frontend & AI Lead Developer",
      image: "https://ui-avatars.com/api/?name=Sameer+Abid&background=10300C&color=fff&size=150"
    },
    {
      name: "Haroon",
      role: "Engineer",
      image: "https://ui-avatars.com/api/?name=Haroon&background=10300C&color=fff&size=150"
    },
    {
      name: "Sudais",
      role: "Project Head",
      image: "https://ui-avatars.com/api/?name=Sudais&background=10300C&color=fff&size=150"
    }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            The passionate individuals bringing LegalMate to life.
          </motion.p>
        </div>

        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div 
              className="team-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-social">
                  <a href="#"><FiLinkedin size={18} /></a>
                  <a href="#"><FiTwitter size={18} /></a>
                  <a href="#"><Mail size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
