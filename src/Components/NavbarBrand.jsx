import { NavLink } from "react-router-dom";
import { FaMinus, FaCaretRight } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
const NavbarBrand = () => {
  const [showDropdown1, setDropDown1] = useState(false);
  const [showDropdown2, setDropDown2] = useState(false);
  return (
    <div className="my-5">
      {/* navbar-1 ----------------------------*/}
      <div className="dropdown dropdown-bottom w-full">
        {showDropdown1 ? (
          <div
            onClick={() => {
              setDropDown1(false);
              showDropdown2 && setDropDown2(false);
            }}
          >
            <div
              className={
                "flex items-center justify-between gap-5  text-[17px] font-semibold text-red-600 py-3 px-9 bg-pink-100"
              }
            >
              <FaFlag></FaFlag>Jobs{" "}
              <small className="bg-red-600 text-white px-2 rounded-md">
                New
              </small>{" "}
              <TiArrowSortedDown></TiArrowSortedDown>
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setDropDown1(true);
              showDropdown2 && setDropDown2(false);
            }}
          >
            <div
              className={`flex items-center  justify-between gap-5 text-[16px]  py-3 px-9 font-semibold  custom-div `}
            >
              <FaFlag className="text-gray-500"></FaFlag>
              <span className="custom-text">Jobs</span>{" "}
              <small className="bg-red-600 text-white px-2 rounded-md">
                New
              </small>{" "}
              <FaCaretRight className="text-gray-500"></FaCaretRight>
            </div>
          </div>
        )}
        {showDropdown1 && (
          <ul className=" custom-ul mt-1 hover:text-red-600 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-start ms-9   text-[14px] gap-3 font-semibold text-red-600"
                  : "flex items-center  justify-start ms-9  text-[14px] gap-3"
              }
            >
              <FaMinus className=" fa-minus"></FaMinus>{" "}
              <span className="custom-span">New Job</span>
            </NavLink>
          </ul>
        )}
      </div>

      {/* navbar-2 --------------------------------------------*/}
      <div className="dropdown dropdown-bottom w-full">
        {showDropdown2 ? (
          <div
            onClick={() => {
              setDropDown2(false);
              showDropdown1 && setDropDown1(false);
            }}
          >
            <div
              className={
                "flex items-center justify-between gap-5  text-[17px] font-semibold text-red-600 py-3 px-9 bg-pink-100"
              }
            >
              <FaFlag></FaFlag>Apps <TiArrowSortedDown></TiArrowSortedDown>
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              setDropDown2(true);
              showDropdown1 && setDropDown1(false);
            }}
          >
            <div
              className={`flex items-center  justify-between gap-5 text-[16px]  py-3 px-9 font-semibold  custom-div `}
            >
              <FaFlag className="text-gray-500"></FaFlag>
              <span className="custom-text">Apps</span>{" "}
              <FaCaretRight className="text-gray-500"></FaCaretRight>
            </div>
          </div>
        )}
        {showDropdown2 && (
          <ul className=" custom-ul mt-3 hover:text-red-600 space-y-3">
            <NavLink
              to="/email"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-9 justify-between   text-[14px] gap-3 font-semibold text-red-600"
                  : "flex items-center  px-9 justify-between  text-[14px] gap-3"
              }
            >
              <FaMinus className=" fa-minus"></FaMinus>{" "}
              <span className="custom-span">Email</span>
              <small className="bg-red-600 text-white px-2 rounded-md">
                New
              </small>{" "}
              <FaCaretRight className="text-gray-500"></FaCaretRight>
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-9 justify-between   text-[14px] gap-3 font-semibold text-red-600"
                  : "flex items-center  px-9 justify-between  text-[14px] gap-3"
              }
            >
              <FaMinus className=" fa-minus"></FaMinus>{" "}
              <span className="custom-span">Shop</span>
              <FaCaretRight className="text-gray-500"></FaCaretRight>
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarBrand;
