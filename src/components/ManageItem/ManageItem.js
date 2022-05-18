import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ManageItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState(true)
    const { name, supplier, description, img, price, quantity } = item;
    const previousQuantity = parseFloat(quantity);


    const url = `https://peaceful-dawn-20015.herokuapp.com/manage/${id}`;
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItem(data);
                setLoading(false)
            })
    }, [reload, url]);

    const saveQuantityToDb = quantity => {
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(data => {
                setReload(!reload)
            })
    }
   
    const decreaseQuantity = () => {
        const quantity = previousQuantity - 1;
     
        saveQuantityToDb(parseFloat(quantity))

    };
    const handleRestock = e => {
        e.preventDefault()
        const stock = parseInt(e.target.stock.value);
  
        saveQuantityToDb(stock+previousQuantity)
    }






    return (
        <>
            {
                loading ? <Loading /> :

                    <div className='my-10'>
                        <h1 className='text-3xl my-3 text-center text-red-600'>Managing Item Id: {id}</h1>

                        <div className='flex flex-col justify-center items-center py-5 '>
                            <img className='rounded-md ' src={img} alt="" />
                            <div className='p-3'>
                                <h3><span className='font-bold'>Name: </span>{name}</h3>
                                <h4><span className='font-bold'>Supplier Name: </span>{supplier}</h4>
                                <p>{description}</p>
                                <h5><span className='font-bold'>Price: </span>${price}</h5>
                                <p><span className='font-bold'>Quantity:</span> {quantity}</p>
                                <button onClick={decreaseQuantity} className='bg-blue-300 hover:bg-blue-600 text-white p-2 rounded-md'>{quantity>0? 'Delivered' : 'Stock Out'}</button>
                                <form onSubmit={handleRestock}>
                                    <input type="number" name="stock" min="0" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1" placeholder="Restock" />
                                    <input type="submit" value="Restock" className='bg-red-300 p-2 rounded-md cursor-pointer'  />
                                </form>
                                <Link className='bg-green-300 p-2 block w-1/4 mx-auto rounded-md text-center' to="/additem">Add Item</Link>
                                <Link className='bg-red-300 p-2 block w-1/4 mx-auto rounded-md text-center' to="/myitems">Manage Item</Link>
                            </div>
                        </div>

                    </div>
            }
        </>
    );
};

export default ManageItem;