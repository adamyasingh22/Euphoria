'use client';
import styled from 'styled-components';

const images = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/green-leaf-texture-leaf-texture-background_501050-120.jpg?t=st=1743848573~exp=1743852173~hmac=5fd84c346b0335c947d66b4f14ecf3a99d6fdd59d1cf8cf61ce8c6d41a894ef0&w=1380',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/elegant-girls-celebrate-studio_1157-29172.jpg?t=st=1743848510~exp=1743852110~hmac=ff3e86520aedbd6bd71bb5863c10c398f77c03b572c7310e3b4f6c9d56deb0a4&w=1380',
    alt: 'Image 2',
  },
];

const BannerContainer = styled.div`
  width: 90%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 20px;
`;

const BannerSlide = styled.div`
  width: 1300px;
  height: 450px;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  color: white;
  font-size: 1.2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 60%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
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

const Banner = () => {
  return (
    <BannerContainer>
      <BannerSlide>
        {images.map((image) => (
          <ImageWrapper key={image.id}>
            <Image src={image.src} alt={image.alt} />
          </ImageWrapper>
        ))}
        <OverlayContainer>
          <Title>WE MADE YOUR EVERYDAY FASHION BETTER!</Title>
          <Description>
            In our journey to make your everyday fashion Euphorioa presents
            EVERYDAT wear range-Comfortable & Affordable fashion 24*7
          </Description>
          <Button> Shop Now</Button>
        </OverlayContainer>
      </BannerSlide>
    </BannerContainer>
  );
};
export default Banner;
