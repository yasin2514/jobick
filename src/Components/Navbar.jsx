import photo from "../../public/images/profile.jpg";
import { IoIosArrowDown } from "react-icons/io";
import {} from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import NavbarBrand from "./NavbarBrand";
import { FaFlag, FaInfoCircle, FaMinus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ showFull }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdownProfile = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };
  return (
    <>
      {/* profile info section */}
      <div
        ref={dropdownRef}
        className={`dropdown dropdown-bottom  w-full ${
          showFull ? "px-5" : "h-12"
        }`}
      >
        <div
          tabIndex={0}
          role="button"
          className="flex items-center justify-between h-full  w-full "
          onClick={toggleDropdownProfile}
        >
          {showFull ? (
            <>
              <img src={photo} alt="" className="w-12 rounded-lg" />
              <div>
                <h6 className="text-lg font-semibold">Yasin Khan</h6>
                <small className="text-gray-500">Superadmin</small>
              </div>
              <IoIosArrowDown></IoIosArrowDown>
            </>
          ) : (
            <img src={photo} alt="" className="w-full h-full rounded-lg" />
          )}
        </div>
        {showProfileDropdown && <Profile></Profile>}
      </div>
      {/* nav link section */}
      {showFull && <NavbarBrand></NavbarBrand>}

      {/* navbar section when button collapse */}
      {!showFull && (
        <div className="space-y-4 mt-5">
          {/* dropdown-1 */}
          <div className="dropdown dropdown-hover w-full">
            <div tabIndex={0} role="button">
              <button className="bg-gray-300 p-1 flex flex-col items-center gap-3 w-full py-3 rounded-md hover:bg-gray-400">
                <FaFlag className="text-red-600"></FaFlag>
                <small className=" custom-span1 bg-red-600 text-white px-2 rounded-md">
                  New
                </small>{" "}
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-40"
            >
              <ul className=" custom-ul mt-1  custom-div-2">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-start  px-2 text-[14px] gap-3 font-semibold text-red-600"
                        : "flex items-center  justify-start  px-2  text-[14px] gap-3"
                    }
                  >
                    <FaMinus className=" fa-minus custom-text4"></FaMinus>{" "}
                    <span className="custom-span custom-text4">New Job</span>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>

          {/* dropdown two */}
          <div className="dropdown dropdown-hover w-full">
            <div tabIndex={0} role="button">
              <button className="bg-gray-300 p-1 flex flex-col items-center gap-3 w-full py-4 rounded-md hover:bg-gray-400">
                <FaInfoCircle className="text-red-600"></FaInfoCircle>
              </button>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-40"
            >
              <ul className="  mt-1  ">
                <li className="custom-ul custom-div-2">
                  <NavLink
                    to="/email-read"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-start  px-2 text-[14px] gap-3 font-semibold text-red-600"
                        : "flex items-center  justify-start  px-2  text-[14px] gap-3"
                    }
                  >
                    <FaMinus className=" fa-minus custom-text4"></FaMinus>{" "}
                    <span className="custom-span custom-text4">Read</span>
                  </NavLink>
                </li>
                <li className="custom-ul custom-div-2">
                  <NavLink
                    to="/shop-invoice"
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center justify-start  px-2 text-[14px] gap-3 font-semibold text-red-600"
                        : "flex items-center  justify-start  px-2  text-[14px] gap-3"
                    }
                  >
                    <FaMinus className=" fa-minus custom-text4"></FaMinus>{" "}
                    <span className="custom-span custom-text4">Invoice</span>
                  </NavLink>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
