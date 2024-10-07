import React, { useState } from 'react';

const CardSlide = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      let newIndex = prev + n;
      if (newIndex > slides.length) return 1;
      if (newIndex < 1) return slides.length;
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const slides = [
    {
      img: 'https://www.picsum.photos/300',
      caption: 'Caption Text',
    },
    {
      img: 'https://www.picsum.photos/300',
      caption: 'Caption Two',
    },
    {
      img: 'https://www.picsum.photos/300',
      caption: 'Caption Three',
    },
  ];

  return (
    <div className="relative max-w-2xl mx-auto">
      {slides.map((slide, index) => (
        <div
          className={`mySlides fade ${slideIndex === index + 1 ? 'block' : 'hidden'}`}
          key={index}
        >
          <div className="absolute top-0 left-0 text-white p-2 bg-black bg-opacity-50">
            {index + 1} / {slides.length}
          </div>
          <img src={slide.img} className="w-full" alt={`Slide ${index + 1}`} />
          <div className="absolute bottom-0 left-0 right-0 text-white p-2 bg-black bg-opacity-50">
            {slide.caption}
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-r"
        onClick={() => plusSlides(-1)}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-l"
        onClick={() => plusSlides(1)}
      >
        ❯
      </button>
      <div className="text-center mt-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`inline-block h-3 w-3 mx-1 rounded-full cursor-pointer ${slideIndex === index + 1 ? 'bg-gray-700' : 'bg-gray-300'}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardSlide;
