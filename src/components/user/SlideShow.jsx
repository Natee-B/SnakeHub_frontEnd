import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Component สำหรับแต่ละ slide
const WithStyles = ({ image, headline, description }) => (
  <div className="p-4">
    <img src={image} alt={headline} className="w-full h-auto" />
    <h3 className="text-center">{headline}</h3>
    <p className="text-center">{description}</p>
  </div>
);

const MyCarousel = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <WithStyles
        description="Fixing CSS load order/style.chunk.css incorrect in Nextjs"
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <WithStyles
        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
        headline="w3js.com - web front-end studio"
        image="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      {/* เพิ่ม WithStyles อื่น ๆ ตามที่คุณต้องการ */}
    </Carousel>
  );
};

export default MyCarousel;
