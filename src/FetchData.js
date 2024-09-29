import React, { useEffect, useState } from 'react';

function FetchData() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://zinny.pythonanywhere.com/api/agendas/')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;