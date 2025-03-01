import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) =>(
                <div key={item.card.info.id} className="p-4 m-2 flex border border-gray-200 border-b-2 text-left">
                    
                    <div className="w-9/12">
                        <div className="p-2"> 
                            <span> {item.card.info.name}</span> 
                            <span> ₹ - 
                                {item.card.info.price ? 
                                    item.card.info.price /100 
                                    : item.card.info.defaultPrice /100}</span>
                        </div>
                        <p className="text-xs p-2"> {item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-2">
                        <div className="absolute">
                            <button className="p-2 text-green-500 rounded-md bg-white shadow-lg hover:bg-black"
                                onClick={() => handleAddItem(item)}>
                                Add +</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="w-full" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;