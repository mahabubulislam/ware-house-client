import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row-reverse justify-between items-center '>
            <img src="https://i.ibb.co/7K2QFXj/about.png" alt="" />
            <div className='p-5'>
                <h4 className='text-center text-2xl my-10'>About us</h4>
                <p>Smart Inventory is a dynamic web application for store products. </p>
                <p>The Warehouse store to become the country’s largest general merchandise retailer. Our brands include The Warehouse, Warehouse Stationery</p>
            </div>
            
        </div>
    );
};

export default About;