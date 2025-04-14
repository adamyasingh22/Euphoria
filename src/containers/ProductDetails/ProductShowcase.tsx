'use client';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  padding: 0px;
  background: #fff;
  font-family: Arial, sans-serif;
  color: #333;
  padding-left: 3%;
  padding-right: 3%;
`;

const Gallery = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  gap: 10%;
`;

const MainImage = styled.img`
  width: 65%;
  border-radius: 0px;
  object-fit: cover;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30%;
  padding-left: 5%;
`;
const ThumbImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    border-color: #000;
  }
`;

const Info = styled.div`
  flex: 1;
  min-width: 300px;
  margin-top: 8%;
  padding-right: 5%;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  span.stars {
    color: gold;
    font-size: 18px;
  }

  span.details {
    color: #555;
    font-size: 14px;
  }
`;

const SizeSelector = styled.div`
  margin: 20px 0;
  gap: 10px;

  button {
    margin-right: 10px;
    padding: 6px 12px;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    color: #333;

    &.active {
      background: #333;
      color: #fff;
    }
  }
`;

const ColorSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;

    &.active {
      border-color: #000;
    }
  }
`;

const PriceRow = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    background: #7c3aed;
    color: #fff;
    padding: 10px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
  }

  span {
    font-size: 20px;
    font-weight: 600;
  }
`;

const FeatureIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  gap: 20%;
  margin-top: 8%;
  margin-bottom: 8%;

  div {
    display: flex;
    align-items: center;
    gap: 0px;
    color: #555;
    font-size: 1rem;
  }
`;

export default function ProductShowcase() {
  return (
    <Container>
      <Gallery>
        <Thumbnails>
          <ThumbImage
            src="https://img.freepik.com/free-photo/young-businesswoman-jacket-standing-posing-gray-wall_114579-81649.jpg?t=st=1743864154~exp=1743867754~hmac=3af8ca65617574676f4a0163b877febce2a9afa05abcf9c680a731ad14f9dc66&w=740"
            alt="Black"
          />
          <ThumbImage
            src="https://img.freepik.com/free-photo/woman-holding-skateboard-back_23-2148259460.jpg?t=st=1743864097~exp=1743867697~hmac=97d1200c997fc46ce05c80da8ed4e1c5d1e1faac462b150dabd3f4ca6d3207f6&w=740"
            alt="Pink"
          />
          <ThumbImage
            src="https://img.freepik.com/free-photo/young-female-practicing-kickboxing_23-2149127349.jpg?t=st=1743864042~exp=1743867642~hmac=635f42713a089b24b9af11df8852c2e85b14c7d9f5152d66420e3a9a2aabf929&w=740"
            alt="Other"
          />
        </Thumbnails>
        <MainImage
          src="https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246201.jpg?t=st=1743864198~exp=1743867798~hmac=6a8125926bd60405f3861809774dfa0654476a45a58eb8cb34728b622ba276b8&w=740"
          alt="Main hoodie"
        />
      </Gallery>

      <Info>
        <Title>Raven Hoodie With Black colored Design</Title>
        <Rating>
          <span className="stars">★★★★☆</span>
          <span className="details">3.5 (120 comments)</span>
        </Rating>

        <SizeSelector>
          <strong>Select Size:</strong>
          <br />
          <br />
          {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
            <button key={size}>{size}</button>
          ))}
        </SizeSelector>

        <ColorSelector>
          <strong>Colours Available:</strong>
          <div style={{ background: '#000' }} className="active" />
          <div style={{ background: '#fbbf24' }} />
          <div style={{ background: '#f43f5e' }} />
          <div style={{ background: '#e879f9' }} />
        </ColorSelector>

        <PriceRow>
          <button>Add to cart</button>
          <span>$63.00</span>
        </PriceRow>

        <FeatureIcons>
          <div>🔒 Secure payment</div>
          <div>📏 Size & Fit</div>
          <div>🚚 Free shipping</div>
          <div>🔁 Free Returns</div>
        </FeatureIcons>
      </Info>
    </Container>
  );
}
