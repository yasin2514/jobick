import React, { useState } from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import photo from "../../public/images/profile.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Profile from "./Profile";
import Notifiction from "./Notifiction";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";

const Header = ({ showFull, setShowFull, darkMode, toggleDarkMode }) => {
  const location = useLocation();
  const renderContent = () => {
    if (location.pathname === "/") {
      return <h3 className="text-2xl font-semibold">Jobs</h3>;
    } else if (location.pathname === "/shop-invoice") {
      return <h3 className="text-2xl font-semibold">Invoice</h3>;
    } else if (location.pathname === "/email-read") {
      return <h3 className="text-2xl font-semibold">Read</h3>;
    } else {
      return null;
    }
  };

  return (
    <div
      className={`py-4 px-10 flex items-center justify-between ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <div className="flex justify-between w-[45%]">
        <div className="flex justify-between items-center w-[140px]">
          <button onClick={() => setShowFull(!showFull)} className="">
            {showFull ? (
              <RiMenu2Fill className="text-2xl transition-transform duration-300 ease-in-out transform hover:scale-x-125"></RiMenu2Fill>
            ) : (
              <FaArrowRightLong className="text-2xl text-red-600  transition-transform duration-300 ease-in-out transform hover:scale-x-125"></FaArrowRightLong>
            )}
          </button>
          <div>{renderContent()}</div>
        </div>
        <div className=" justify-between flex w-[320px]">
          <label className="input input-bordered flex items-center gap-2 h-10">
            <input type="text" className="grow" placeholder="Search" />
            <IoMdSearch className="text-gray-400"></IoMdSearch>
          </label>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="bg-green-800 hover:bg-green-700 text-white px-3 rounded-lg"
          >
            <IoMdAdd className="text-2xl text-white"></IoMdAdd>
          </button>
          <Modal modalId={"my_modal_1"}></Modal>
        </div>
      </div>
      <div className=" w-[180px] flex justify-between items-center">
        <div>
          <button
            onClick={toggleDarkMode}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {darkMode ? (
              <FiSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>
        </div>
        <div className="dropdown dropdown-left ">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-between  "
          >
            <div className="indicator">
              <span className="indicator-item flex justify-center items-center  bg-red-600 text-white rounded-full w-6 h-6">
                4
              </span>
              <button>
                <IoNotificationsOutline className="text-3xl "></IoNotificationsOutline>
              </button>
            </div>
          </div>
          <Notifiction></Notifiction>
        </div>
        <div className="dropdown dropdown-left ">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-between  "
          >
            <img src={photo} alt="" className="w-12 rounded-lg" />
          </div>
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
};

export default Header;
