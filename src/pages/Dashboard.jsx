import React from "react";

const Dashboard = () => {
  return (
    <>
      <div class="flex my-5 -mx-2">

        <div class="w-full lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total User</div>
              <div class="">100</div>
            </div>
            <div class=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 p-2 ">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total Product</div>
              <div class="">500</div>
            </div>
            <div class=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total Visitor</div>
              <div class="">500</div>
            </div>
            <div class=" flex items-center flex-none text-white"></div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 "></div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total Visitor</div>
              <div class="">500</div>
            </div>
            <div class=" flex items-center flex-none text-white"></div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
