import photo from "../../public/images/profile.jpg";
import { IoIosArrowDown } from "react-icons/io";
import {} from "react-icons/io";

import Profile from "./Profile";

const Navbar = ({ showFull }) => {
  return (
    <>
      {/* profile info section */}
      <div className="dropdown dropdown-bottom  w-full">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center justify-between  w-full"
        >
          <img src={photo} alt="" className="w-12 rounded-lg" />
          <div>
            <h6 className="text-lg font-semibold">Yasin Khan</h6>
            <small className="text-gray-500">Superadmin</small>
          </div>
          <IoIosArrowDown></IoIosArrowDown>
        </div>
        <Profile></Profile>
      </div>
      {/* nav link section */}
    </>
  );
};

export default Navbar;
