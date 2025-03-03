import React, { useState } from 'react'; 
import styled from 'styled-components';
import menuImage1 from '../assets/salads.jpg'; // Replace with the actual path to your images
import menuImage2 from '../assets/Bread.jpg'; // Replace with the actual path to your images
import menuImage3 from '../assets/Bread.jpg'; // Replace with the actual path to your images

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 100vh;
  background-color: #f9f9f9;
  font-family: 'Poppins';

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const RightDiv = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2em;
  }
`;

const Description = styled.p`
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

const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const ImageAroundWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SurroundingImage = styled.img<{ angle: number, active: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  transform: rotate(${({ angle }) => angle}deg) translate(150px) rotate(-${({ angle }) => angle}deg); 
  border: ${({ active }) => (active ? '5px solid #ff6347' : 'none')}; /* Active border */
  opacity: ${({ active }) => (active ? 1 : 0.7)}; /* Dimming inactive images */
  transition: border 0.3s, opacity 0.3s;
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const Arrow = styled.div<{ direction: 'left' | 'right' }>`
  width: 30px;
  height: 30px;
  border: solid 3px #000;
  border-width: 3px 3px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ direction }) => (direction === 'left' ? 'rotate(45deg)' : 'rotate(-135deg)')};
  cursor: pointer;
  background-color: white;
  &:hover {
    opacity: 0.7;
  }
`;

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Default to the third image (index 2)
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Track active surrounding image
  const [rotation, setRotation] = useState(0); // Track rotation angle
  const totalItems = 5; // Number of surrounding images
  
  // Array of menu images corresponding to each surrounding image
  const surroundingImages = [menuImage1, menuImage2, menuImage3, menuImage1, menuImage2];
  const menuImages = [menuImage1, menuImage2, menuImage3, menuImage1, menuImage2];

  const handleSurroundingImageClick = (index: number) => {
    setActiveIndex(index); // Update the active surrounding image
  };

  const handleArrowClick = (direction: 'left' | 'right') => {
    // Adjust the rotation angle when clicking arrows
    setRotation(prevRotation => prevRotation + (direction === 'left' ? -30 : 30)); // Rotate images by 30 degrees

    // Update the current active image's index when the arrow is clicked
    setCurrentIndex(prevIndex => direction === 'left' ? (prevIndex === 0 ? totalItems - 1 : prevIndex - 1) : (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
  };

  return (
    <MenuContainer>
      <LeftDiv>
        <Title>Our Menu</Title>
        <Description>Explore our delicious menu with a variety of dishes to satisfy your taste buds.</Description>
        <Button>View Full Menu</Button>
      </LeftDiv>
      <RightDiv>
        <ImageAroundWrapper>
          <ImageWrapper>
            <MenuImage src={menuImages[currentIndex]} alt="Menu" />
          </ImageWrapper>
          {/* Surrounding Images */}
          {Array.from({ length: totalItems }).map((_, index) => (
            <SurroundingImage
              key={index}
              src={surroundingImages[index]}
              alt={`Image ${index}`}
              angle={(360 / totalItems) * index + rotation} // Apply the rotation
              active={index === activeIndex} // Set active state for image
              onClick={() => handleSurroundingImageClick(index)} // Handle image click
            />
          ))}
        </ImageAroundWrapper>
        <ArrowContainer>
            {/* Right Arrow */}
            <Arrow direction="right" onClick={() => handleArrowClick('right')} />
          {/* Left Arrow */}
          <Arrow direction="left" onClick={() => handleArrowClick('left')} />
        
        </ArrowContainer>
      </RightDiv>
    </MenuContainer>
  );
};

export default Menu;
