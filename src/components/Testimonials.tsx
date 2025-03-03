import React from 'react';
import styled from 'styled-components';
import testimonialImage1 from '../assets/test3.avif'; // Replace with actual image paths
import testimonialImage2 from '../assets/test2.avif'; // Replace with actual image paths
import testimonialImage3 from '../assets/test1.avif'; // Replace with actual image paths
import testimonialImage4 from '../assets/test4.avif'; // Replace with actual image paths
const TestimonialsContainer = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  font-family: 'Poppins';

`;

const Title = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 200px;
  margin-bottom: 20px;
  text-align: left;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: 11px;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  margin-top: 5px;
`;

function Testimonials() {
  return (
    <TestimonialsContainer>
      <Title>Testimonials</Title>
      <CardContainer>
        <Card>
          <CardImage src={testimonialImage1} alt="John Doe" />
          <CardContent>
            <TestimonialText>"The food was absolutely wonderful, from preparation to presentation, very pleasing."</TestimonialText>
            <TestimonialAuthor>- John Doe</TestimonialAuthor>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={testimonialImage2} alt="Jane Smith" />
          <CardContent>
            <TestimonialText>"We especially enjoyed the special bar drinks, the cucumber infused vodka martini was fabulous."</TestimonialText>
            <TestimonialAuthor>- Jane Smith</TestimonialAuthor>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={testimonialImage3} alt="Emily Johnson" />
          <CardContent>
            <TestimonialText>"The atmosphere was great and the staff were very friendly. Highly recommend!"</TestimonialText>
            <TestimonialAuthor>- Emily Johnson</TestimonialAuthor>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={testimonialImage4} alt="Mike Cobbs" />
          <CardContent>
            <TestimonialText>"The atmosphere was great and the staff were very friendly. Highly recommend!"</TestimonialText>
            <TestimonialAuthor>- Edward Johnson</TestimonialAuthor>
          </CardContent>
        </Card>
      </CardContainer>
    </TestimonialsContainer>
  );
}

export default Testimonials;