import { BiSolidShoppingBags } from "react-icons/bi";
import {
  GiHamburgerMenu,
  GiWatch,
  GiPearlNecklace,
  GiBedLamp,
  GiGardeningShears,
  GiConverseShoe,
  GiDress,
  GiTennisRacket,
} from "react-icons/gi";
import { MdAccountCircle, MdSmartToy } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiPackage } from "react-icons/fi";
import {
  PiHairDryerFill,
  PiShirtFoldedDuotone,
  PiBabyDuotone,
} from "react-icons/pi";
import { GiCctvCamera, GiLipstick } from "react-icons/gi";
import { CiDesktopMouse1, CiLogin } from "react-icons/ci";
import {
  FaSearch,
  FaHeadphones,
  FaCar,
  FaBlender,
  FaHammer,
  FaHeart,
} from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaBagShopping, FaCouch } from "react-icons/fa6";
import { TbDog } from "react-icons/tb";
import "./Header.css";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo-cont">
        <p className="logo">shoppers hub</p>
        <BiSolidShoppingBags />
      </Link>
      <form action="" className="header-form">
        <input type="text" placeholder="search for products" />
        <button>
          <FaSearch />
        </button>
      </form>

      <div className="header-menus">
        <div className="header-menu categories">
          <GiHamburgerMenu />
          <p className="menu-label">categories</p>
          <div className="categories-menu">
          <Link to={"#"}>
              <IoPhonePortraitOutline />
              <p>phones & telecommunications</p>
            </Link>
            <Link to={"#"}>
              <FaBlender />
              <p>home appliances</p>
            </Link>
            <Link to={"#"}>
              <GiWatch />
              <p>accessories</p>
            </Link>
            <Link to={"#"}>
              <GiPearlNecklace />
              <p>jewelry</p>
            </Link>
            <Link to={"#"}>
              <FaHeadphones />
              <p>consumer electronics</p>
            </Link>
            <Link to={"#"}>
              <GiBedLamp />
              <p>home improvement & lighting</p>
            </Link>
            <Link to={"#"}>
              <PiHairDryerFill />
              <p>hair essentials</p>
            </Link>
            <Link to={"#"}>
              <FaCar />
              <p>automotive & motorcycle</p>
            </Link>
            <Link to={"#"}>
              <FaBagShopping />
              <p>luggages & bags</p>
            </Link>
            <Link to={"#"}>
              <GiConverseShoe />
              <p>shoes</p>
            </Link>
            <Link to={"#"}>
              <PiShirtFoldedDuotone />
              <p>men's clothing</p>
            </Link>
            <Link to={"#"}>
              <GiDress />
              <p>women's clothing</p>
            </Link>
            <Link to={"#"}>
              <GiTennisRacket />
              <p>sports & entertainment</p>
            </Link>
            <Link to={"#"}>
              <MdSmartToy />
              <p>toys & games</p>
            </Link>
            <Link to={"#"}>
              <GiLipstick />
              <p>beauty & health</p>
            </Link>
            <Link to={"#"}>
              <FaHammer />
              <p>tools & industrial</p>
            </Link>
            <Link to={"#"}>
              <FaCouch />
              <p>furniture</p>
            </Link>
            <Link to={"#"}>
              <TbDog />
              <p>pet supplies</p>
            </Link>
          </div>
        </div>

        <div className="header-menu account">
          <MdAccountCircle />
          <p className="menu-label">account</p>
          <div className="account-menu">
            <Link to={"#"}>
              <CiLogin />
              <p>sign in</p>
            </Link>
            <Link to={"/customer"}>
              <MdAccountCircle />
              <p>my account</p>
            </Link>
            <Link to={"/customer/orders"}>
              <FiPackage />
              <p>orders</p>
            </Link>
            <Link to={"/customer/wishlist"}>
              <FaHeart />
              <p>wishlist</p>
            </Link>
          </div>
        </div>

        <Link to={"cart"} className="header-menu">
          <HiOutlineShoppingCart />
          <p className="menu-label">cart</p>
          <div className="cart-label">2</div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
