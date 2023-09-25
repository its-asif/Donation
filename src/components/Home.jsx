import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import AllCards from './AllCards';
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Header/>
            <AllCards cards ={cards}></AllCards>
        </div>
    );
};

export default Home;