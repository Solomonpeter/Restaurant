import React from "react";
import Logo from "../img/Logo.png";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-center mx-auto max-w-screen-2xl">
      <nav className="flex justify-between text-black w-screen">
        <div className=" py-6 flex w-full items-center ">
          <div className="w-32">
            <img src={Logo} alt="Logo" />
          </div>

          <ul className=" hidden md:flex  mx-auto font-semibold font-heading space-x-10 px-3 ">
            <a
              href="#Home"
              className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 hover:underline   "
            >
              Home
            </a>
            <a
              href="#About"
              className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 hover:underline "
            >
              About
            </a>
            <a
              href="#Menu"
              className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 hover:underline"
            >
              Menu
            </a>
            <a
              href="#Shop"
              className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 hover:underline "
            >
              Shop
            </a>
            <a
              href="#Contact"
              className="text-black text-lg font-semibold hover:text-red-600 transition duration-300 hover:underline  "
            >
              Contact
            </a>
          </ul>

          {/* Search bar */}
          <div className="pt-2 relative mr-5 text-gray-600 hidden sm:flex ">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>

        {/*  Responsive Header*/}
        <button className="navbar-burger self-center mr-12 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-9  00"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        {/* Mobile menu
        <div className=" flex items-center mobile-menu h-screen w-18  ">
          <ul className="">
            <li className=" block text-sm px-2 py-4 transition duration-300">Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Shop</li>
            <li>Contact</li>

          </ul>

        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
