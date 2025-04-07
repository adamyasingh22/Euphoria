'use client';
import styled from 'styled-components';

const cardData = [
  {
    id: 1,
    title: 'Hawaiian Shirts',
    subtitle: 'Dress up in summer vibe',
    discount: 'UPTO 50% OFF',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/woman-pink-jacket-looking-camera_23-2148316471.jpg?t=st=1743944620~exp=1743948220~hmac=c1dfbf341fcb47a62249fb8b44c25a2a7d203775a8fdfeb8de11527fb76fe2a4&w=1060',
  },
  {
    id: 2,
    title: 'Printed T-Shirt',
    subtitle: 'New Designs Every Week',
    discount: 'UPTO 40% OFF',
    tag: 'Limited Stock',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?t=st=1743946612~exp=1743950212~hmac=a0634fdba22975703549329690e81eb08879e6b3f8b1cd2c84def4b704882ea6&w=1380',
  },
  {
    id: 3,
    title: 'Cargo Joggers',
    subtitle: 'Move with style & comfort',
    discount: 'UPTO 50% OFF',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/black-friday-sale-model-being-covered-by-shopping-bags_23-2148674121.jpg?t=st=1743944772~exp=1743948372~hmac=abf4e5260475f5b1c11d9987d5d270d901ec0803b0c4e544cd0a84cfdff62577&w=996',
  },
  {
    id: 4,
    title: 'Urban Shirts',
    subtitle: 'Live In Comfort',
    discount: 'FLAT 60% OFF',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/cute-woman-with-shopping-bags-looking-back_23-2148316347.jpg?t=st=1743944745~exp=1743948345~hmac=edf94c67e8f519730352bb187619fc218f6bfffcc00e68800e56569cf207ae6a&w=1060',
  },
  {
    id: 5,
    title: 'Oversized T-Shirts',
    subtitle: 'Street Style Icon',
    discount: 'FLAT 60% OFF',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/young-woman-yellow-leather-jacket-copy-space_23-2148674153.jpg?t=st=1743944807~exp=1743948407~hmac=b02422614c8536978d9217e008498dfeab5eb00db5c49f839d33c2f5cff51562&w=1380',
  },
  {
    id: 6,
    title: 'Oversized T-Shirts',
    subtitle: 'Street Style Icon',
    discount: 'FLAT 60% OFF',
    button: 'SHOP NOW',
    bg: 'https://img.freepik.com/free-photo/young-woman-beautiful-dress-hat_1303-17517.jpg?t=st=1743946525~exp=1743950125~hmac=ca243b4d8c526ff0d6d86214fd736770b8c12214371f5a81166000190c1fda46&w=1380',
  },
];

interface CardProps {
  bg: string;
}
const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin: 10px auto;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const HeadingContainer = styled.div`
  display: flex;
  alignitems: center;
  height: 50px;
  justifycontent: center;
  padding: 20px;
  gap: 10px;
  margin-bottom: 20px;
`;

const ArrivalHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #000;
`;
const Pointer = styled.div`
  width: 8px;
  height: 30px;
  border-radius: 999px;
  background: linear-gradient(
    to bottom,
    #a855f7,
    #7c3aed
  ); /* violet gradient */
`;

const Card = styled.div<CardProps>`
  position: relative;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  height: 350px;
  border-radius: 12px;
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 20px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 16px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 40%;
  left: 08%;
  transform: translateY(-50%);
  color: white;
  text-align: left;
`;

const Tag = styled.div`
  background-color: #fff;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 10px;
  display: inline-block;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4px 0;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  margin: 4px 0;
`;

const Discount = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 8px 0;
`;

const Button = styled.button`
  margin-top: 10px;
  background: #fff;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const Arrow = styled.div`
  margin-top: 10px;
  font-size: 1.5rem;
  margin-left: 50px;
`;

const BigSavingDays = () => {
  return (
    <Wrapper>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Big Saving Days</ArrivalHeading>
      </HeadingContainer>
      <Container>
        {cardData.map((item) => (
          <Card key={item.id} bg={item.bg}>
            <Overlay>
              {item.tag && <Tag>{item.tag}</Tag>}
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <Discount>{item.discount}</Discount>
              <Arrow>↓</Arrow>
              <Button>{item.button}</Button>
            </Overlay>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default BigSavingDays;
