import { Link } from 'react-router-dom';
import useItems from '../../hooks/useItem';

const ItemsTable = ({ item }) => {
    const [items, setItems] = useItems()
    const { name, supplier, img, description, price, quantity } = item ;
    const deleteItem = id => {
        const url = `https://peaceful-dawn-20015.herokuapp.com/items/${id}`
        const procced = window.confirm('Are you sure to delete this item?')
        if (procced) {
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining)
                    }
                })
        }
    }
    return (
        <tr className="bg-gray-100 border-b">
            <td className="flex justify-between items-center border-slate-300 text-sm text-gray-900 font-light px-6 py-4 ">
                {
                    name
                }
                <img className='w-5 mx-5' src={img || 'https://i.ibb.co/jHVxJvv/phone.png'} alt="" />
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
                <button onClick={() => deleteItem(item._id)} className='bg-red-700 mx-2 p-3'>X</button>
                <Link to={`manage/${item?._id}`} className='bg-yellow-400 mx-2 p-3'>Manage</Link>
            </td>
        </tr>

    );
};

export default ItemsTable;