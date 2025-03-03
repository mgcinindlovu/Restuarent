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
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 20px;
  font-family: 'Poppins';

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
    padding: 10px;
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

  @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
    align-items: center;
    text-align: center;
  }
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 1.2em;
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
  width: 200px;
  height: 200px;
  border: 5px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }
`;

const CenterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 1024px) {
    width: 75px;
    height: 75px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 1024px) {
    padding: 8px;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 60px;

  @media (max-width: 1024px) {
    left: 20px;
  }
`;

const RightArrow = styled(ArrowButton)`
  right: 60px;

  @media (max-width: 1024px) {
    right: 20px;
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: -30px;
  display: flex;
  gap: 5px;

  @media (max-width: 1024px) {
    bottom: -20px;
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