import React, { useState, useEffect, useRef } from 'react';

const CarouselVideos = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.volume = 0.5; // 50% volume
      }
    });
  }, [videos]);

  const pauseCurrentVideo = () => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.pause();
    }
  };

  return (
    <div className="relative overflow-hidden h-full grid place-items-center mx-auto w-auto">
      <div 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} 
        className="flex transition-transform duration-500"
      >
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            controls // optional, displays video controls
            muted    // optional, mutes the video by default
            ref={el => videoRefs.current[index] = el}  // optional, tunes volume down by default
            className="relative h-96 w-auto"
            preload="metadata" // only loads video metadata by default, not the entire video
          />
        ))}
      </div>

      <button
        className="absolute left-0 z-10 p-4"
        onClick={() => {
            pauseCurrentVideo();
            setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1))}
        }
      >
        {'<'}
      </button>

      <button
        className="absolute right-0 z-10 p-4"
        onClick={() => {
            pauseCurrentVideo();
            setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1))}
        }
      >
        {'>'}
      </button>
    </div>
  );
};

export default CarouselVideos;