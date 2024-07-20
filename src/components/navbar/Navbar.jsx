import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiSearch, FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Exclusive
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>

      <div className="nav-btns">
        <div className="nav-search">
          <input type="text" placeholder="What are you looking for?" />
          <button>
            <FiSearch />
          </button>
        </div>
        <Link to="/wishlist">
          <FaRegHeart />
        </Link>
        <Link to="/cart">
          <IoCartOutline />
        </Link>
        <Link to="/account">
          <FiUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
