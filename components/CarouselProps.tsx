"use client"
import React, { useState } from 'react';
import Card from './Card';

interface CarouselProps {
  cards: { imageUrl: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div  id="Marbella" className="carousel">
      <button onClick={goToPreviousCard}>{'<'}</button>
      <Card imageUrl={cards[currentCardIndex].imageUrl} />
      <button onClick={goToNextCard}>{'>'}</button>
    </div>
  );
};

export default Carousel;
