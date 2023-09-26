import { useEffect } from "react";
import Card from "./Card";
import { searchedKey } from "./filterBySearch";


const AllCards = ({cards}) => {


    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 m-16">
                {
                    cards.map(x => <Card key={x.id} x={x}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCards;