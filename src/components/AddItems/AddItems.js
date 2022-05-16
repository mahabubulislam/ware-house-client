import React from 'react';
import { useForm } from "react-hook-form";
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=''>
            <h1 className='text-4xl mr-3'>Add items</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 mx-auto'>
                <input className='block border-2 w-full mb-1' {...register("name", { pattern: /^[A-Za-z]+$/i })} placeholder='Products name' />
                <input className='block border-2 w-full mb-1' {...register("supplier")}  type='' placeholder='Supplier name' />
                <textarea className='block border-2 w-full mb-1' {...register("description")} placeholder='Description' />
                <input className='block border-2 w-full mb-1' {...register("img")} placeholder='Product image link' />
                <input className='block border-2 w-full mb-1' {...register("price")} type="number" placeholder='Price' />
                <input className='block border-2 w-full mb-1' {...register("quantity")} type="number" placeholder='Quantity' />
                <input className='block border-2 w-1/2 mx-auto' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;