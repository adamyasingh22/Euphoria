import styled from 'styled-components';
import { useState } from 'react';

interface FavoriteButtonProps {
  $liked: boolean;
}

const categoriesWomen = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/female-model-posing-studio_23-2148872392.jpg',
    title: "Jhanvi's Brand",
    alt: "Jhanvi's Brand",
    price: '$123',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246194.jpg',
    title: "Nike's Brand",
    alt: 'MM',
    price: '$68',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-with-sunglasses_23-2149409792.jpg',
    title: 'Tees & T-Shirts',
    alt: 'Active T-Shirts',
    price: '$45',
  },
  {
    id: 4,
    src: 'https://img.freepik.com/free-photo/full-length-photo-pretty-young-woman-black-sportswear-posing-street-while-standing-lawn-outdoors-female-fashion-city-lifestyle_132075-9220.jpg',
    title: 'Boxers',
    alt: 'Urban Shirts',
    price: '$25',
  },
  {
    id: 5,
    src: 'https://img.freepik.com/free-photo/happy-pretty-young-lady-red-dress-looking-camera-while-walking-along-street-modern-city-lifestyle-concept_132075-5900.jpg?t=st=1744300419~exp=1744304019~hmac=9cf1a3e5ff08f58176d5b97c5f3dbeb957e69051cfdd2a5d133124dd11e04e0b&w=740',
    title: 'Denim Jackets',
    alt: 'Denim Look',
    price: '$89',
  },
  {
    id: 6,
    src: 'https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2735.jpg?t=st=1744302575~exp=1744306175~hmac=afc5808bd45d5b1bbb6c79cff34b01ba94e8007e0f6ef45488045882cfce94c0&w=740',
    title: 'Overcoats',
    alt: 'Stylish Coats',
    price: '$139',
  },
  {
    id: 7,
    src: 'https://img.freepik.com/free-photo/full-shot-woman-posing-with-red-background_23-2149480766.jpg?t=st=1744302643~exp=1744306243~hmac=b61331a817c693fb0e60c6772a86ca41f63bc528eadfa24f846f38236cf8f711&w=740',
    title: 'Floral Dresses',
    alt: 'Summer Wear',
    price: '$59',
  },
  {
    id: 8,
    src: 'https://img.freepik.com/free-photo/high-spirited-elegant-lady-dancing-high-heels_259150-58479.jpg?t=st=1744302797~exp=1744306397~hmac=b232cf944f0148a796d5f9132637d623afe5523b9a27769e7dc985b91b010c7a&w=740',
    title: 'Street Style',
    alt: 'Casual Wear',
    price: '$75',
  },
  {
    id: 9,
    src: 'https://img.freepik.com/free-photo/full-shot-smiley-woman-with-headphones_23-2149480792.jpg?t=st=1744302661~exp=1744306261~hmac=0f0f7cc7cdb526586292955a01e0f1ddf49d6735b4b079d8af5664f002011f8d&w=740',
    title: 'Party Wear',
    alt: 'Evening Glam',
    price: '$110',
  },
  {
    id: 10,
    src: 'https://img.freepik.com/free-photo/elegant-fashionable-woman-white-jacket-dress-posing-ankle-boot-black-leather-full-length_273443-3841.jpg?t=st=1744302737~exp=1744306337~hmac=e89402a856be5ad92d2adc6e89350019e5459bc7d1f98630bf98052070e504cd&w=740',
    title: 'Chic Tops',
    alt: 'Trendy Fashion',
    price: '$39',
  },
  {
    id: 11,
    src: 'https://img.freepik.com/free-photo/female-model-posing-studio_23-2148872392.jpg',
    title: "Jhanvi's Brand",
    alt: "Jhanvi's Brand",
    price: '$123',
  },
  {
    id: 12,
    src: 'https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246194.jpg',
    title: "Nike's Brand",
    alt: 'MM',
    price: '$68',
  },
];

const CategoriesContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const SlideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 0%;
  margin-left: 0%;
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

const DealsContainer = () => {
  const [liked, setLiked] = useState(false);
  return (
    <CategoriesContainer>
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
export default DealsContainer;
