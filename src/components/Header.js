import { SITE_LOGO_URL } from "../util/cdn";
import { useState} from "react";

const Header = () => {
  
  const[reactLoginBtn, setReactLoginBtn] = useState("Login");

    return (
      <div className="header">
        <div className="logo">
          <img src={SITE_LOGO_URL}></img>
        </div>
  
        <div className="navitems">
          <ul>
            <li>Home</li>
            <li>Orders</li>
            <li>Cart</li>
            <li>About us</li>
            <li><button className="login" onClick={()=>{
              reactLoginBtn === "Login" ? setReactLoginBtn("Logout") : setReactLoginBtn("Login")
            }}>{reactLoginBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;