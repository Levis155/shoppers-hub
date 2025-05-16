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
  GiCctvCamera,
  GiLipstick,
} from "react-icons/gi";
import { MdAccountCircle, MdSmartToy } from "react-icons/md";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiPackage } from "react-icons/fi";
import {
  PiHairDryerFill,
  PiShirtFoldedDuotone,
  PiBabyDuotone,
} from "react-icons/pi";
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
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./MobileHeader.css";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [click, setClick] = useState(false);

  return (
    <header className="mobile-header">
      <Link to={"/"} className="mobile-logo-cont">
        <p className="mobile-logo">shoppers hub</p>
        <BiSolidShoppingBags />
      </Link>

      <form className="mobile-header-form">
        <input type="text" placeholder="search for products" />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      <div className="mobile-header-col3">
        <div className="mobile-hamburger-menu">
          {click ? (
            <IoMdClose onClick={() => setClick(false)} />
          ) : (
            <GiHamburgerMenu onClick={() => setClick(true)} />
          )}
        </div>

        <Link to="#">
          <HiOutlineShoppingCart />
          <p className="mobile-cart-label">2</p>
        </Link>
      </div>

      {click && (
        <div className="mobile-categories-account-menu">
          <div className="mobile-account-menu">
            <p className="hamburger-menu-title">account</p>
            <Link to="#">
              <CiLogin />
              <p>sign in</p>
            </Link>
            <Link to="/customer">
              <MdAccountCircle />
              <p>my account</p>
            </Link>
            <Link to="customer/orders">
              <FiPackage />
              <p>orders</p>
            </Link>
            <Link to="customer/wishlist">
              <FaHeart />
              <p>wishlist</p>
            </Link>
          </div>

          <div className="mobile-categories-menu">
            <p className="hamburger-menu-title">categories</p>
            <Link to="#"><GiWatch /><p>accessories</p></Link>
            <Link to="#"><GiPearlNecklace /><p>jewelry</p></Link>
            <Link to="#"><FaHeadphones /><p>consumer electronics</p></Link>
            <Link to="#"><GiBedLamp /><p>home improvement & lighting</p></Link>
            <Link to="#"><IoPhonePortraitOutline /><p>phones & telecommunications</p></Link>
            <Link to="#"><GiGardeningShears /><p>home & garden</p></Link>
            <Link to="#"><PiHairDryerFill /><p>hair essentials</p></Link>
            <Link to="#"><FaCar /><p>automotive & motorcycle</p></Link>
            <Link to="#"><FaBlender /><p>home appliances</p></Link>
            <Link to="#"><FaBagShopping /><p>luggages & bags</p></Link>
            <Link to="#"><GiConverseShoe /><p>shoes</p></Link>
            <Link to="#"><PiShirtFoldedDuotone /><p>men's clothing</p></Link>
            <Link to="#"><GiDress /><p>women's clothing</p></Link>
            <Link to="#"><GiTennisRacket /><p>sports & entertainment</p></Link>
            <Link to="#"><MdSmartToy /><p>toys & games</p></Link>
            <Link to="#"><PiBabyDuotone /><p>babies & kids</p></Link>
            <Link to="#"><CiDesktopMouse1 /><p>computer, office & education</p></Link>
            <Link to="#"><FaCouch /><p>furniture</p></Link>
            <Link to="#"><TbDog /><p>pet supplies</p></Link>
            <Link to="#"><GiCctvCamera /><p>security & protection</p></Link>
            <Link to="#"><GiLipstick /><p>beauty & health</p></Link>
            <Link to="#"><FaHammer /><p>tools & industrial</p></Link>
            <Link to="#"><GiDress /><p>lingerie & lounge-wear</p></Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;
