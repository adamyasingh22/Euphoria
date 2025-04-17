'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #666;
  height: calc(100vh - 60px);
`;
const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const IconImage = styled.img`
  width: 3%;
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 40px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 5px;
`;
const SocialButton = styled.button`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: white;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  color: #666;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Divider = styled.div`
  margin: 20px 0;
  text-align: center;
  color: #aaa;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 40%;
    height: 1px;
    background-color: #ddd;
    vertical-align: middle;
    margin: 0 10px;
  }
`;
const InputPlaceHolder = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;
const PasswordHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 12px 16px;
  margin-bottom: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  width: 100%;
  background-color: #f9f9f9;
  color: #666;
`;

const SignInButton = styled.button`
  background-color: #8b44f2;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
  justifyself: start;

  &:hover {
    background-color: #712ee4;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  align-item: flex-start;
  margin-top: 5px;
  font-size: 13px;
  gap: 5px;

  a {
    color: #666;
    text-decoration: underline;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterLink = styled.div`
  margin-top: 16px;
  font-size: 14px;
  color: #444;

  a {
    color: #8b44f2;
    margin-left: 4px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
const SignUpContainer = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src="https://img.freepik.com/free-photo/stylish-asian-woman-dark-suit-posing-beige-wall_197531-16998.jpg?t=st=1744808594~exp=1744812194~hmac=2921847cfc881a9346724047cb8fc531dce7a6a0266fbd53b75ab0c6fdcfb6ae&w=740"
          alt="Login Visual"
        />
      </ImageWrapper>
      <TextWrapper>
        <Heading>Sign Up</Heading>
        <InputPlaceHolder style={{ marginBottom: '40px' }}>
          Sign up for free to access to in any of our products
        </InputPlaceHolder>

        <SocialButton>
          <IconImage
            src="data:image/png;base64,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"
            alt="Google"
            width={20}
          />
          Continue With Google
        </SocialButton>
        <SocialButton>
          <IconImage
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD8/Pz19fXCwsLl5eXo6Oh5eXnPz8/r6+vY2Njn5+fHx8dqamr5+fmkpKRxcXGXl5eurq4wMDBVVVVdXV2AgIBJSUkoKChCQkJkZGSenp6Hh4ezs7NHR0eRkZE7OzseHh5QUFAODg4YGBg0NDS7u7v4cFqqAAAGNklEQVR4nO2daXPiMAyGnYscLQlQoBylBbrl///ETUKA3ImNjWSPnk8722ZGbxPLsi3JzOrmw0/cKIxthhfbCSM38T96VLCuH/guZmV1bNfnU7h6hzZZAHc5WuHsDdpYQbzpKIXLCbShT+CdhxXq+H2WcQcU7qANfB5716dwAW2eFJJuhRG0bZIIuhTq7GKqeO0KQ2i7JBK2KTTnDWZ4TYWmjMEbQV2hGV60TFJVOIW2RwGrikJoa1RglxXqHqq1c3koXEHboojzXaFZE8UD76bQh7ZEGdNCoUnBTBXvqtDUUZhxzhWa6UivuLlCaCuUkik0189k+KlCF9oIpbipQp02fvmJLfYBbYNiPpjZwzAdiCyBNkExCTPb0aSuhpm2e1EnYuYGpVcmzIE2QTEOM3s6ZMbrIwiCIAiCIAiCIAiCIAiCIAiCIAjDcCbem7EHtfFlfSxy6v/8i3kyg1qZmfV5af29i6bJBu+t9cnN/B5vqWf6pNNetWtZv9V812BlWXsgGzNs0VKURqlnidn9t8L9KfsPyPE5t74En+tjk0uK5oUTWks1mRNL7BNa9wpMiQ6lsuxYutnjOWQG8BeFfQ0JrHBQYPhoPi0RiQsugaBFZ3FhBF8Gp9crqM5Wke3juDvEOc9TGx6Bx+IhB6Zm4uEROTKN9zwCi2qXYAY0Y5SCrvPYZ2wegdkInxxm6b/awznlHEvGnEbGjv0zYYXN4bC++rJSEPBaThWDxuVT87zCO2AFBf+qdoyJPd6FFIKFbXWvuPEGH+lsBdQHXL+c74Ytg9OGiMDhv5syWlr6bPpz/8PmE4NA1vC2+sVd36DhH4ZbyLi7y96vbqP4QtKUnxfKaSHutKtLI8dsmDHwzb+Az07b1u2jh0/h8aViWun76JZtEYB2CgeCzHXjI0v6H6jxB6GpxuBqfe1WhmTfBhROhc4IO49f7n1Q8q1+j3DCHowdWNvZ/BBEkzF/kQff0OpyTlw284Gj20OkUCGSzkfcYcp4QLeCS/DtfvLAtcGlgmh9XbgN7mCLAt6ALHX934tsJcEZbY4mgFZ4df3b+btzUaMQvheuGl0PoPX1LS2ksIHWx9iPWoVQm6QlgmErnwFDyw61CsFdKVM52WdAq8uYqBQIe3J4o60JuizAY7YckR3esWAYhkzphAEt7QbXmTUPSBaHCp0NnvZOYieCw0DrKnFQIhBByPZAiUQknrRAQXz6D1pTjfBPtkLIlNJ2uPKARgB6LtqOI3U/Css+YpU46btYig+kqethICsQRzVVpLjb2Wy6khm+oWuhLlFbDr6eqrKX+vhqZ/hOBQfBsfStIvUl/kKraUWmQlwR6Q2JSyhsM8UNeREN2oajzWv5xMD5jeZspQgUK6N6EV3ldjwcoUX0I2FnEd9cXyX4fVIgeLLlMM8thIHKRviwk5OwQHw7Fx14yU7oa0XtRps4fHmWFsYlUz/cAxLnzkwnEfeCHzgnnxNvxasPRVLCaCJ+fVpdqnU4Duup8wuf3TUS2xXaTcSRCTxMsBdcP4GnWHbhRWGcvrY49ILDfCq8WXpEurudISX7GbkPffq8aYp9scTsp1aEnxqslRiLhTV+It6QqbE4CehbafH+7jQaWg3xg9iBdhAvmmXdXfj6fJ5VnMWIePT0pVME2kIw79lR3K51bbtW483d++dTWdrf0t+7gF0DFGE7oed5byH6OZ0gCIIgCIIgCIIgCIIgCIIgCIIgiAdoy4wkYTPTjzAdZsbZejch0yt1h5+I4Wl0owaXIc9/fJqE6VbIwYvPwK5weREbhrfuVgqxxRD11FKBmyo0eyD6qUJMbcPkY2UKTf5M3VzhEtoMhZxzhQiaSqsiu2wiU4i1E8XzTAuFkJdiKSW/LyRXaOpIPN8VGupOr8XWRe8cE0O34iKjQuEO2hwF7CoK8dY5CnO7Wure4UnXSpYu7h1HHz2szJr3HxdLlbp0mbTrVuozXu5Dhq5boTDlq8EqndZMGYuVrr/VXnJmbLxVL+irdcvb6T/127V6z0Y/QN0DuEZfnGbHw6XO04bXLIBs6+k403U15bX15WjvWrnUsZjVbS9g7ezLuX7XyenYbueF332dRz/8xI3CGLNS25lEbuL3tdn+DzzcPO8ZzhyCAAAAAElFTkSuQmCC"
            alt="Twitter"
            width={20}
          />
          Continue With Twitter
        </SocialButton>

        <Divider>OR</Divider>
        <InputPlaceHolder>Email address</InputPlaceHolder>
        <Input type="email" placeholder="" />
        <PasswordHolder>
          <InputPlaceHolder>Password</InputPlaceHolder>
          <InputPlaceHolder>Hide</InputPlaceHolder>
        </PasswordHolder>

        <Input type="password" placeholder="" />
        <InputPlaceHolder>
          Use 8 or more characters with a max of letters, numbers & symbols
        </InputPlaceHolder>

        <LinkWrapper style={{ marginTop: '20px' }}>
          <input type="checkbox" style={{ marginTop: '-8px' }} />
          <InputPlaceHolder>Agree to our</InputPlaceHolder>
          <a href="#">Terms of use</a>
          <InputPlaceHolder>and</InputPlaceHolder>
          <a href="#">Privacy Policies</a>
        </LinkWrapper>
        <LinkWrapper>
          <input type="checkbox" style={{ marginTop: '-8px' }} />
          <InputPlaceHolder>
            {' '}
            Subscribe to our monthly newsletter
          </InputPlaceHolder>
        </LinkWrapper>

        <SignInButton style={{ justifySelf: 'start' }}>Sign In</SignInButton>

        <FooterLink>
          Already have an account?
          <a href="/Login">Sign In</a>
        </FooterLink>
      </TextWrapper>
    </Wrapper>
  );
};
export default SignUpContainer;
