import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateItem = () => {
    const [updateItem, setUpdateItem] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setUpdateItem(data)
        reset()
    };
    const { id } = useParams();
        const url = `http://localhost:5000/items/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    
    console.log(updateItem);
    return (
        <div>
            <h1>Updating user {id}</h1>
            <div className='my-10'>
                <h1 className='text-4xl my-10 text-center text-green-500'>Update items</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 mx-auto'>
                    <input className='block border-2 w-full mb-1' {...register("name")} placeholder='Products name' required />
                    <input className='block border-2 w-full mb-1 uppercase' {...register("supplier")} placeholder='Supplier name' required />
                    <textarea className='block border-2 w-full mb-1' {...register("description")} placeholder='Description' required />
                    <input className='block border-2 w-full mb-1' {...register("img")} placeholder='Product image link' required />
                    <input className='block border-2 w-full mb-1' {...register("price")} type="number" placeholder='Price' required />
                    <input className='block border-2 w-full mb-1' {...register("quantity")} type="number" placeholder='Quantity' required />
                    <input className='block border-2 w-1/3 mx-auto cursor-pointer hover:bg-green-400' type="submit" value="Update Item" />
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;