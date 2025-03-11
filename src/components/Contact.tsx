import React from 'react';
import styled from 'styled-components';
import mapImage from '../assets/map.avif'; // Replace with the actual path to your map image
import backgroundImage from '../assets/bacckground2.jpg'; // Replace with the actual path to your background image

const ContactContainer = styled.div`
  padding: 80px 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins';
  min-height: 100vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 1024px) {
    padding: 60px 20px;
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    padding: 40px 15px;
    min-height: auto;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin-bottom: 40px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 2.2em;
    margin-bottom: 30px;

    &:after {
      width: 60px;
      bottom: -10px;
    }
  }
`;

const ContactDetails = styled.div`
  margin-bottom: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
  }
`;

const Detail = styled.p`
  font-size: 1.2em;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin: 15px 0;
    gap: 10px;
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 600px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
    gap: 15px;
    border-radius: 10px;
  }
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1.1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: white;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1em;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  font-size: 1.1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    border-color: white;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 1em;
    min-height: 120px;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.2em;
  color: white;
  background-color: #000000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  position: relative;
  overflow: hidden;

  &:before {
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
    background-color: #333;
    transform: translateY(-2px);

    &:before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1.1em;
    margin-top: 15px;
  }
`;

function Contact() {
  return (
    <ContactContainer id='#contact'>
      <Title>Contact Us</Title>
      <ContactDetails>
        <Detail>Phone: (123) 456-7890</Detail>
        <Detail>Email: info@restaurant.com</Detail>
        <Detail>Address: 123 Main Street, City, State, ZIP Code</Detail>
      </ContactDetails>
     
      <ContactForm>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows={5} placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;