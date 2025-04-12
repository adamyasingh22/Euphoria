'use client';
import styled from 'styled-components';
import Filter from './Filter';
import DealsContainer from './DealsContainer';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

const Sidebar = styled.div`
  width: 20%;
  min-width: 200px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 12px;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
`;
const ProductCat = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProductLife = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-between;
  gap: 20px;
`;
const LifeContent = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #7b61ff;
  cursor: pointer;

  &:hover {
    color: #4b2dff;
  }
`;

const ProductList = () => {
  return (
    <Container>
      <Sidebar>
        <Filter />
      </Sidebar>
      <Wrapper>
        <Header>
          <ProductCat>Women Clothing</ProductCat>
          <ProductLife>
            <LifeContent>New</LifeContent>
            <LifeContent>Recommended</LifeContent>
          </ProductLife>
        </Header>
        <DealsContainer />
      </Wrapper>
    </Container>
  );
};
export default ProductList;
