'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = [
  {
    src: 'https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-118763.jpg?t=st=1743590750~exp=1743594350~hmac=1673ee85694de382161dfed966716a05331b52215ae78409bdb7c81f642c8c2e&w=1380',
    caption: 'Discover the Latest Trends',
  },
  {
    src: 'https://img.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_1258-126800.jpg?t=st=1743590918~exp=1743594518~hmac=d7800b3d7b1a663ce1c6203d21fe782f35d9a9247e3c68c4c6bf62e101bb2696&w=1380',
    caption: 'Best Deals on Your Favorite Styles',
  },
  {
    src: 'https://img.freepik.com/free-photo/young-asia-lady-with-positive-expression-smile-broadly-dressed-casual-clothing-isolated-blue-background-happy-adorable-glad-woman-rejoices-success-panoramic-banner-background-with-copy-space_7861-2714.jpg?t=st=1743590957~exp=1743594557~hmac=0edf3efcb87262843e1489e92726158d2d0ad87cde21ac7a85c29f92f06d7f04&w=1380',
    caption: 'Shop Now & Upgrade Your Wardrobe',
  },
];

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  overflow: hidden;
`;
const SliderWrapper = styled.div<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.index * -100}%);
`;
const Slide = styled.div`
  min-width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const OverlayContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: lightgray;
  }
`;
const PrevButton = styled(Button)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;

const NextButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <CarouselContainer>
      <SliderWrapper index={currentIndex}>
        {images.map((src, index) => (
          <Slide key={index}>
            <Image src={images[currentIndex].src} alt={`Slide ${index + 1}`} />
          </Slide>
        ))}
      </SliderWrapper>
      <OverlayContainer>
        <Subtitle>T-Shirt / Tops</Subtitle>
        <Title>{images[currentIndex].caption}</Title>
        <Description>cool / colorful / comfy</Description>
        <Button>Shop Now</Button>
      </OverlayContainer>
      <PrevButton onClick={prevSlide}>◀</PrevButton>
      <NextButton onClick={nextSlide}>▶</NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
