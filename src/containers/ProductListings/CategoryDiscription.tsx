import styled from 'styled-components';

const CategoriesContainer = styled.div`
  width: 95%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: -20px;
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
const SubHeading = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 10px 0;
  text-align: left;
  color: #444;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 30px;
  gap: 12px;
  margin-bottom: 30px;
  font-family: 'Segoe UI', sans-serif;

  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Discription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: left;
  color: #444;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const CategoryDiscription = () => {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Clothing for Women online in India</ArrivalHeading>
      </HeadingContainer>
      <DiscriptionWrapper>
        <SubHeading>
          Reexplore Women Clothing Collection Online at Euphoria
        </SubHeading>
        <Discription>
          Women’s Clothing – Are you searching for the best website to buy
          Clothing for Women online in India? Well, your search for the coolest
          and most stylish womens clothing ends here. From trendy Casual Womens
          Wear Online shopping to premium quality cotton women’s apparel,
          Euphoria has closet of Women Collection covered with the latest and
          best designs of Women’s Clothing Online.
        </Discription>
        <Discription>
          Our collection of clothes for women will make you the trendsetter with
          an iconic resemblance of choice in Womens Wear.
        </Discription>
        <SubHeading>
          One-Stop Destination to Shop Every Clothing for Women: Euphoria
        </SubHeading>
        <Discription>
          Today, Clothing for Women is gaining more popularity above all. This
          is because gone are the days when women were used to carrying
          uncomfortable fashion. Today, a lady looks prettier when she is in
          Casual Womens Wear which is a comfortable outfit. Concerning this,
          Euphoria has a big fat range of Stylish Women’s Clothing that would
          make her the winner wherever she goes.
        </Discription>
        <Discription>
          Our collection of clothes for women will make you the trendsetter with
          an iconic resemblance of choice in Womens Wear. It is quite evident to
          say that there are very few Womens Clothing online stores where you
          can buy Western Wear for Women comprising the premium material and
          elegant design that you are always seeking for. Basically,
        </Discription>
        <SubHeading>See More</SubHeading>
      </DiscriptionWrapper>
    </CategoriesContainer>
  );
};
export default CategoryDiscription;
