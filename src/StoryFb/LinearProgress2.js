import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';

const stories = [
  { id: 1, duration: 5000 }, // Story 1 with a duration of 5 seconds
  { id: 2, duration: 3000 }, // Story 2 with a duration of 3 seconds
  { id: 3, duration: 4000 }, // Story 3 with a duration of 4 seconds
];

function LinearProgressComponent() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const currentStory = stories[currentStoryIndex];
  const [storyProgress, setStoryProgress] = useState(0);
  const progressInterval = 10; // Progress interval in milliseconds (10 milliseconds)

  useEffect(() => {
    const storyInterval = setInterval(() => {
      if (storyProgress >= 100) {
        clearInterval(storyInterval);
        if (currentStoryIndex < stories.length - 1) {
          setCurrentStoryIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setStoryProgress((prevProgress) => prevProgress + (100 / currentStory.duration) * progressInterval);
      }
    }, progressInterval);

    return () => {
      clearInterval(storyInterval);
    };
  }, [currentStoryIndex]);

  return (
    <div>
      <h1>Story {currentStory.id}</h1>
      <LinearProgress variant="determinate" value={storyProgress} />
    </div>
  );
}

export default LinearProgressComponent;