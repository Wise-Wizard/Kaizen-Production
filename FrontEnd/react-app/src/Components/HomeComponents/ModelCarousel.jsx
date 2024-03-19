import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./ModelCarousel.css";

const ModelCarousel = () => {
  const products = [
    {
      imageUrl:
        "https://res.cloudinary.com/dzyevjbmh/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709970436/Kaizen/IMG_5017_z0afbx.jpg?_s=public-apps",
    },
  ];

  return (
    <Carousel interval={3000} indicators={false} touch>
      {products.map((product, index) => (
        <Carousel.Item key={index}>
          <div className="main_Image">
            <img src={product.imageUrl} alt={`Model ${index + 1}`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ModelCarousel;
