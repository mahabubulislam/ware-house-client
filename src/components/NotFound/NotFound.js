import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-full my-10'>
            <img className='w-3/12 mx-auto block' src="https://i.ibb.co/jbBZrkn/notfound.png" alt="" />
            <Link className='block w-1/12 mx-auto p-3 bg-green-600 rounded-md text-center' to='/'> Go to home</Link>
        </div>
    );
};

export default NotFound;