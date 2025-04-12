'use client';
import styled from 'styled-components';
import rawFilters from '@/mock/rawFilters';
import type { FilterOption } from './type/filters';
const filters = rawFilters as FilterOption;

interface CardProps {
  hex: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
  margin-left: 10%;
`;
const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FilterHeading = styled.h2`
  font-size: 1.2rem;
  color: #333;
  font_weight: bold;
`;

const FilterSign = styled.img`
  background-color: #f6f6f6;
  padding: 0.1rem 0.3rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  height: 1.2rem;

  &:hover {
    background-color: #555;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 1%;
  margin-bottom: 10%;
  margin-top: 10%;
`;
const CategoryWrappr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-item: centre;
  justify-content: space-between;
  flex-direction: column;
  padding: 4px;
`;

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;
const CategoryFilterHeading = styled.h3`
  font-size: 0.6rem;
  color: black;
`;

const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  margin: 10px auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ColorSlide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const ColorFrame = styled.div<CardProps>`
  background-color: ${(props) => props.hex || '#ccc'};
  border-radius: 10px;
  border-radius: 10px;
  width: 100%;
  height: 2.5rem;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
`;
const ColorTitle = styled.p`
  font-size: 0.6rem;
  color: black;
`;

const SizeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin: 10px auto;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const SizeCard = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0.5rem;
 border
 color: black;
  border-radius: 10px;
  border-radius: 10px;
  border: 2px solid black;
&:hover {
    background-color: #555;
  }

`;

const SizeTitle = styled.p`
  font-size: 0.6rem;
  color: black;
`;

const Filter = () => {
  return (
    <Wrapper>
      <Header>
        <FilterHeading>Filter</FilterHeading>
        <FilterSign src="./filter.png" />
      </Header>
      <Divider />

      {filters.categories.map((item) => (
        <CategoryWrappr key={item.id}>
          <CategoryFilter>
            <CategoryFilterHeading>{item.name}</CategoryFilterHeading>
            <FilterSign src="./arrow.png" />
          </CategoryFilter>
        </CategoryWrappr>
      ))}
      <Divider />
      <Header>
        <FilterHeading>Color</FilterHeading>
        <FilterSign src="./filter.png" />
      </Header>
      <Divider />
      <ColorWrapper>
        {filters.colors.map((item) => (
          <ColorSlide key={item.id}>
            <ColorFrame hex={item.hex} />
            <ColorTitle>{item.name}</ColorTitle>
          </ColorSlide>
        ))}
      </ColorWrapper>
      <Divider />
      <Header>
        <FilterHeading>Size</FilterHeading>
        <FilterSign src="./filter.png" />
      </Header>
      <Divider />
      <SizeWrapper>
        {filters.size.map((item) => (
          <SizeCard key={item.id}>
            <SizeTitle>{item.name}</SizeTitle>
          </SizeCard>
        ))}
      </SizeWrapper>
      <Divider />
      <Header>
        <FilterHeading>Dress Style</FilterHeading>
        <FilterSign src="./filter.png" />
      </Header>
      <Divider />
      {filters.style.map((item) => (
        <CategoryWrappr key={item.id}>
          <CategoryFilter>
            <CategoryFilterHeading>{item.name}</CategoryFilterHeading>
            <FilterSign src="./arrow.png" />
          </CategoryFilter>
        </CategoryWrappr>
      ))}
      <Divider />
      <Header>
        <FilterHeading>Price</FilterHeading>
        <FilterSign src="./filter.png" />
      </Header>
      <Divider />
    </Wrapper>
  );
};
export default Filter;
