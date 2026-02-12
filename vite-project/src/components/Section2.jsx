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
        <h2 className="typewriter">Charting New Territories</h2>
        <p className="section2-text">
          I still can’t believe we randomly crossed paths on Instagram of all places. I mean… what are the odds? I sent that “let’s see if she even replies” message with zero expectations… and then you actually replied. I’m not saying it was fate, but Instagram algorithm deserves a thank you card.
          And now here we are… talking, laughing, sharing random thoughts like we’ve known each other longer than we actually have. Not bad for two strangers who met in the comment section jungle.
          So I was thinking… instead of just being “that guy from Instagram DMs,” how about I upgrade my status and take you out for coffee? I promise I’m slightly more interesting in person… and I don’t leave people on read 😌
          What do you say?
        </p>

      </motion.div>
    </div>
  );
};

export default Section2;
