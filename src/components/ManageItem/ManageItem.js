import React from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const {id} = useParams()
    return (
        <div>
            <p>Managing {id}</p>
        </div>
    );
};

export default ManageItem;