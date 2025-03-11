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
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 80px 30px;
  font-family: 'Poppins';
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  }

  @media (max-width: 1024px) {
    padding: 40px 40px 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 30px 20px 15px;
    gap: 30px;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 80%;
    background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
  }

  @media (max-width: 1024px) {
    min-width: 200px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 30px;
    
    &:not(:last-child)::after {
      display: none;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Logo = styled.h3`
  color: #007bff;
  font-size: 24px;
  margin: 0;
  position: relative;

  img {
    max-height: 60px;
    transition: all 0.3s ease;
    filter: brightness(1);

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.2);
    }

    @media (max-width: 768px) {
      max-height: 50px;
    }
  }
`;

const NavLinks = styled.nav<{ linkColor: string }>`
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    transition: all 0.3s ease;
    position: relative;
    padding: 5px 0;

    &::before, &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      background-color: ${(props) => props.linkColor};
      transition: width 0.3s ease;
    }

    &::before {
      left: 50%;
      transform: translateX(-50%);
    }

    &::after {
      right: 50%;
      transform: translateX(50%);
    }

    &:hover {
      color: ${(props) => props.linkColor};
      
      &::before, &::after {
        width: 50%;
      }
    }
  }

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;

    a {
      padding: 8px 0;
      font-size: 15px;
    }
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 10px;
  }
`;

const SocialLink = styled.a`
  font-size: 24px;
  color: #ffffff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    color: #fbff00;
    transform: translateY(-3px);

    &::before {
      width: 150%;
      height: 150%;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 40px;
    height: 40px;
  }
`;

const StyledHr = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Copyright = styled.p<{ linkColor?: string }>`
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: ${props => props.linkColor || '#0044ff'};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 20px;
    padding-top: 15px;
  }
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

      <Copyright linkColor={fixedLinkColor}>
        &copy; {new Date().getFullYear()} Dairibord. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;