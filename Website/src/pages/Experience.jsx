import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="Experience">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default Experience;