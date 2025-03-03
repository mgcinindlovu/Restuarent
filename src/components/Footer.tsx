import React from "react";
import styled from "styled-components";
import logo from "../assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: 'Poppins';


  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Logo = styled.h3`
  color: #007bff;
  font-size: 24px;

  img {
    max-height: 50px;
  }
`;

const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 40px;
  justify-content: center;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
      color: ${(props) => props.linkColor};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fbff00;
  }
`;

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #ffffff;
  opacity: 0.3;
  margin: 20px 0;
`;

const Footer: React.FC = () => {
  const fixedLinkColor = "#0044ff";
  return (
    <FooterContainer>
      <Column>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
      </Column>

      <Column>
        <NavLinks linkColor={fixedLinkColor}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact Us</Link>
        </NavLinks>
      </Column>
      
      <StyledHr />
      
      <Column>
        <SocialContainer>
          <SocialLink href="https://www.facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </SocialLink>
          <SocialLink href="https://www.instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialLink>
          <SocialLink href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
          <SocialLink href="mailto:feedback@dairibord.co.zw" target="_blank">
            <FontAwesomeIcon icon={faGoogle} />
          </SocialLink>
        </SocialContainer>
      </Column>
    </FooterContainer>
  );
};

export default Footer;