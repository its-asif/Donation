

const DonatedCard = ({data}) => {
    console.log(data);
    const {title, picture_sq, price, category, card_bg_color, category_bg_color, text_and_button_bg_color} = data;

    return (

        <div>
            <div className="card card-side mx-5" style={{backgroundColor : card_bg_color}}>
            <figure><img src={picture_sq} alt="Movie"/></figure>
            <div className="card-body">
                <p className="w-fit p-2 rounded-md font-semibold mb-2" 
                style={{backgroundColor : category_bg_color, color: text_and_button_bg_color}}
                >{category}</p>
                <h2 className={`card-title font-semibold text-3xl my-1`}>{title}</h2>
                <p className="font-bold text-xl"
                style={{color : text_and_button_bg_color}}>${price}</p>
                <div className="card-actions">
                <button className="btn text-white font-bold text-lg my-2"
                style={{backgroundColor : text_and_button_bg_color}}
                >View Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DonatedCard;