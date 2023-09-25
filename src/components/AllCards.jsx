import { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";


const AllCards = ({cards}) => {
    

    return (
        <div>
            <div className="grid grid-cols-4 m-16">
                {
                    cards.map(x => <Card key={x.id} x={x}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCards;