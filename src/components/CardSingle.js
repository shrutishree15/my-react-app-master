import React from 'react';
import './Card.scss'; 
import ImgSrc from  "./photo_intern.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";


import { FaAngleDown } from "react-icons/fa6";

const CardSingle = ({ imageIcon, count, imageDesc, heading1, heading2, description1, description2, number, label, numberOfStars }) => {
    const orangeButtonClass = number === 3 || number === 4 ? 'orange-button white' : 'orange-button';
    
  const stars = [];
  const fullStars = Math.floor(numberOfStars);
  const hasHalfStar = numberOfStars - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalf key={fullStars} />);
  }

  return (
    <div className="full-width-card">
      <div className="top-left">
        <button className={orangeButtonClass}>
          {imageIcon} 
          <p>{imageDesc}</p>
        </button>
        <div className="count">{number}</div>
      </div>
    
      <img src={ImgSrc} alt="Card" className='image'/>
      <p className='img-text'>Builder</p>

      <div className="card-text-container">
        <div className='heading-container'>
          <span className="title">{heading1}</span>
          <span className="description">{description1}</span>
        </div>
  
        <div className="title2">{heading2}</div>
        <div className="description2">{description2}</div>
        <button className="show-more">Show More <FaAngleDown /></button>
      </div>

      <div className="right-content">
        <div className="blue-box">
          <div className="blue-box-content">
            <p className='counti'> {count}</p>
            <p>{label}</p>
            <div className="stars">{stars}</div>
          </div>
        </div>
        <button className="blue-button">View</button>
      </div>
    </div>
  );
};

export default CardSingle;
