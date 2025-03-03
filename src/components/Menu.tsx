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

const MenuContainer = styled.div`
  padding: 10px;
  background-color: #fff;
  color: #333;
  height: 100vh;
  font-family: 'Poppins';

  @media (max-width: 1024px) {
height: 50vh;
  }

  @media (max-width: 768px) {
height: 100vh;
  }
`;

const Title = styled.h2`
  font-size: 1em;
  margin-bottom: 10px;
  margin-left: 20px;
`;

const MenuItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
`;

const MenuImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: #0000008b;
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
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #000000;
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
        <DropdownMenu show={showDropdown}>
          {Object.keys(categories).map((category) => (
            <DropdownItem key={category} onClick={() => handleCategoryChange(category as keyof typeof categories)}>
              {category}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Button>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
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
              <Button>Order</Button>
            </MenuItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </MenuContainer>
  );
}

export default Menu;