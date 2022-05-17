import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const [updateItem, setUpdateItems] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setUpdateItems(data);
        reset()
    };
    // Post data
    useEffect(() => {
        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
    }, [updateItem])

    return (
        <div className='my-10'>
            <h1 className='text-4xl my-10 text-center text-green-500'>Add items</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 mx-auto'>
                <input className='block border-2 w-full mb-1' {...register("name")} placeholder='Products name' required />
                <input className='block border-2 w-full mb-1 uppercase' {...register("supplier")} placeholder='Supplier name' required />
                <textarea className='block border-2 w-full mb-1' {...register("description")} placeholder='Description' required />
                <input className='block border-2 w-full mb-1' {...register("img")} placeholder='Product image link' required />
                <input className='block border-2 w-full mb-1' {...register("price")} type="number" placeholder='Price' required />
                <input className='block border-2 w-full mb-1' {...register("quantity")} type="number" placeholder='Quantity' required />
                <input className='block border-2 w-1/3 mx-auto cursor-pointer hover:bg-green-400' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;