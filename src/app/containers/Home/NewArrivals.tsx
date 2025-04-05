'use client';
import styled from 'styled-components';

const newArrivals = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/pretty-young-woman-stylish-sportswear-sitting-wooden-bench-city-holding-hot-drink-female-fashion-city-lifestyle_132075-9194.jpg?t=st=1743672788~exp=1743676388~hmac=567dc65e53175982be43721364707017c7c53f960385ec6267b58b44dfbac958&w=740',
    title: 'Knitted Joggers',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/girl-wearing-black-t-shirt-posing-studio_23-2149333432.jpg?t=st=1743672876~exp=1743676476~hmac=6b110173bb2ee24b4595cb2c8a6d441e969a7e2096d4664ca298f7b59a36a0b7&w=740',
    title: 'Full Sleeve',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/young-man-training-gym-bodybuilding_23-2149552274.jpg?t=st=1743674658~exp=1743678258~hmac=dbe12fe5f3ea94e7a8f820ff2bd4c5c2a685596e4fa214f8a784aaebed3d8a55&w=740',
    title: 'Active T-Shirts',
  },
  {
    id: 4,
    src: 'https://img.freepik.com/free-photo/young-woman-sitting-near-by-standing-holding-hat-man_23-2148134033.jpg?t=st=1743673074~exp=1743676674~hmac=de522020a7b689af5713e6f435fa9eba93601c99d3841eed6ccb1bf701985f11&w=740',
    title: 'Urban Shirts',
  },
];

const NewArrivalsContainer = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: -40px;
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

const ArrivalsGrid = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ArrivalCard = styled.div`
  width: 300px;
  text-align: center;
  padding: 10px;
`;

const ArrivalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ArrivalTitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const NewArrivals = () => {
  return (
    <NewArrivalsContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading> New Arrivals</ArrivalHeading>
      </HeadingContainer>
      <ArrivalsGrid>
        <ArrowButton>{'←'}</ArrowButton>
        {newArrivals.map((item) => (
          <ArrivalCard key={item.id}>
            <ArrivalImage src={item.src} alt={item.title} />
            <ArrivalTitle>{item.title}</ArrivalTitle>
          </ArrivalCard>
        ))}
        <ArrowButton>{'→'}</ArrowButton>
      </ArrivalsGrid>
    </NewArrivalsContainer>
  );
};

export default NewArrivals;
