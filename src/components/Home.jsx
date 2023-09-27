import { useState, useEffect } from 'react';
import Header from './Header';
import AllCards from './AllCards';
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const [cards, setcards] = useState([]);
    
    useEffect(() => {
        fetch("data.json")
          .then( res => res.json())
          .then( data => setcards(data));
      }, []);

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