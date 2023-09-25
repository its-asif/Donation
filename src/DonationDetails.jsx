import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const allData = useLoaderData();
    const {id} = useParams();
    const details = allData[id-1];
    console.log(details);

    return (
        <div>
            <div className="m-20 rounded-md">
                <div className="relative">
                    <img src={details.picture_rec} className="w-full"/>
                    <div className="bg-black bg-opacity-40 text-white p-8 text-xl absolute bottom-0 w-full ">
                        <button className="p-3 rounded-md" 
                        style={{backgroundColor : details.text_and_button_bg_color}}
                        >Donate ${details.price}</button>
                    </div>
                </div>

                <h1 className="text-4xl font-bold mt-12">{details.title}</h1>
                <p className="mt-6 font-xl text-slate-600">{details.description}</p>
            </div>            
        </div>
    );
};

export default DonationDetails;