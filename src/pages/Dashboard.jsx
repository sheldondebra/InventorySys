import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex my-5 -mx-2">

      <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div className="flex flex-col justify-around flex-grow ml-5 text-white">
              <div className="text-xs whitespace-nowrap">Total User</div>
              <div className="">100</div>
            </div>
            <div className=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div className="flex flex-col justify-around flex-grow ml-5 text-white">
              <div className="text-xs whitespace-nowrap">Total Product</div>
              <div className="">500</div>
            </div>
            <div className=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div className="flex flex-col justify-around flex-grow ml-5 text-white">
              <div className="text-xs whitespace-nowrap">Total Visitor</div>
              <div className="">500</div>
            </div>
            <div className=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div className="flex flex-col justify-around flex-grow ml-5 text-white">
              <div className="text-xs whitespace-nowrap">Total Visitor</div>
              <div className="">500</div>
            </div>
            <div className=" flex items-center flex-none text-white"></div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
