import React, { useState, useEffect } from 'react';

const CarouselImages = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative overflow-hidden h-full grid place-items-center mx-auto w-auto">
      <div 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        className="flex transition-transform duration-500"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="relative h-96 w-auto"
          />
        ))}
      </div>

      <button
        className="absolute left-0 z-10 p-4"
        onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
      >
        {'<'}
      </button>

      <button
        className="absolute right-0 z-10 p-4"
        onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
      >
        {'>'}
      </button>
    </div>
  );
};

export default CarouselImages;