import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div>
      <div className="flex items-center border-b-2 w-[420px]">

        <div className="h-[180px] w-[180px] p-3">
          <img src={item.image} className="h-full w-full" alt={item.title} />
        </div>

        <div className="flex flex-col space-y-2 ml-4">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0, 5).join(" ") + "..."}</h1>
          
          <div className="flex items-center justify-between w-40">
            <p className="font-bold text-green-600">${item.price}</p>
            <div onClick={removeFromCart} className="cursor-pointer rounded-full bg-red-400">
              <FcDeleteDatabase className="text-red-500 w-6 h-6 p-1" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CartItem;
