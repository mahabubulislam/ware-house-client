import React from 'react';


const Item = ({ item }) => {
    const { name, supplier, description, img, price, quantity } = item
    return (
        <>
            <div className='flex flex-col justify-center items-center border-2 py-5 rounded-t-2xl'>
                <img className='rounded-md w-1/2 mx-auto' src={img} alt="" />
                <div className='p-3'>
                    <h3><span className='font-bold'>Name: </span>{name}</h3>
                    <h4><span className='font-bold'>Supplier Name: </span>{supplier}</h4>
                    <p>{description}</p>
                    <h5><span className='font-bold'>Price: </span>${price}</h5>
                    <p><spanc className='font-bold'>Quantity</spanc> {quantity}</p>
                    <button className='bg-blue-200 my-3 p-3 text rounded-md'>Manage Item</button>
                </div>
            </div>

        </>
    );
};

export default Item;