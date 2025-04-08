'use client';
import styled from 'styled-components';

const images = [
  {
    id: 1,
    src: 'https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small_2x/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg',
    alt: 'Nike Logo',
  },
  {
    id: 2,
    src: 'https://assets.turbologo.com/blog/en/2021/07/07050018/hm-color-logo.png',
    alt: 'H&M Logo',
  },
  {
    id: 3,
    src: 'https://static.vecteezy.com/system/resources/previews/023/871/197/non_2x/levis-brand-clothes-logo-symbol-design-fashion-illustration-with-black-background-free-vector.jpg',
    alt: 'Levis Logo',
  },
  {
    id: 4,
    src: 'https://static.vecteezy.com/system/resources/previews/024/455/579/non_2x/us-polo-assn-brand-symbol-with-name-logo-clothes-design-icon-abstract-illustration-free-vector.jpg',
    alt: 'US Polo Assn Logo',
  },
  {
    id: 5,
    src: 'https://assets.turbologo.com/blog/en/2019/11/19084917/puma-logo-cover-958x575.png',
    alt: 'Puma Logo',
  },
];
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #3c4242;
  width: 85%;
  margin: 20px auto;
  padding: 20px;
  margin-top: 5%;
  border-radius: 20px;
`;
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`;
const Subtitle = styled.h3`
  font-size: 1rem;
  text-align: center;
  padding: 10px;
  margin-bottom: 20px;
`;
const BrandsLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 20px;
`;

const BrandCard = styled.img`
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  height: 60px;
  width: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const BrandDeals = () => {
  return (
    <Wrapper>
      <Title> Top Brand Deals</Title>
      <Subtitle>Up To 60% off on brands </Subtitle>
      <BrandsLogoWrapper>
        {images.map((brand) => (
          <BrandCard key={brand.id} src={brand.src} alt={brand.alt} />
        ))}
      </BrandsLogoWrapper>
    </Wrapper>
  );
};
export default BrandDeals;
