'use client';
import styled from 'styled-components';

const images = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/girl-yellow-wall-with-shopping-bags_1157-34353.jpg?t=st=1743660550~exp=1743664150~hmac=78217bc3d72f2bafd3c599a0ba0f378c2f4dc257bc6d9ba6810dc20994c1ce29&w=1380',
    alt: 'Image 1',
    subtitle: 'Low Price',
    title: 'High Coziness',
    description: 'UPTO 50% OFF',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/girl-yellow-wall-with-shopping-bags_1157-34348.jpg?t=st=1743660589~exp=1743664189~hmac=b48ff2096a658ba4531c1788f7fb844e0ea1107b726abbb290ef6efaa7c59829&w=1380',
    alt: 'Image 2',
    subtitle: 'Beyoung Presents',
    title: 'Breezy Summer Styles',
    description: 'UPTO 50% OFF',
  },
];

const DealsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  width: 100%;
  margin: 40px auto;
`;

const DealsSlide = styled.div`
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
  font-weight: bold;
  gap: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
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
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
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

const Deals = () => {
  return (
    <DealsContainer>
      <DealsSlide>
        {images.map((image) => (
          <ImageWrapper key={image.id}>
            <Image src={image.src} alt={image.alt} />
            <OverlayContainer>
              <Subtitle>{image.subtitle}</Subtitle>
              <Title>{image.title}</Title>
              <Description>{image.description}</Description>
              <Button>Shop Now</Button>
            </OverlayContainer>
          </ImageWrapper>
        ))}
      </DealsSlide>
    </DealsContainer>
  );
};

export default Deals;
