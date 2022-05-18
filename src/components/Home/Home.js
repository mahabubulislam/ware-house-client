import React from 'react';
import Carousel from '../Carousel/Carousel'
import Contact from '../ContactUs/Contact';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Items></Items>
            <Contact></Contact>

        </div>
    );
};

export default Home;