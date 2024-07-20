import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='container'>
      <div className="header-advert">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link to="/shopnow">Shop Now</Link>
      </div>
      <select name="language" id='language'>
        <option value="english">English</option>
        <option value="russian">Russian</option>
        <option value="uzbek">Uzbek</option>
      </select>
    </header>
  );
};

export default Header;
