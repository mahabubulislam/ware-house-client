import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-evenly items-center '>
            <div className='p-5'>
                <h4 className='text-center text-2xl my-10 text-green-500'>New to Smart Inventory?</h4>
                <p>Register for free</p>
                <Link className='bg-blue-500 p-3 text-center rounded-md block my-4' to='/signup'>Register</Link>
            </div>
            <img src="https://i.ibb.co/ZS4pt76/welcome.png" alt="" />
        </div>
    );
};

export default Welcome;