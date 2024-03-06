import React from 'react';
import './CardFooter.scss';
import ImgSrc from  "./photo_intern.png";
const CardFooter = () => {
  return (
    <div className="card">
     <img src={ImgSrc} alt="img" className="card-image" />

      <div className="card-content">
        <div className="discount">20% Off</div>
        <div className="time">Limited time</div>
      </div>
      <p className="title">Webbuilder 1</p>
      <p className="description">Computer Modern classic with wix support</p>
      <div className="price-container">
        
        <div className="new-price">$39.96</div>
        <div className="old-price">$49.96</div>
        <div className="discount-label">(20% Off)</div>
      </div>
      <button className="button">View Deal</button>
    </div>
  );
};

export default CardFooter;
