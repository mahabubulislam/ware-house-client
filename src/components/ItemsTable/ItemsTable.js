import React from 'react';

const ItemsTable = ({ item }) => {
    const { name, supplier, img, description, price, quantity } = item
    return (
        <tr className="bg-gray-100 border-b">
            <td className="flex justify-between items-center border-slate-300 text-sm text-gray-900 font-light px-6 py-4 ">
                {
                    name
                }
                <img className='w-5 mx-5' src={img} alt="" />
            </td>
            <td className="border border-slate-300 text-sm text-gray-900 font-light px-6 py-4">
                {
                    supplier
                }
            </td>
            <td className="border border-slate-300 text-sm text-gray-900 font-light px-6 py-4" title={description}>
                {
                    description.slice(0, 45)
                }
                ...
            </td>
            <td className="border border-slate-300 text-sm text-gray-900 font-light px-6 py-4">
                {
                    price
                }
            </td>
            <td className="border border-slate-300 text-sm text-gray-900 font-light px-6 py-4">
                {
                    quantity
                }
            </td>
            <td className="border border-slate-300 text-sm text-gray-900 font-light px-6 py-4">
                <button className='bg-red-700 mx-2 p-3'>X</button>
                <button className='bg-yellow-400 mx-2 p-3'>Manage</button>
            </td>
        </tr>

    );
};

export default ItemsTable;