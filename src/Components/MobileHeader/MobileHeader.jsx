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
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import "./MobileHeader.css";

function MobileHeader() {
  const [click, setClick] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-logo-cont">
        <p className="mobile-logo">shoppers hub</p>
        <BiSolidShoppingBags />
      </div>
      <form action="" className="mobile-header-form">
        <input type="text" placeholder="search for products" />
        <button>
          <FaSearch />
        </button>
      </form>

      <div className="mobile-header-col3">
        <div className="mobile-hamburger-menu">
          {click ? (
            <IoMdClose
              onClick={() => {
                setClick(!click);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setClick(!click);
              }}
            />
          )}
        </div>

        <a href="#">
          <HiOutlineShoppingCart />
          <div className="mobile-cart-label">2</div>
        </a>
      </div>

      {click && (
        <div className="mobile-categories-account-menu">
          <div className="mobile-account-menu">
            <p className="hamburger-menu-title">account</p>
            <a href="">
              <CiLogin />
              <p>sign in</p>
            </a>
            <a href="">
              <MdAccountCircle />
              <p>my account</p>
            </a>
            <a href="">
              <FiPackage />
              <p>orders</p>
            </a>
            <a href="">
              <FaHeart />
              <p>wishlist</p>
            </a>
          </div>

          <div className="mobile-categories-menu">
            <p className="hamburger-menu-title">categories</p>
            <a href="">
              <GiWatch />
              <p>accessories</p>
            </a>
            <a href="">
              <GiPearlNecklace />
              <p>jewelry</p>
            </a>
            <a href="">
              <FaHeadphones />
              <p>consumer electronics</p>
            </a>
            <a href="">
              <GiBedLamp />
              <p>home improvement & lighting</p>
            </a>
            <a href="">
              <IoPhonePortraitOutline />
              <p>phones & telecommunications</p>
            </a>
            <a href="">
              <GiGardeningShears />
              <p>home & garden</p>
            </a>
            <a href="">
              <PiHairDryerFill />
              <p>hair essentials</p>
            </a>
            <a href="">
              <FaCar />
              <p>automotive & motorcycle</p>
            </a>
            <a href="">
              <FaBlender />
              <p>home appliances</p>
            </a>
            <a href="">
              <FaBagShopping />
              <p>luggages & bags</p>
            </a>
            <a href="">
              <GiConverseShoe />
              <p>shoes</p>
            </a>
            <a href="">
              <PiShirtFoldedDuotone />
              <p>men's clothing</p>
            </a>
            <a href="">
              <GiDress />
              <p>women's clothing</p>
            </a>
            <a href="">
              <GiTennisRacket />
              <p>sports & entertainment</p>
            </a>
            <a href="">
              <MdSmartToy />
              <p>toys & games</p>
            </a>
            <a href="">
              <PiBabyDuotone />
              <p>babies & kids</p>
            </a>
            <a href="">
              <CiDesktopMouse1 />
              <p>computer, office & education</p>
            </a>
            <a href="">
              <FaCouch />
              <p>furniture</p>
            </a>
            <a href="">
              <TbDog />
              <p>pet supplies</p>
            </a>
            <a href="">
              <GiCctvCamera />
              <p>security & protection</p>
            </a>
            <a href="">
              <GiLipstick />
              <p>beauty & health</p>
            </a>
            <a href="">
              <FaHammer />
              <p>tools & industrial</p>
            </a>
            <a href="">
              <CiDesktopMouse1 />
              <p>lingerie & lounge-wear</p>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default MobileHeader;
