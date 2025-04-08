'use client';
import styled from 'styled-components';
import { useState } from 'react';

interface FavoriteButtonProps {
  $liked: boolean;
}

const categoriesWomen = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/female-model-posing-studio_23-2148872392.jpg?t=st=1743868208~exp=1743871808~hmac=acb2c3707476e8025a9d8a14e041f9990aa4642bd6adc089a55f08a4fe33210b&w=740',
    title: "Jhanvi's Brand",
    alt: "Jhanvi's Brand",
    price: '$123',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246194.jpg?t=st=1743868416~exp=1743872016~hmac=c29830c75128d852c956476132134fd9c6223af0cde0f26885b56d46b1216c4c&w=740',
    title: "Nike's Brand",
    alt: 'MM',
    price: '$68',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-with-sunglasses_23-2149409792.jpg?t=st=1743868334~exp=1743871934~hmac=a57b54bf94c0e79fe7cfd10e6fb35d7a7d8f785cf4d2d4fd84b1997c70742d6e&w=740',
    title: 'Tees & T-Shirts',
    alt: 'Active T-Shirts',
    price: '$45',
  },
  {
    id: 4,
    src: 'https://img.freepik.com/free-photo/full-length-photo-pretty-young-woman-black-sportswear-posing-street-while-standing-lawn-outdoors-female-fashion-city-lifestyle_132075-9220.jpg?t=st=1743868377~exp=1743871977~hmac=4f46d692bdb147afe02605ec750604040cdc214b86232e8156d2ad5e34b99fc6&w=740',
    title: 'Boxers',
    alt: 'Urban Shirts',
    price: '$25',
  },
];

const CategoriesContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const HeadingContainer = styled.div`
  display: flex;
  alignitems: center;
  height: 50px;
  justifycontent: center;
  padding: 20px;
  gap: 10px;
  margin-bottom: 30px;
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
const SlideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 2%;
  margin-left: 1%;
`;

const ArrivalCard = styled.div`
  flex: 0 0 calc(25% - 20px);
  text-align: left;
  position: relative;
`;

const ArrivalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const ArrivalTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4%;
`;
const ArrivalText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrivalTitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;
const ArrivalDescription = styled.p`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #333;
`;
const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ArrowButton = styled.button`
  background: #f5f5f5;
  border: none;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  transition-duration: 0.4s;
  &:hover {
    background-color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const FavoriteButton = styled.button<FavoriteButtonProps>`
  position: absolute;
  top: 14px;
  right: 16px;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 8px;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ $liked }) => ($liked ? 'red' : 'none')};
    stroke: ${({ $liked }) => ($liked ? 'red' : '#374151')};
    stroke-width: 2;
    transition: fill 0.2s, stroke 0.2s;
  }
`;

const LimeLightDeals = () => {
  const [liked, setLiked] = useState(false);
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>In The Limelight</ArrivalHeading>
      </HeadingContainer>
      <SlideContainer>
        {categoriesWomen.map((category) => (
          <ArrivalCard key={category.id}>
            <ArrivalImage src={category.src} alt={category.alt} />
            <FavoriteButton onClick={() => setLiked(!liked)} $liked={liked}>
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 
          3.41 1.01 4.13 2.44h1.74C14.09 5.01 15.76 4 17.5 4 
          20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z"
                />
              </svg>
            </FavoriteButton>
            <ArrivalTitleContainer>
              <ArrivalText>
                <ArrivalTitle>{category.title}</ArrivalTitle>
                <ArrivalDescription>Explore Now</ArrivalDescription>
              </ArrivalText>
              <ArrowContainer>
                <ArrowButton>{category.price}</ArrowButton>
              </ArrowContainer>
            </ArrivalTitleContainer>
          </ArrivalCard>
        ))}
      </SlideContainer>
    </CategoriesContainer>
  );
};
export default LimeLightDeals;
