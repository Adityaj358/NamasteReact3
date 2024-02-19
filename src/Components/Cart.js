import { UseSelector, useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemsList";
import { clearCart } from "../../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const Dispatch = useDispatch();

  const handleClearCart = () => {
    Dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Card</h1>
      <div className="w-6/12 m-auto p-4 border border-blue-950">
        <button className="p-2 m-2 bg-blue-900 text-white rounded-lg" onClick={handleClearCart }>
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Cart is empty. Add items to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
