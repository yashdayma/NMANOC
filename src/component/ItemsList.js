import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        axios.get('/items')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, []);

    const addItem = () => {
        axios.post('/items', { name, quantity })
            .then(res => setItems([...items, res.data]))
            .catch(err => console.error(err));
    };

    const updateItem = id => {
        axios.put(`/items/${id}`, { name, quantity })
            .then(res => {
                setItems(items.map(item => (item._id === id ? res.data : item)));
                setEditId(null);
            })
            .catch(err => console.error(err));
    };

    const deleteItem = id => {
        axios.delete(`/items/${id}`)
            .then(() => setItems(items.filter(item => item._id !== id)))
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>NMA Applications </h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} placeholder="Quantity" />
            {editId ? (
                <button onClick={() => updateItem(editId)}>Update Item</button>
            ) : (
                <button onClick={addItem}>Add Application</button>
            )}
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.quantity}
                        <button onClick={() => {
                            setName(item.name);
                            setQuantity(item.quantity);
                            setEditId(item._id);
                        }}>Edit</button>
                        <button onClick={() => deleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
