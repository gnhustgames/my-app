import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';

const slides = [
  { id: 1, image: 'slide1.jpg' },
  { id: 2, image: 'slide2.jpg' },
  { id: 3, image: 'slide3.jpg' },
  { id: 4, image: 'slide4.jpg' },
];

function LinearProgressComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = slides.length - 1;
  const transitionTime = 5000; // Transition time in milliseconds (3 seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (maxSlide + 1));
    }, transitionTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <img src={slides[currentSlide].image} alt={`Slide ${slides[currentSlide].id}`} />
      <LinearProgress
      sx={{animationDuration:"5s"}}
        variant="determinate"
        value={(currentSlide / maxSlide) * 100}
        style={{ marginTop: '16px' }}
      />
    </div>
  );
}

export default LinearProgressComponent;