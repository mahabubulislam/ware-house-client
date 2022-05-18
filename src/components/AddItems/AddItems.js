import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
const AddItems = () => {
    const [addItem, setAddItem] = useState({});

    const [user] = useAuthState(auth);
    const email = user?.email;
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const supplier = e.target.supplier.value.toUpperCase();
        const description = e.target.description.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const items = { email, name, supplier, description, img, price, quantity }
        console.log(items)
        setAddItem(items);
        e.target.reset()

        //  add data to firebase
        fetch('https://peaceful-dawn-20015.herokuapp.com/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
    };



    return (
        <div className='my-10'>
            <h1 className='text-4xl my-10 text-center text-green-500'>Add item</h1>
            <form onSubmit={handleSubmit} className='w-3/4 mx-auto'>
                <input className='block border-2 w-full mb-1' name='name' placeholder='Products name' required />
                <input className='block border-2 w-full mb-1 uppercase' name='supplier' placeholder='Supplier name' required />
                <textarea className='block border-2 w-full mb-1' name='description' placeholder='Description' required />
                <input className='block border-2 w-full mb-1' name='img' placeholder='Product image link' required />
                <input className='block border-2 w-full mb-1' name='price' type="number" placeholder='Price' required />
                <input className='block border-2 w-full mb-1' name='quantity' type="number" placeholder='Quantity' required />
                <input className='block border-2 w-1/3 mx-auto cursor-pointer hover:bg-green-400' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;