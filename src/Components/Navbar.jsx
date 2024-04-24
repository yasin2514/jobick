import photo from "../../public/images/profile.jpg";
import { IoIosArrowDown } from "react-icons/io";
import {} from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import NavbarBrand from "./NavbarBrand";

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
    </>
  );
};

export default Navbar;
