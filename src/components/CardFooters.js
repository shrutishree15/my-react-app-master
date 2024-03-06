import React from 'react';
import CardFooter from './CardFooter';
import './CardFooters.scss'; // Import the SCSS file

const CardFooters = () => {
  return (
    <div>
      <p className="related-deals">Related deals you might like for</p>
      <div className='card-container'>
        <CardFooter />
        <CardFooter />
        <CardFooter />
      </div>
    </div>
  );
};

export default CardFooters;
