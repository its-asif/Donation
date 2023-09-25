import { Link } from "react-router-dom";

const Card = ({x}) => {
    const {id, picture_rec, category, title, card_bg_color, category_bg_color, text_and_button_bg_color} = x;
    console.log(x.card_bg_color);
    
  return (
    <div className="mx-5 mb-12">
        <Link to={`/donationDetails/${id}`}>
      <div className={`card w-full  h-full`} style={{backgroundColor : x.card_bg_color}}>
        <figure>
          <img
            src={picture_rec}
            className="w-full"
          />
        </figure>
        <div className="m-5">
            <p className="w-fit p-2 rounded-md font-semibold mb-2" style={{backgroundColor : x.category_bg_color, color: x.text_and_button_bg_color}}>{category}</p>
          <h2 className={`card-title`}  style={{color : x.text_and_button_bg_color}}>{title}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
