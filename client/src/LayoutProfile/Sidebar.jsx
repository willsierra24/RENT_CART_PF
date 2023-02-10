import React, { useState } from "react";
import {
  RiLogoutCircleRLine,
  RiMenu3Line,
  RiCloseLine,
  RiCarFill,
  RiHome7Fill,
} from "react-icons/ri";
import { GiCarSeat } from "react-icons/gi";
import { FaUsers, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  //overflow-y-scroll

  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh]  fixed xl:static w-[50%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Rent <span className="text-primary  ">Car</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <FaShoppingCart className="text-primary" />
                My dates
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <RiCarFill className="text-primary" />
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <GiCarSeat className="text-primary" />
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <FaUsers className="text-primary" />
                Settings
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="flex text-2xl items-center gap-4  py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <RiHome7Fill className="text-primary" />
                Back Home
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <div className="flex flex-col">
            <Link
              to="/"
              className="flex text-2xl items-center gap-4 my-6 py-3 px-9 rounded-lg hover:bg-secondary-900 hover:text-white transition-colors bg-primary"
            >
              <RiLogoutCircleRLine className="text-white  " />
              LOG OUT
            </Link>
          </div>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed xl:hidden bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50 "
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar;
