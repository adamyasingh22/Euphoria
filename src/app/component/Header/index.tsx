'use client';
import styled from 'styled-components';

const headerItems = [
  { title: 'Shop' },
  { title: 'Men' },
  { title: 'Women' },
  { title: 'Combos' },
  { title: 'Joggers' },
];

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
`;

const Icon = styled.img`
  height: 40px;
`;

const HeaderItems = styled.div`
  display: flex;
  gap: 30px;
  font-size: 1rem;
  font-weight: bold;
  color: black;

  p {
    cursor: pointer;
    transition: color 0.3s;
  }

  p:hover {
    color: #555;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 5px;
  width: 200px;

  input {
    border: none;
    background: transparent;
    margin-left: 20px;
    outline: none;
    font-size: 1rem;
    width: 100%;
  }
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  height: 20%;
`;
const IconsContainer = styled.div`
  display: flex;
  gap: 15px;

  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    background: #f5f5f5;
  }

  .icon:hover {
    background: #e0e0e0;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Icon src="/euphoria.png" alt="Logo" />
      <HeaderItems>
        {headerItems.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </HeaderItems>
      <SearchBar>
        <SearchIcon src="./search.png" />
        <input type="text" placeholder="Search" />
      </SearchBar>
      <IconsContainer>
        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>

        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>

        <svg
          className="icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2 11h14l2-7H5"></path>
        </svg>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header;
