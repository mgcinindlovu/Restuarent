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
  padding: 60px 20px;
  background-color: #f9f9f9;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  font-family: 'Poppins';

  @media (max-width: 1024px) {
    padding: 40px 20px;
    min-height: auto;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #333;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 30px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  height: 400px;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 0 20px;

  h3 {
    font-size: 1.8em;
    margin-bottom: 20px;
    color: #222;
  }

  @media (max-width: 1024px) {
    padding: 0 10px;

    h3 {
      font-size: 1.6em;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 0;

    h3 {
      font-size: 1.4em;
    }
  }
`;

const Card = styled.div<{ animate: boolean }>`
  width: 100%;
  max-width: 400px;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${({ animate }) => (animate ? slideIn : 'none')} 1s ease-in-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Paragraph = styled.p<{ animate: boolean }>`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #666;
  animation: ${({ animate }) => (animate ? slideUp : 'none')} 1s ease-in-out;
  transition: opacity 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 1em;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 0.95em;
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