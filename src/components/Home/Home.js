import React from 'react';
import Carousel from '../Carousel/Carousel'
import Contact from '../ContactUs/Contact';
import Items from '../Items/Items';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Items></Items>
            <Contact></Contact>
            <Welcome></Welcome>
        </div>
    );
};

export default Home;