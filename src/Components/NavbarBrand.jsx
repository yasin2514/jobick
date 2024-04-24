
const NavbarBrand = ({ toggleDropdown, dropdownRef, showDropdown }) => {
  return (
    <div className="my-5">
      <div ref={dropdownRef} className="dropdown dropdown-bottom w-full">
        <div
          tabIndex={0}
          role="button"
          className="border"
          onClick={toggleDropdown}
        >
          Click
        </div>
        {showDropdown && (
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavbarBrand;
