import React from 'react';
import styled from 'styled-components';
import mapImage from '../assets/map.avif'; // Replace with the actual path to your map image
import backgroundImage from '../assets/bacckground2.jpg'; // Replace with the actual path to your background image

const ContactContainer = styled.div`
  padding: 40px 20px;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins';

`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const ContactDetails = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Detail = styled.p`
  font-size: 1.2em;
  margin: 5px 0;
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
  gap: 10px;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #00000063;
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