import "./Admin.css";
import { CiLogout } from "react-icons/ci";
import { BiSolidShoppingBags } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { MdSell } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


export function Admin() {
  return (
    <div className="admin-page">
      <div className="side-bar">
        <div className="logo-logout-btn">
          <p className="admin-logo">
            <BiSolidShoppingBags /> shoppers hub
          </p>

          <button className="admin-logout-btn">
            <CiLogout />
          </button>
        </div>

        <nav className="admin-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? "admin-navlink-active" : ""
            }
            to="dashboard"
          >
            <LuLayoutDashboard /> dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "admin-navlink-active" : ""
            }
            to="products"
          >
            <RiShoppingBasketLine /> products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "admin-navlink-active" : ""
            }
            to="customers"
          >
            <BsPeopleFill /> customers
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "admin-navlink-active" : ""
            }
            to="sales"
          >
            <MdSell /> sales
          </NavLink>
        </nav>
      </div>

      <div className="admin-body">
        <Outlet />
      </div>
    </div>
  );
}