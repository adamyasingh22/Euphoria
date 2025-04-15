'use client';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  gap: 10px;
`;
const AddressBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`;
const Address = styled.div`
  font-size: 1.2rem;
  font-weight: 550;
  color: #444;
  cursor: pointer;
`;

const AddressText = styled.p`
  font-size: 1.2rem;
  color: #444;
`;
const AlreadyLogin = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Navigation = () => {
  return (
    <Container>
      <AddressBar>
        <Address>Home</Address>
        <Address> {'>'}</Address>
        <Address style={{ fontWeight: '700' }}>Add to Cart</Address>
      </AddressBar>
      <AddressText>
        Please fill in the details and click place order to complete your
        purchase
      </AddressText>
      <AlreadyLogin>
        <AddressText>Already registered? </AddressText>
        <AddressText style={{ color: '#7c3aed', cursor: 'pointer' }}>
          Please Login Here
        </AddressText>
      </AlreadyLogin>
    </Container>
  );
};
export default Navigation;
