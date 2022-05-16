import React from 'react';
import useItems from '../../hooks/useItem';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useItems();
    return (
        <div className='grid grid-cols-3 w-4/5 mx-auto my-10 gap-5'>
            {
                items.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default Items;