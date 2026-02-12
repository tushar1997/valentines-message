import React from 'react';
import { motion } from 'framer-motion';
import './Section2.css';
import sectionImage from '../assets/section1.png';

const Section2 = () => {
  return (
    <div className="section2">
      <motion.div
        className="left"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <img src={sectionImage} alt="Visual" />
      </motion.div>

      <motion.div
        className="right"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="typewriter">A Moon Entering my life</h2>
        <p className="section2-text">
          I still can’t believe we randomly crossed paths on Instagram on 16 January 2026. I mean… what are the odds? I sent that random ice breaker “Are you active on ” message with zero expectations… and then you actually replied. I’m not saying it was fate, but Instagram algorithm deserves a thank you card.
          And now here we are… talking, laughing, sharing random thoughts like we’ve known each other longer than we actually have. Not bad for two strangers who met on instagram randomly. Do you even remember our first call? Nahi naa, chalo, i tell you, it was 29 January 2026, 19:19
          So I was thinking… instead of just being “that guy from Instagram DMs,” how about I ask you something &darr;
          What do you say?
        </p>

      </motion.div>
    </div>
  );
};

export default Section2;
