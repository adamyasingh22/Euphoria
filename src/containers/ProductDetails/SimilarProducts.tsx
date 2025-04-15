import styled from 'styled-components';
import DealsContainer from '../ProductListings/DealsContainer';

const CategoriesContainer = styled.div`
  width: 95%;
  margin: 40px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
`;

const ArrivalHeading = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: #444;
`;

const Pointer = styled.div`
  width: 8px;
  height: 30px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #a855f7, #7c3aed);
`;

const SimilarProduct = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Similar Products</ArrivalHeading>
      </HeadingContainer>
      <DealsContainer />
    </CategoriesContainer>
  );
};
export default SimilarProduct;
