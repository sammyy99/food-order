import { SITE_LOGO_URL } from "../util/cdn";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  const [reactLoginBtn, setReactLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between bg-orange-500 shadow-2xl p-4">
      <div className="w-20">
        <img src={SITE_LOGO_URL} alt="Site Logo" className="h-10" />
      </div>

      <div className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6">
          <li className="flex items-center">
            Online Status: {onlineStatus === true ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="px-4 py-2 rounded bg-white text-orange-500 border border-orange-500 hover:bg-white hover:text-orange-500"
              onClick={() => {
                setReactLoginBtn(
                  reactLoginBtn === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {reactLoginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
