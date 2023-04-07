import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h1>heelo i am from Home : {tshirts.length}</h1>
        </div>
    );
};

export default Home;