import React, { useState } from 'react';

const Header = () => {
    const [name, setName] = useState('Tamilselvan');

    const handleClick = () => {
        setName('welcome to my website');
    };

    return (
        <header style={{
            backgroundColor: 'blue', 
            padding: '10px',
            color: 'white',
            animation: 'App-logo-spin infinite 20s linear'
        }}>
            <div className="container">
                <h1>Header</h1>
                <h2 style={{color:'red'}}>{name}</h2> {/* Display dynamic name */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus doloribus nobis ab maxime autem distinctio id voluptas quas esse! Ipsum quia adipisci laudantium placeat dolorem porro officia temporibus vitae.</p>
                <button onClick={handleClick}>Click me</button>
            </div>
        </header>
    );
};

export default Header;

