import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    return (
        <div className="res-card">
            <img className="res-logo" 
            alt="res-logo" src={CDN_URL + resData.cloudinaryImageId}/>
            <h3> {resData.name} </h3>
            <h4> {resData.cuisines.join(", ")} </h4>
            <h4> {resData.avgRating} stars </h4>
            <h5> Delivery time {resData.sla.deliveryTime} mins </h5>
        </div>
    )
};

export default RestaurantCard;