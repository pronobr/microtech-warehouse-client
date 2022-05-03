import React from 'react';
import About from './About/About';
import Hero from './Hero/Hero';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Inventory></Inventory>
           <About></About>
        </div>
    );
};

export default Home;