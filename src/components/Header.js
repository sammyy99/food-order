import { SITE_LOGO_URL } from "../util/cdn";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;