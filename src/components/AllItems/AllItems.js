import React from 'react';
import useItems from '../../hooks/useItem';
import ItemsTable from '../ItemsTable/ItemsTable';
import Loading from '../Loading/Loading';

const AllItems = () => {
    const { items, loading } = useItems();
    return (
        <>
            {
                loading ? <Loading></Loading>
                    :
                    <div>
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
            }

        </>

    );
};

export default AllItems;