import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import image1 from '../assets/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg'; // Replace with actual image paths
import image2 from '../assets/chef-preparing-food-kitchen_1048944-11804974.avif'; // Replace with actual image paths
import image3 from '../assets/front-view-woman-working-service-industry_23-2150722791.avif'; // Replace with actual image paths

const images = [image1, image2, image3]; // Add more images as needed

const paragraphs = [
  "Welcome to Our Restaurant! We are dedicated to providing you with the best dining experience. Our menu features a variety of delicious dishes made from the freshest ingredients. Whether you're here for a casual meal or a special occasion, we strive to make every visit memorable.",
  "Our chefs are passionate about creating mouth-watering dishes that will tantalize your taste buds. We believe in using only the highest quality ingredients to ensure that every meal is a culinary delight.",
  "We value our customers and aim to provide exceptional service. If you have any questions or special requests, please don't hesitate to ask. We look forward to serving you!",
  "Our restaurant offers a cozy and welcoming atmosphere, perfect for family gatherings, romantic dinners, or casual outings with friends. We take pride in our friendly staff and excellent service."
];

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AboutContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Poppins';

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
  @media (max-width: 1024px) {
height: 50vh;
  }
  @media (max-width: 768px) {
height: 130vh;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding-left: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const Card = styled.div<{ animate: boolean }>`
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  padding: 0;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  overflow: hidden;
  animation: ${({ animate }) => (animate ? slideIn : 'none')} 1s ease-in-out;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Paragraph = styled.p<{ animate: boolean }>`
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
  animation: ${({ animate }) => (animate ? slideUp : 'none')} 1s ease-in-out;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const totalItems = images.length;

  const handleSwipe = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < totalItems) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalItems]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 1000); // Reset animation state after 1 second

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [currentIndex]);

  return (
    <AboutContainer id='#about'>
      <SectionTitle>About Us</SectionTitle>
      <ContentContainer>
        <LeftDiv>
          <Card animate={animate}>
            <CardImage src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          </Card>
        </LeftDiv>
        <RightDiv>
          <h3>Our Story</h3>
          {paragraphs.slice(0, currentIndex + 1).map((paragraph, index) => (
            <Paragraph key={index} animate={animate}>{paragraph}</Paragraph>
          ))}
        </RightDiv>
      </ContentContainer>
    </AboutContainer>
  );
}

export default About;