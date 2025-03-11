import React, { useState } from 'react';
import styled from 'styled-components';
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/fried-chicken-parts-fusilli-white-plate.jpg';
import heroImage3 from '../assets/tasty-pasta-chicken-wings-yellow-plate.jpg';

const images = [heroImage1, heroImage2, heroImage3]; // Add more images as needed

const HeroContainer = styled.div<{ backgroundImage: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 500px;
  min-height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 20px;
  font-family: 'Poppins';

  @media (max-width: 1280px) {
    gap: 300px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
    min-height: auto;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  width: 50%;
  margin-left: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 1024px) {
    width: 80%;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: 2.8em;
  }

  @media (max-width: 768px) {
    font-size: 2em;
    margin-bottom: 15px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.8em;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #282c34;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  @media (max-width: 1024px) {
    font-size: 0.9em;
    padding: 8px 16px;
  }
`;

const CircularScroll = styled.div`
  width: 250px;
  height: 250px;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    border-width: 3px;
  }
`;

const CenterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 30px;
    height: 30px;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 20px;

  @media (max-width: 768px) {
    left: 10px;
  }
`;

const RightArrow = styled(ArrowButton)`
  right: 20px;

  @media (max-width: 768px) {
    right: 10px;
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: -40px;
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    bottom: -30px;
    gap: 8px;
  }
`;

const Dot = styled.span<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'gray' : 'white')};
`;

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = images.length;

  const handleScroll = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < totalItems) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <HeroContainer backgroundImage={images[currentIndex]}>
      <LeftDiv>
        <Title>Welcome to Our Restaurant</Title>
        <Subtitle>Experience the best dining with us</Subtitle>
        <Button>Learn More</Button>
      </LeftDiv>
      <RightDiv>
        <CircularScroll>
          <CenterImage src={images[currentIndex]} alt={`Hero ${currentIndex + 1}`} />
        </CircularScroll>
        <LeftArrow onClick={() => handleScroll('left')}>{'<'}</LeftArrow>
        <RightArrow onClick={() => handleScroll('right')}>{'>'}</RightArrow>
        <Pagination>
          {Array.from({ length: totalItems }).map((_, index) => (
            <Dot key={index} active={index === currentIndex} />
          ))}
        </Pagination>
      </RightDiv>
    </HeroContainer>
  );
}

export default Hero;