import React from 'react';
import './SignUp.scss'; 


const SignUp = () => {
  const handleSearch = () => {
    console.log('Search button clicked');
  };

  return (
    <div className="SignUp-container">
      <div className="left-content">
        <p className="signup-text">Sign up and get exclusive special deals</p>
      </div>
      <div className="right-content">
        <div className="input-container">
          <input
            type="text"
            className="input-field"
          />
          <button
            onClick={handleSearch}
            className="signup-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;