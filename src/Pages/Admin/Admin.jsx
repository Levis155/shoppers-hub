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

export function Dashboard() {
  return (
    <div className="admin-dashboard-page">
      <div className="admin-body-title-cont">
        <p className="admin-body-title">dashboard</p>
      </div>

      <div className="dashboard-body">
        <div className="dashboard-card">
          <p className="dashboard-card-title">sales</p>
          <p className="dashboard-card-sub-stat">10 orders</p>
          <p className="dashboard-card-stat">ksh 100000</p>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-title">customers</p>
          <p className="dashboard-card-sub-stat">ksh 10000 average value</p>
          <p className="dashboard-card-stat">10</p>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-card-title">active products</p>
          <p className="dashboard-card-sub-stat">1 inactive</p>
          <p className="dashboard-card-stat">500</p>
        </div>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <div className="admin-products-page">
      <div className="admin-body-title-cont">
        <p className="admin-body-title">products</p>
        <button className="add-product-btn">add product</button>
      </div>

      <div className="products-body"></div>
    </div>
  );
}

export function Customers() {
  return <div className="admin-customers-page">this is the customers page</div>;
}

export function Sales() {
  return <div className="admin-sales-page">this is the sales page</div>;
}
