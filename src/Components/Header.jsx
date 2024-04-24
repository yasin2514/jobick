import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import photo from "../../public/images/profile.jpg";
import { useState } from "react";

const Header = () => {
  const [showDark, setShowDark] = useState(false);

  return (
    <div className="py-5 px-10 flex items-center justify-between ">
      {/* section-1 */}
      <div className="flex justify-between w-[45%]">
        {/* sc-1-sub-1 */}
        <div className="flex justify-between items-center w-[140px]">
          <button className="">
            <RiMenu2Fill className="text-2xl font-bold hover:text-3xl duration-150"></RiMenu2Fill>
          </button>
          <h3 className="text-2xl font-semibold">Invoice</h3>
        </div>
        {/* sc-1-sub-2 */}
        <div className=" justify-between flex w-[320px]">
          <label className="input input-bordered flex items-center gap-2 h-10">
            <input type="text" className="grow" placeholder="Search" />
            <IoMdSearch className="text-gray-400"></IoMdSearch>
          </label>
          <button className="bg-green-800 hover:bg-green-700 text-white px-3 rounded-lg">
            <IoMdAdd className="text-2xl text-white"></IoMdAdd>
          </button>
        </div>
      </div>

      {/* section-2 */}
      <div className=" w-[180px] flex justify-between items-center">
        {/* s-2sub-1 */}
        <div>
          <button
            onClick={() => setShowDark(!showDark)}
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {showDark ? (
              <FiSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </button>
        </div>

        {/* s-2sub-2 */}
        <div className="indicator">
          <span className="indicator-item flex justify-center items-center  bg-red-600 text-white rounded-full w-6 h-6">
            4
          </span>
          <button>
            <IoNotificationsOutline className="text-3xl "></IoNotificationsOutline>
          </button>
        </div>
        {/* s-2sub-3 */}
        <button>
          <img src={photo} alt="" className="w-12 rounded-lg" />
        </button>
      </div>
    </div>
  );
};

export default Header;
