import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setUserName(null); // clear user
    setShowMenu(false);
  };

  return (
    <div className="header flex justify-between bg-green-200 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="logo-container ml-2">
        <img className="logo w-25 rounded-xl" src={LOGO_URL} alt="logo"/>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          {/*  Login/Signup OR Username with Dropdown */}
          <li className="px-4 relative">
            {!loggedInUser ? (
              <Link
                to="/login"
                className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Login / Signup
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="font-bold text-blue-400 hover:font-extrabold"
                >
                  {loggedInUser} ▼
                </button>

                {/* Dropdown */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;