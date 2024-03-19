"use client"
import React from 'react';

interface VerticalCard {
  image: string;
  title: string;
  description: string;
}

const scrollToSection = () => {
  const section = document.getElementById('CallBack');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const VerticalCardList: React.FC<{ cards: VerticalCard[] }> = ({ cards }) => {
  return (
    <div className="poppins-semibold bg1">
    <div className="vertical-card-list">
      {cards.map((card, index) => (
        <div key={index} className="vertical-card">
          <div className="vertical-card-content">
            <h3 className="vertical-card-title">{card.title}</h3>
            <p className="vertical-card-description">{card.description}</p>
            <button onClick={scrollToSection} className="vertical-card-button">Pricing</button>
          </div>
          <img src={card.image} alt={card.title} className="vertical-card-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default VerticalCardList;