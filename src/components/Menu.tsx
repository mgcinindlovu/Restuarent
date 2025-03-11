import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import AppetizerImage1 from '../assets/salads.jpg'; // Replace with actual image paths
import AppetizerImage2 from '../assets/Greek Salad.jpg'; // Replace with actual image paths
import AppetizerImage3 from '../assets/Mozzarella SticksMozzarella Sticks.avif'; // Replace with actual image paths
import AppetizerImage4 from '../assets/fingerFoods.avif'; // Replace with actual image paths
import AppetizerImage5 from '../assets/Spring Rolls.avif'; // Replace with actual image paths
import Main1 from '../assets/seafood.avif'; // Replace with actual image paths
import Main2 from '../assets/salads.jpg'; // Replace with actual image paths 
import Main3 from '../assets/Pasta.avif'; // Replace with actual image paths
import Main4 from '../assets/Rice.avif'; // Replace with actual image paths
import Main5 from '../assets/Meat Dishes.jpg'; // Replace with actual image paths

import SideDish1 from '../assets/French Fries.jpg'; // Replace with actual image paths
import SideDish2 from '../assets/Fries.avif'; // Replace with actual image paths
import SideDish3 from '../assets/Vegetables.avif'; // Replace with actual image paths
import SideDish4 from '../assets/Bread.jpg'; // Replace with actual image paths
import SideDish5 from '../assets/Garlic Bread.jpg'; // Replace with actual image paths

import Drinks1 from '../assets/Soft Drinks.avif'; // Replace with actual image paths
import Drinks2 from '../assets/Smoothies plate.avif'; // Replace with actual image paths
import Drinks3 from '../assets/Tea & Coffee.jpg'; // Replace with actual image paths
import Drinks4 from '../assets/Alcoholic drinks.avif'; // Replace with actual image paths
import Drinks5 from '../assets/cocktails.avif'; // Replace with actual image paths

const Overlay = styled.div<{ show: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const MenuContainer = styled.div`
  padding: 60px 20px;
  background-color: #fff;
  color: #333;
  min-height: 100vh;
  font-family: 'Poppins';
  position: relative;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 30px;
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
    margin-bottom: 20px;
  }
`;

const MenuItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 15px 0;
    font-size: 1.3em;
    color: #222;

    @media (max-width: 768px) {
      font-size: 1.1em;
      margin: 10px 0;
    }
  }

  p {
    margin: 10px 0;
    font-size: 1em;
    color: #666;
    line-height: 1.4;

    &:last-of-type {
      font-weight: bold;
      color: #000;
      font-size: 1.2em;
      margin-top: 15px;
    }

    @media (max-width: 768px) {
      font-size: 0.9em;
      margin: 8px 0;
      
      &:last-of-type {
        font-size: 1.1em;
        margin-top: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin: 10px;
  }
`;

const MenuImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const Button = styled.button`
  margin-top: 15px;
  margin-left: 20px;
  padding: 12px 24px;
  font-size: 1em;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #333;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    margin: 10px auto;
    padding: 10px 20px;
    font-size: 0.9em;
    width: 80%;
    justify-content: center;
  }
`;

const DropdownMenu = styled.div.attrs<{ show: boolean }>(({ show }) => ({
  style: {
    display: show ? 'block' : 'none',
  },
}))<{ show: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  color: #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 1000;
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    border-radius: 0;
    top: auto;
    bottom: 0;
    max-height: 50vh;
    overflow-y: auto;
  }
`;

const DropdownItem = styled.div`
  padding: 15px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background-color: #000000;
  }

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

type Category = {
  image: string;
  title: string;
  description: string;
  price: string;
};

const categories: { [key: string]: Category[] } = {
  Appetizers: [
    { image: AppetizerImage1, title: 'Salads', description: 'Delicious cheese pizza with fresh toppings.', price: '$10' },
    { image: AppetizerImage2, title: 'Caesar Salad', description: 'Crispy romaine lettuce with Caesar dressing.', price: '$12' },
    { image: AppetizerImage3, title: 'Garden Salad', description: 'Fresh garden vegetables with vinaigrette.', price: '$8' },
    { image: AppetizerImage4, title: 'Chicken Salad', description: 'Crispy chicken salad with lettuce and cruttons.', price: '$15' },
    { image: AppetizerImage5, title: 'Parmesan Salad', description: 'Crispy chicken salad with roasted cheese.', price: '$14' },
  ],
  'Main Course': [
    { image: Main5, title: 'Meat Dishes', description: 'Fresh garden salad with a variety of vegetables.', price: '$20' },
    { image: Main4, title: 'Rice', description: 'Crispy cheese sticks with marinara sauce.', price: '$18' },
    { image: Main3, title: 'Fried Mozzarella', description: 'Golden fried mozzarella with dipping sauce.', price: '$16' },
    { image: Main2, title: 'Vegetarian Sticks', description: 'Crispy cheese sticks with tomatoes.', price: '$17' },
    { image: Main1, title: 'Seafood Sticks', description: 'Crispy cheese sticks with seafood.', price: '$22' },
  ],
  'Side Dishes': [
    { image: SideDish1, title: 'Plain Chps', description: 'Delicious cheese pizza with fresh toppings.', price: '$10' },
    { image: SideDish2, title: 'Burger and chips', description: 'Crispy romaine lettuce with Caesar dressing.', price: '$12' },
    { image: SideDish3, title: 'Garden Salad', description: 'Fresh garden vegetables with vinaigrette.', price: '$8' },
    { image: SideDish4, title: 'Garlic Bread', description: 'Crispy chicken salad with lettuce and cruttons', price: '$15' },
    { image: SideDish5 , title: 'Chicken Parmesan Salad', description: 'Crispy chicken salad with roasted cheese.', price: '$14' },
  ],
  'Drinks': [
    { image: Drinks1, title: 'Cocktails', description: 'A mix of fresh ingredients for a refreshing drink.', price: '$5' },
    { image: Drinks2, title: 'Smoothies', description: 'A creamy blend of fruits, yogurt, or milk', price: '$6' },
    { image: Drinks3, title: 'Coffee', description: '  A frozen blend of fruits and ice for a cool treat.', price: '$4' },
    { image: Drinks4, title: 'Wine', description: 'A refined drink made from fermented grapes.', price: '$7' },
    { image: Drinks5, title: 'Icy smoothies', description: 'A frozen blend of fruits and ice for a cool treat', price: '$8' },
  ],
};

function Menu() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<keyof typeof categories>('Appetizers');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCategoryChange = (category: keyof typeof categories) => {
    setCurrentCategory(category);
    setShowDropdown(false);
  };

  return (
    <MenuContainer>
      <Title>Our Menu</Title>
      <Button onClick={toggleDropdown}>
        Food categories
        <span>{showDropdown ? '▼' : '▲'}</span>
      </Button>
      <Overlay show={showDropdown} onClick={() => setShowDropdown(false)} />
      <DropdownMenu show={showDropdown}>
        {Object.keys(categories).map((category) => (
          <DropdownItem key={category} onClick={() => handleCategoryChange(category as keyof typeof categories)}>
            {category}
          </DropdownItem>
        ))}
      </DropdownMenu>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {categories[currentCategory]?.map((item, index) => (
          <SwiperSlide key={index}>
            <MenuItem>
              <MenuImage src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <Button>Order Now</Button>
            </MenuItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </MenuContainer>
  );
}

export default Menu;