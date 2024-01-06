import React, { useState, useEffect } from 'react';
import './SlideShow.css';
const Slideshow = ({ imageUrls}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
     
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [imageUrls]);

  return (
    <img
      src={imageUrls[currentImageIndex]}
      alt={`Slideshow Image ${currentImageIndex + 1}`}
      className="slideshow-image"
    />
  );
};

export default Slideshow;
