import { useState, useContext } from "react";
import Logo from "../Assets/img/foodVilla.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // Let's make a state variable for login and update it to logout if we click on it
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(userContext);

  const cartItem = useSelector((store) => store.cart.items); //suscribing a store

  // when we use state variable and call it, it rerender the whole header not just btn
  // How this const variable is getting changed?
  // when we call the state variable, the header will rerender and create a new varibale to store the login/logout text.
  // it checks the whole code and update the difference

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm: bg-yellow-50 lg:bg-green-50">
      <div className="Logo_Container">
        <Link to="/">
        <img className="w-26" src={Logo} />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            
            <Link to="/cart">🛒-({cartItem.length} items) </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
              // setLoginBtn("Logout")
            }}
          >
            {loginBtn}
          </button>

          <li className="px-4 font-semibold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

// Export Hearder from this file and import in the app.js
export default Header;
