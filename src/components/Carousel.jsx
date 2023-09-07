import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-fit overflow-hidden h-full grid place-items-center mx-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`relative h-96 transition-transform duration-500 ${index !== currentIndex ? 'translate-x-full' : ''}`}
        />
      ))}

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

export default Carousel;