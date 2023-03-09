import React from "react";

const Menu = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
        onClick={handleMenuClick}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      <div
        className={`hidden md:flex md:items-center md:w-auto mt-4 sm:mt-0 sm:bg-transparent sm:p-0 ${
          showMenu ? "block" : ""
        }`}
      >
        <ul className="md:flex flex-col sm:flex-row list-none ml-auto">
          <li>
            <a href="/" className="block px-4 py-1">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="block px-4 py-1">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block px-4 py-1">
              Contact
            </a>
          </li>
          <li>
            <a href="/projects" className="block px-4 py-1">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
