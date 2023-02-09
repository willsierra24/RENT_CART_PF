import React, { useState } from "react";
import { RiBarChart2Line, RiArrowRightLine } from "react-icons/ri";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";

//overflow-y-scroll

function Sidebar() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div className="xl:h-[100vh]  fixed xl:static w-full h-full -left-full top-0 bg-secondary-100 p-4 flex flex-col justify-between ">
      <div>
        <h1 className="text-center text-4xl font-bold text-white mb-10">
          Rent <span className="text-primary  ">Cars</span>
        </h1>
        <ul>
          <li>
            <Link
              to="/"
              className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before.border-secondary-100 text-white rounded-lg  hover:bg-secondary-900"
            >
              <RiBarChart2Line className="text-primary" />
              Bookings
            </Link>
          </li>
          <li>
            <button
              onClick={() => setShowSubMenu(!showSubMenu)}
              className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
            >
              <span className="flex items-center gap-4">
                <RiBarChart2Line className="text-primary " /> Users
              </span>
              <RiArrowRightLine
                className={`mt-1${showSubMenu && "rotate-90%"} transition-all`}
              />
            </button>

            <ul className={`my-2 ${!showSubMenu && "hidden"}`}>
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-secondary-100 hover:text-white transition-colors rounded-lg hover:bg-secondary-900"
                >
                  clients
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-secondary-100 hover:text-white transition-colors rounded-lg hover:bg-secondary-900"
                >
                  admin
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-secondary-100 hover:text-white transition-colors rounded-lg hover:bg-secondary-900"
                >
                  Super admin{" "}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/"
              className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-secondary-100 hover:text-white transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiBarChart2Line className="text-primary" />
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-2 px-4 borde-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-secondary-100 hover:text-white transition-colors rounded-lg hover:bg-secondary-900"
            >
              <RiBarChart2Line className="text-primary" />
              Accesories
            </Link>
          </li>
        </ul>
      </div>
      <nav>
        <Link
          to="/"
          className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
        >
          <AiOutlinePoweroff className="text-primary" />
          Log out
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
