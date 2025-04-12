'use client';
import styled from 'styled-components';

const CategoriesContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: -40px;
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
  font-size: 1.8rem;
  font-weight: bold;
  text-align: left;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
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

const BestPrice = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Clothing for Women online in India</ArrivalHeading>
      </HeadingContainer>
    </CategoriesContainer>
  );
};
export default BestPrice;
