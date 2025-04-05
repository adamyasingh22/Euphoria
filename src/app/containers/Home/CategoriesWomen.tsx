'use client';
import styled from 'styled-components';

const categoriesWomen = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246201.jpg?t=st=1743864198~exp=1743867798~hmac=6a8125926bd60405f3861809774dfa0654476a45a58eb8cb34728b622ba276b8&w=740',
    title: 'Hoodies & Sweatshirts',
    alt: 'Knitted Joggers',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/young-businesswoman-jacket-standing-posing-gray-wall_114579-81649.jpg?t=st=1743864154~exp=1743867754~hmac=3af8ca65617574676f4a0163b877febce2a9afa05abcf9c680a731ad14f9dc66&w=740',
    title: 'Coats & Parkas',
    alt: 'Full Sleeve',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/woman-holding-skateboard-back_23-2148259460.jpg?t=st=1743864097~exp=1743867697~hmac=97d1200c997fc46ce05c80da8ed4e1c5d1e1faac462b150dabd3f4ca6d3207f6&w=740',
    title: 'Tees & T-Shirts',
    alt: 'Active T-Shirts',
  },
  {
    id: 4,
    src: 'https://img.freepik.com/free-photo/young-female-practicing-kickboxing_23-2149127349.jpg?t=st=1743864042~exp=1743867642~hmac=635f42713a089b24b9af11df8852c2e85b14c7d9f5152d66420e3a9a2aabf929&w=740',
    title: 'Boxers',
    alt: 'Urban Shirts',
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
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: black;
  &:hover {
    color: gray;
  }
`;

const CategoriesWomen = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Categories For Women</ArrivalHeading>
      </HeadingContainer>
      <SlideContainer>
        {categoriesWomen.map((category) => (
          <ArrivalCard key={category.id}>
            <ArrivalImage src={category.src} alt={category.alt} />
            <ArrivalTitleContainer>
              <ArrivalText>
                <ArrivalTitle>{category.title}</ArrivalTitle>
                <ArrivalDescription>Explore Now</ArrivalDescription>
              </ArrivalText>
              <ArrowContainer>
                <ArrowButton>{'→'}</ArrowButton>
              </ArrowContainer>
            </ArrivalTitleContainer>
          </ArrivalCard>
        ))}
      </SlideContainer>
    </CategoriesContainer>
  );
};
export default CategoriesWomen;
