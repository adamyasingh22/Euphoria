'use client';
import styled from 'styled-components';

const categoriesMen = [
  {
    id: 1,
    src: 'https://img.freepik.com/free-photo/man-beige-shirt-pants-casual-wear-fashion_53876-102889.jpg?t=st=1743853170~exp=1743856770~hmac=925457577c432624da0f10bf482320e33f32490ac0cfb3a09ee85d9f28c570fb&w=740',
    title: 'Shirts',
    alt: 'Knitted Joggers',
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/skater-boy-posing-with-skateboard_23-2147670748.jpg?t=st=1743853266~exp=1743856866~hmac=c4ccebbd7f80ecea0b4529aa82fa513b97fbad9d740a4b0811051b5bb82cc5f6&w=740',
    title: 'Printed Shirts',
    alt: 'Full Sleeve',
  },
  {
    id: 3,
    src: 'https://img.freepik.com/free-photo/attractive-man-heading-work_23-2147932472.jpg?t=st=1743853516~exp=1743857116~hmac=2105a425abc25bce5c621dc848a459dbb84b2eea6d488c8cc1def514e10a7a0c&w=740',
    title: 'Polo T-Shirts',
    alt: 'Active T-Shirts',
  },
  {
    id: 4,
    src: 'https://img.freepik.com/free-photo/smiling-man-posing-with-longboard_23-2147646475.jpg?t=st=1743853459~exp=1743857059~hmac=307456a842fab4a929aacc3a67a042fc177c0efcc4f64c5f8d54429693489d58&w=740',
    title: 'Polo T-Shirts',
    alt: 'Urban Shirts',
  },
  {
    id: 5,
    src: 'https://img.freepik.com/free-photo/stretching_23-2148023820.jpg?t=st=1743854130~exp=1743857730~hmac=9a0cf4993c22c17c6862d13266ff0d48dc6164ea448df4f92a2ac2da3e321f27&w=740',
    title: 'Hoodies & Sweatshirts',
    alt: 'Knitted Joggers',
  },
  {
    id: 6,
    src: 'https://img.freepik.com/free-photo/young-teenage-boy-wearing-denim-outfit_23-2150151061.jpg?t=st=1743854191~exp=1743857791~hmac=cfc8037049ba5d9ad143f473551b5f1bb5db94288ef6b4de4f2a6dde7e2e3e75&w=740',
    title: 'Jeans',
    alt: 'Full Sleeve',
  },
  {
    id: 7,
    src: 'https://img.freepik.com/free-photo/fit-adult-man-exercising-outdoors_23-2148531081.jpg?t=st=1743854227~exp=1743857827~hmac=f454e7a92e44ac929d13bcbf9e6976db53d0de3fae7a1abda59f6f7f98787012&w=740',
    title: 'Activewears',
    alt: 'Active T-Shirts',
  },
  {
    id: 8,
    src: 'https://img.freepik.com/free-photo/man-posing-with-boxing-gloves-full-shot_23-2149036360.jpg?t=st=1743854289~exp=1743857889~hmac=031dcc0a0d44940c3ad24450ff89700bf1e7faaffc47bef9735c3f914384abce&w=740',
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

const CategoriesMen = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Categories For Men</ArrivalHeading>
      </HeadingContainer>
      <SlideContainer>
        {categoriesMen.map((category) => (
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
export default CategoriesMen;
