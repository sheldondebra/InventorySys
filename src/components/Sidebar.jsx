import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { BsFillBasketFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdMoney } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center gap-1 p-4 ">
        <AiFillDashboard size="22" />
        <NavLink to="/">Dashboard</NavLink>
      </div>
      <div className="flex items-center gap-1 p-4">
        <AiOutlineStock size="22" />
        <NavLink to="/stocks">Stocks</NavLink>
      </div>
      <div className="flex items-center gap-1 p-4">
        <BsFillBasketFill size="22" />
        <NavLink to="/product">Product</NavLink>
      </div>
      <div className="flex items-center gap-1 p-4">
        <FaShoppingCart size="22" />
        <NavLink to="/sales">Sales</NavLink>
      </div>
      <div className="flex items-center gap-1 p-4">
        <MdMoney size="22" />
        <NavLink to="/orders">Orders</NavLink>
      </div>
      <div className="flex items-center gap-1 p-4">
        <FaUsers size="22" />
        <NavLink to="/users">Users</NavLink>
      </div>
    </>
  );
};

export default Sidebar;
