import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (234) 567-890</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank">Facebook</SocialLink>
            <SocialLink href="https://twitter.com" target="_blank">Twitter</SocialLink>
            <SocialLink href="https://instagram.com" target="_blank">Instagram</SocialLink>
          </SocialLinks>
        </FooterSection>
        <FooterSection>
          <h3>About Us</h3>
          <p>We are a leading organization dedicated to providing quality services.</p>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  margin-top: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #444;
`;

export default Footer;
