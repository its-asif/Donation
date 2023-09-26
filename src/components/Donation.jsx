import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utility/localstorage";
import DonatedCard from "./DonatedCard";
import { useEffect, useState } from "react";


const Donation = () => {
    const allData = useLoaderData();
    const donatedIds = getStoredDonations();

    const [ donatedCatagory, setDonatedCatagory] = useState([]);

    useEffect(() =>{
        const donationApplied = [];

        for(const id of donatedIds){
            const exists = allData.find( x => x.id == id);
            if(exists){
                donationApplied.push(exists);
            }
        }
        setDonatedCatagory(donationApplied);
    },[])


    return (
        <div>
            <div className="grid grid-cols-2 m-16">
                {
                    
                    donatedCatagory.map(x => <DonatedCard data = {x} ></DonatedCard>)
                }
            </div>
        </div>
    );
};

export default Donation;