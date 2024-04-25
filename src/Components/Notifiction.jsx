import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';
import { IoNotificationsOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Notifiction = () => {
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
                  : "flex items-center  text-[16px] gap-3 font-semibold"
              }
            >
              <IoNotificationsOutline className="text-red-600"></IoNotificationsOutline>{" "}
              Notifiction text-1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inbox"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3 font-semibold"
              }
            >
              <IoNotificationsOutline className="text-red-600"></IoNotificationsOutline>{" "}
              Notifiction text-1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3 font-semibold"
              }
            >
              <IoNotificationsOutline className="text-red-600"></IoNotificationsOutline>{" "}
              Notifiction text-1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  text-[16px] gap-3 font-semibold text-blue-600"
                  : "flex items-center  text-[16px] gap-3 font-semibold"
              }
            >
              <IoNotificationsOutline className="text-red-600"></IoNotificationsOutline>{" "}
              Notifiction text-1
            </NavLink>
          </li>
        </ul>
      </>
    );
};

export default Notifiction;