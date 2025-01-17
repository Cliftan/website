import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <section className="about">
        <h2>About Me</h2>
        <p>I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies.</p>
        <p>Currently pursuing a degree in Computer Science, I aim to innovate in tech through creative solutions.</p>
      </section>
    </motion.div>
  );
};

export default About;