import { NavLink } from "react-router-dom";
import { FaMinus, FaCaretRight } from "react-icons/fa6";
import { FaFlag, FaInfoCircle } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
const NavbarBrand = () => {
  const [showDropdown1, setDropDown1] = useState(false);
  const [showDropdown2, setDropDown2] = useState(false);
  const [showDropdown3, setDropDown3] = useState(false);
  const [showDropdown4, setDropDown4] = useState(false);
  return (
    <div className="my-5">
      {/* navbar-1 ----------------------------*/}
      <div className="dropdown dropdown-bottom w-full">
        {showDropdown1 ? (
          <div
            onClick={() => {
              setDropDown1(false);
              showDropdown2 && setDropDown2(false);
              showDropdown3 && setDropDown3(false);
              showDropdown4 && setDropDown4(false);
            }}
          >
            <div
              className={
                "flex items-center justify-between gap-5  text-[17px] font-semibold text-red-600 py-3 px-5 bg-pink-100"
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
              showDropdown3 && setDropDown3(false);
              showDropdown4 && setDropDown4(false);
            }}
          >
            <div
              className={`flex items-center  justify-between gap-5 text-[16px]  py-3 px-5 font-semibold  custom-div `}
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
          <ul className=" custom-ul mt-1  ">
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
                "flex items-center justify-between gap-5  text-[17px] font-semibold text-red-600 py-3 px-5 bg-pink-100"
              }
            >
              <FaInfoCircle></FaInfoCircle>
              <span className="w-[105px]">Apps</span>{" "}
              <TiArrowSortedDown></TiArrowSortedDown>
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
              className={`flex items-center  justify-between gap-5 text-[16px]  py-3 px-5 font-semibold  custom-div `}
            >
              <FaInfoCircle className="text-gray-500"></FaInfoCircle>
              <span className="custom-text w-[105px]">Apps</span>{" "}
              <FaCaretRight className="text-gray-500"></FaCaretRight>
            </div>
          </div>
        )}
      </div>

      {/* navbar-2-1 --------------------------------------------*/}
      <div className="dropdown dropdown-bottom w-full">
        {showDropdown2 && (
          <>
            {/* inner section */}
            {showDropdown3 ? (
              <div
                onClick={() => {
                  showDropdown4 && setDropDown4(false);
                  setDropDown3(false);
                }}
              >
                <div
                  className={
                    "flex items-center justify-between gap-5  text-[16px] font-semibold text-red-600 py-5 px-5 "
                  }
                >
                  <FaMinus className=" fa-minus custom-text1"></FaMinus>{" "}
                  <span className="custom-text1 custom-span1">Email</span>
                  <small className=" custom-span1 bg-red-600 text-white px-2 rounded-md">
                    New
                  </small>{" "}
                  <TiArrowSortedDown className=" text-red-600 custom-span1"></TiArrowSortedDown>
                </div>
              </div>
            ) : (
              <div
                className="custom-div-1"
                onClick={() => {
                  showDropdown4 && setDropDown4(false);
                  setDropDown3(true);
                }}
              >
                <div
                  className={
                    "flex items-center justify-between gap-5  text-[16px] font-semibold text-gray-600 py-5 px-5 "
                  }
                >
                  <FaMinus className=" fa-minus custom-text1"></FaMinus>{" "}
                  <span className=" custom-text3">Email</span>
                  <small className=" custom-span1 bg-red-600 text-white px-2 rounded-md">
                    New
                  </small>{" "}
                  <FaCaretRight className="text-gray-500 custom-span1"></FaCaretRight>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* dropdown-3 */}
      {showDropdown3 && (
        <ul className="mb-6">
          <li className="custom-ul custom-ul-1">
            <NavLink
              to="/email"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-9 justify-start   text-[14px] gap-3 font-semibold text-red-600"
                  : "flex items-center  px-9 justify-start  text-[14px] gap-3"
              }
            >
              <FaMinus className=" fa-minus custom-text1"></FaMinus>{" "}
              <span className="custom-text1 custom-span1">Read</span>
            </NavLink>
          </li>
        </ul>
      )}

      {/* navbar-2-2 --------------------------------------------*/}
      <div className="dropdown dropdown-bottom w-full">
        {showDropdown2 && (
          <>
            {/* inner section */}
            {showDropdown4 ? (
              <div
                onClick={() => {
                  showDropdown3 && setDropDown3(false);
                  setDropDown4(false);
                }}
              >
                <div
                  className={
                    "flex items-center justify-between gap-5  text-[15px] font-semibold text-red-600 px-5 "
                  }
                >
                  <FaMinus className=" fa-minus custom-text1"></FaMinus>{" "}
                  <span className="w-[108px]">Shop</span>
                  <TiArrowSortedDown className=" text-red-600 custom-span1"></TiArrowSortedDown>
                </div>
              </div>
            ) : (
              <div
                className="custom-div-2"
                onClick={() => {
                  showDropdown3 && setDropDown3(false);
                  setDropDown4(true);
                }}
              >
                <div
                  className={
                    "flex items-center justify-between gap-5  text-[15px] font-semibold text-gray-600 px-5 "
                  }
                >
                  <FaMinus className=" fa-minus custom-text1"></FaMinus>{" "}
                  <span className="custom-text4  w-[108px]">Shop</span>
                  <FaCaretRight className="text-gray-500 custom-span1"></FaCaretRight>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {/* dropdown-4 */}

      {showDropdown4 && (
        <ul className="mt-3">
          <li className="custom-ul custom-ul-2">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center px-9 justify-start   text-[14px] gap-3 font-semibold text-red-600"
                  : "flex items-center  px-9 justify-start  text-[14px] gap-3"
              }
            >
              <FaMinus className=" fa-minus custom-text2"></FaMinus>{" "}
              <span className=" custom-span1 custom-text2">Invoice</span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarBrand;
