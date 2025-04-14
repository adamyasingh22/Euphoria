'use client';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2f3537;
  color: #fff;
  padding: 4rem 2rem;
  font-family: sans-serif;
  margin-top: 4rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  margin: 20px;
`;

const FooterColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
`;

const FooterLink = styled.p`
  color: #ccc;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  padding: 1rem;
`;
const SocialIconImage = styled.img`
  background-color: #f6f6f6;
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  height: 3rem;

  &:hover {
    background-color: #555;
  }
`;

const AppDownloadWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AppDownload = styled.img`
  height: 40px;
  cursor: pointer;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #444;
  margin: 2rem 0;
`;

const Copyright = styled.div`
  font-size: 0.86rem;
  text-align: center;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <ColumnTitle>Need Help</ColumnTitle>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Track Order</FooterLink>
          <FooterLink>Returns & Refunds</FooterLink>
          <FooterLink>FAQs</FooterLink>
          <FooterLink>Career</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink>About Us</FooterLink>
          <FooterLink>euphoria Blog</FooterLink>
          <FooterLink>euphoriastan</FooterLink>
          <FooterLink>Collaboration</FooterLink>
          <FooterLink>Media</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>More Info</ColumnTitle>
          <FooterLink>Term and Conditions</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
          <FooterLink>Shipping Policy</FooterLink>
          <FooterLink>Sitemap</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Location</ColumnTitle>
          <FooterLink>support@euphoria.in</FooterLink>
          <FooterLink>Eklingpura Chouraha, Ahmedabad Main Road</FooterLink>
          <FooterLink>
            (NH 8- Near Mahadev Hotel) Udaipur, India- 313002
          </FooterLink>

          <ColumnTitle style={{ marginTop: '1.5rem' }}>
            Download The App
          </ColumnTitle>
          <AppDownloadWrapper>
            <AppDownload src="/google-play-badge.png" alt="Google Play" />
            <AppDownload src="/app-store-badge.png" alt="App Store" />
          </AppDownloadWrapper>
        </FooterColumn>
      </FooterGrid>

      <SocialIcons>
        <SocialIconImage src="/facebook.png" alt="Facebook" />
        <SocialIconImage src="/instagram.png" alt="Instagram" />
        <SocialIconImage src="/twitter.png" alt="Twitter" />
        <SocialIconImage src="/in.png" alt="LinkedIn" />
      </SocialIcons>

      <Divider />

      <Copyright>
        Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
