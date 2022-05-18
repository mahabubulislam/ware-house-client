import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ItemsTable from '../ItemsTable/ItemsTable';


const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth)
    const email = user?.email
    const url = `https://peaceful-dawn-20015.herokuapp.com/myitems?email=${email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items, url])

    return (
        <div>
            <h1 className='text-center text-3xl text-green-400'>My Items {items?.length}</h1>
            <table className="border-collapse border border-slate-400 table-fixed min-w-full">
                <thead className="bg-white border-b">
                    <tr>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Name
                        </th>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Supplier Name
                        </th>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Description
                        </th>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Price
                        </th>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Quantity
                        </th>
                        <th className="border border-slate-300 text-sm font-medium text-gray-900 px-2 py-2 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <ItemsTable key={item._id} item={item}></ItemsTable>)
                    }
                </tbody>
            </table>


        </div>
    );
};

export default MyItems;