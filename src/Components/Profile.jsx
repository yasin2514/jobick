import { FaRegUser } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Profile = () => {
    return (
      <>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3"
              }
            >
              <FaRegUser className="text-red-600"></FaRegUser> Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3"
              }
            >
              <MdOutlineEmail className="text-green-600"></MdOutlineEmail> Inbox
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3"
              }
            >
              <IoIosLogOut className="text-red-600"></IoIosLogOut> Logout
            </NavLink>
          </li>
        </ul>
      </>
    );
};

export default Profile;