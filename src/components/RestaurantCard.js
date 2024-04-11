import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
        <div className="m-4 p-4 w-[250px] bg-slate-200 rounded-lg">
            <img className="rounded-lg" 
            alt="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>  {resData?.info?.name} </h3>
            <h4> {resData?.info?.cuisines.join(", ")} </h4>
            <h4> {resData?.info?.avgRating} stars </h4>
            <h5> Delivery time {resData?.info?.sla?.deliveryTime} mins </h5>
        </div>
    )
};

//Higher order Component

//Input -> RestaurantCard =>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute mx-5 p-2 bg-black text-white rounded-md"> Promoted </label>
                <RestaurantCard {...props}/>
            </div>
        )
    };
};

export default RestaurantCard;