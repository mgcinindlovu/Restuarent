import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background.jpg'; // Replace with the actual path to your background image

const LocationContainer = styled.div`
  padding: 40px 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  font-family: 'Poppins';

`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #00000052;
  }
`;

const Location = () => {
  const handleButtonClick = () => {
    // Add logic for button click, e.g., redirect to Google Maps or show more details
    window.open('https://www.google.com/maps', '_blank');
  };

  return (
    <LocationContainer>
      <Title>Our Location</Title>
      <Address>
        123 Main Street<br />
        City, State, ZIP Code<br />
        Country
      </Address>
      <Description>
        We are located in the heart of the city, easily accessible by public transportation. Come visit us for an unforgettable dining experience.
      </Description>
      <Button onClick={handleButtonClick}>Get Directions</Button>
    </LocationContainer>
  );
};

export default Location;