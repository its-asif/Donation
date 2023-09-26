import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../utility/localstorage";
import DonatedCard from "./DonatedCard";
import { useEffect, useState } from "react";


const Donation = () => {
    const allData = useLoaderData();
    const donatedIds = getStoredDonations();
    const [dataLength, setDataLength] = useState(4);

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
        <div className="mb-20">
            <div className="grid grid-cols-2 m-16">
            {
                donatedCatagory.slice(0, dataLength).map(x => <DonatedCard data = {x} ></DonatedCard>)
            }
            </div>
            <div className={`text-center ${dataLength === donatedCatagory.length ? 'hidden' : ''}`}>
            <button className=" text-2xl p-4 px-6 rounded-md font-bold bg-[#009444] text-white "
                onClick={() => setDataLength(donatedCatagory.length)}
            >See All</button>
            </div>
        </div>
    );
};

export default Donation;