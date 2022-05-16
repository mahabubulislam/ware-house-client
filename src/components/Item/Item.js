import React from 'react';

const Item = ({ item }) => {
    const { name, img, price } = item
    return (
        <div className='flex flex-col justify-center items-center border-2 py-5 rounded-t-2xl'>
            <img className='rounded-md w-1/2 mx-auto' src={img} alt="" />
            <div>
                <h3>Name:{name}</h3>
                <h5>Price: ${price}</h5>
            </div>
            <div>
                <button className='bg-blue-300 mx-3 p-3 text'>Update Item</button>
                <button className='bg-blue-200 mx-3 p-3 text'>Manage Item</button>
            </div>
        </div>
    );
};

export default Item;