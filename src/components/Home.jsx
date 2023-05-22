import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Stocks from "../pages/Stocks";
import Product from "../pages/Product";
import Sales from "../pages/Sales";
import Orders from "../pages/Orders";
import Users from "../pages/Users";

import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full m-4 text-xl">
        <FaBars />{" "}
        <div className="flex justify-center items-center gap-4">
          <BsSearch /> <GrNotification />
          <FaUserCircle />
          <p>User</p>
          <RiArrowDownSFill />
        </div>
      </nav>
      <div className="flex m-4">
        <div className="flex flex-col bg-[#101540] text-white h-screen">
          <Sidebar />
        </div>
        <div className="px-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
