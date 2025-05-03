import React from 'react';

const Hero = ({ onBook }) => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Welcome to Fin-Trek!</h1>
      <p>Click below to book your financial travel package.</p>
      <button onClick={onBook}>Book Now</button>
    </div>
  );
};

export default Hero;
