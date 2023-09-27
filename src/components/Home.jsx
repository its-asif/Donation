import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AllCards from './AllCards';
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const cards = useLoaderData();

    const [searchKey, setSearchKey] = useState('');

    const handleSearch = (sKey) =>{
        setSearchKey(sKey);
    }

    return (
        <div>
            <Header onSearch = {handleSearch}/>
            <AllCards searchKey={searchKey} cards ={cards}></AllCards>
        </div>
    );
};

export default Home;