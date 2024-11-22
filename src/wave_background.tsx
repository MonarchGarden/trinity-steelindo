import React from 'react';
import {motion} from 'framer-motion';

export default function WaveBackground() {
  const waveVariants = {
    animate: {
      d: [
        // Keyframes for the morphing wave path
        'M0,60 C300,120 600,0 900,60 C1200,120 1500,0 1800,60 L1800,120 L0,120 Z', // Wave 1
        'M0,80 C300,0 600,120 900,80 C1200,0 1500,120 1800,80 L1800,120 L0,120 Z', // Wave 2
        'M0,40 C300,80 600,20 900,40 C1200,80 1500,20 1800,40 L1800,120 L0,120 Z', // Wave 3
      ],
      transition: {
        duration: 6, // Total time for morphing animation
        ease: 'ease-in-out',
        repeat: Infinity, // Loop indefinitely
      },
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 120"
        style={{position: 'absolute', top: 0, width: '100%'}}
        preserveAspectRatio="none">
        <motion.path
          fill="#ffffff"
          opacity="0.6"
          variants={waveVariants}
          animate="animate"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 120"
        style={{position: 'absolute', top: 0, width: '100%'}}
        preserveAspectRatio="none">
        <motion.path
          fill="#ffffff"
          opacity="0.4"
          variants={waveVariants}
          animate="animate"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 120"
        style={{position: 'absolute', top: 0, width: '100%'}}
        preserveAspectRatio="none">
        <motion.path
          fill="#ffffff"
          opacity="0.2"
          variants={waveVariants}
          animate="animate"
        />
      </svg>
    </div>
  );
}
