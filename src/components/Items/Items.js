import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItem';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const Items = () => {
    const { items, loading } = useItems();
    return (
        <>
            {
                loading ? <Loading></Loading>
                    :
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto my-10 gap-5'>
                            {
                                items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                            }
                        </div>
                        <Link className='bg-red-100 p-5 block w-1/5 mx-auto text-center' to='/items'>All items</Link>
                    </div>
            }
        </>
    );
};

export default Items;