import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div className="flex justify-center gap-10">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-normal p-10">

        <div className="">
          <div className="font-bold text-green-600 text-xl">Your Cart</div>
          <div className="font-bold text-green-600 text-3xl">Summary</div>
          <p>
            <span>Total Items: <span className="font-bold">{cart.length}</span></span>
          </p>
        </div>

        <div>
          <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
          <button className="bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold border rounded-md px-4 py-2 mt-4">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center items-center h-screen">
      <h1 className="font-bold text-green-600 text-3xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 hover:bg-white hover:text-green-600 text-white font-bold border rounded-md px-4 py-2 mt-4">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
