'use client';
import styled from 'styled-components';

interface TabProps {
  active?: boolean;
}

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

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  flex-wrap: wrap;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  width: 55%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
`;

const Tab = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<TabProps>`
  font-weight: ${({ active }) => (active ? '600' : '400')};
  color: ${({ active }) => (active ? '#000' : '#666')};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: #000;
    transition: width 0.3s ease;
  }
`;

const DescriptionText = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  margin-top: 5%;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 12px;
  gap: 16px;
`;

const InfoItem = styled.div`
  text-align: left;
`;

const InfoTitle = styled.div`
  font-size: 0.75rem;
  color: #999;
`;

const InfoValue = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 40%;
  min-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #eee;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  video {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  color: white;
`;

const VideoTimestamp = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 6px;
  border-radius: 6px;
`;

const VideoTitle = styled.div`
  font-size: 1rem;
  margin-top: auto;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    display: inline-block;
    border-left: 10px solid black;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
`;

export default function ProductDescription() {
  return (
    <CategoriesContainer>
      <HeadingContainer>
        <Pointer />
        <ArrivalHeading>Product Description</ArrivalHeading>
      </HeadingContainer>

      <ContentWrapper>
        <ContentContainer>
          <Tabs>
            <Tab active>Description</Tab>
            <Tab>
              User comments <strong style={{ color: '#7c3aed' }}>(31)</strong>
            </Tab>
            <Tab>
              Question & Answer{' '}
              <strong style={{ color: '#7c3aed' }}>(4)</strong>
            </Tab>
          </Tabs>

          <DescriptionText>
            100% Bio-washed Cotton – makes the fabric extra soft & silky.
            Flexible ribbed crew neck. Precisely stitched with no pilling & no
            fading. Provide all-time comfort. Anytime, anywhere. Infinite range
            of matte-finish HD prints.
          </DescriptionText>

          <InfoGrid>
            <InfoItem>
              <InfoTitle>Fabric</InfoTitle>
              <InfoValue>Bio-washed Cotton</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Pattern</InfoTitle>
              <InfoValue>Printed</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Fit</InfoTitle>
              <InfoValue>Regular-fit</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Neck</InfoTitle>
              <InfoValue>Round Neck</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Sleeve</InfoTitle>
              <InfoValue>Half-sleeves</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoTitle>Style</InfoTitle>
              <InfoValue>Casual Wear</InfoValue>
            </InfoItem>
          </InfoGrid>
        </ContentContainer>

        <VideoWrapper>
          <video
            src="https://videocdn.cdnpk.net/videos/ba5d2459-4994-49fd-a66a-436248a1776a/horizontal/previews/clear/large.mp4?token=exp=1744639254~hmac=0a569a7e80920b9d24c42ae0b5cbf3873c19f7c2693e6370848ad1d0a62ce80d"
            muted
            autoPlay
            loop
          />
          <VideoTimestamp>1:00 M</VideoTimestamp>
          <PlayButton />
          <Overlay>
            <VideoTitle>Raven Hoodie with black colored design</VideoTitle>
          </Overlay>
        </VideoWrapper>
      </ContentWrapper>
    </CategoriesContainer>
  );
}
