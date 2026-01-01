// ScrollProgress.jsx
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" top-0 right-0 z-50 flex items- gap-6">
    

      {/* Progress Circle */}
      <div style={{ width: '36px', height: '42px' }}>
        <CircularProgressbar
          value={scrollProgress}
          text={`${Math.round(scrollProgress)}%`}
          styles={buildStyles({
            pathColor: '#7910ea',
            textColor: '#523000',
            trailColor: '#c9b69c',
            pathTransitionDuration: 0.4,
            strokeLinecap: 'round',
            textSize: '20px',
          })}
          strokeWidth={8}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;