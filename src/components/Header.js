import { SITE_LOGO_URL } from "../util/cdn";
import { useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
  
  const[reactLoginBtn, setReactLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo">
          <img src={SITE_LOGO_URL}></img>
        </div>
  
        <div className="navitems">
          <ul>
            <li>Online Status: {onlineStatus === true? "✅":"❌"}</li>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/contact"}>Contact us</Link></li>
            <li><Link to={"/about"}>About us</Link></li>
            <li><Link to={"/"}>Cart</Link></li>
            <li><Link to={"/grocery"}>Grocery</Link></li>
            <li><button className="login" onClick={()=>{
              reactLoginBtn === "Login" ? setReactLoginBtn("Logout") : setReactLoginBtn("Login")
            }}>{reactLoginBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;