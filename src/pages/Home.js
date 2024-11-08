import React from 'react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div className="home">
      <HeroSlider />
      <h2>Featured Animals</h2>
      {/* Display featured animals here */}
    </div>
  );
};

export default Home;
