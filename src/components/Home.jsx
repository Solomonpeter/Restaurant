import React from "react";
import Navbar from "./Navbar";
import banner from "../img/banner.png";
import about from "../img/burger.png";
import Product from "./card";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  justify-center mx-auto max-w-screen-2xl ">
        {/* Hero section */}
        <div className="w-screen flex flex-wrap md:pt-20 p-5 ">
          <div className="lg:w-1/2  ">
            <span className="text-red-500 text-xl font-bold uppercase">
              Chef's Special
            </span>
            <h1 className="lg:text-7xl py-5 text-slate-900 font-semibold leading-none tracking-wide text-5xl ">
              Freshness in every bite
            </h1>
            <p className="text-xl py-2 text-zinc-900">
              Keep it easy with these simple delicious recipes from make-ahead
              lunches and midweek meals to fuss-free sides
            </p>
            <div className="py-5">
              <button className="border-2 px-10 py-4 rounded-full border-red-700 tracking-wider text-red-600 font-bold hover:bg-red-600 hover:text-white ">
                Order Now
              </button>
            </div>
          </div>

          <div className="lg:w-1/2  ">
            <img src={banner} alt="Banner " />
          </div>

          {/* info-section */}
          <div className="flex flex-wrap  w-full justify-center py-20 gap-2">
            <div className="sm:justify-center w-72 bg-red-600 py-5 px-1 ">
              <h1 className="text-7xl font-bold text-white flex items-center justify-center">
                65+
              </h1>
              <span className="text-xl text-white flex items-center justify-center">
                Outlets
              </span>
            </div>
            <div className="justify-center w-72 bg-red-600 py-5 px-10  ">
              <h1 className="text-7xl font-bold text-white flex items-center justify-center">
                25+
              </h1>
              <span className="text-xl text-white flex items-center justify-center">
                Cities
              </span>
            </div>
            <div className=" justify-center w-72 bg-red-600 py-5 px-10  ">
              <h1 className="text-7xl font-bold text-white flex items-center justify-center">
                65K
              </h1>
              <span className="text-xl text-white flex items-center justify-center">
                Burger Sold
              </span>
            </div>
          </div>

          {/* About section */}
          <div className="flex flex-wrap w-full justify-center lg:py-10 items-center  ">
            <div className=" lg:w-1/2 lg:px-10">
              <h1 className="lg:text-5xl text-3xl text-red-600 font-black">
                LARGEST HOME-GROWN BURGER CHAIN IS HERE TO SERVE YOU
              </h1>
              <p className="text-xl text-zinc-900 py-5 ">
                We know you’re obviously a fan of desi flavours and have your
                heart set on it. Your search for the best Indian fusion burgers
                ends here. With the taste of India in every bite, we have
                thoughtfully curated our menu to serve the Indian palette.
                Bursting with flavours, our wide range of burgers will always
                make you crave for more.
              </p>
              <button className="bg-red-600 px-10 py-4 rounded-full border-rose-700 text-white hover: border-2 tracking-wider font-bold">
                Know More
              </button>
            </div>
            <div className="lg:w-1/2 py-5">
              <img src={about} alt="Banner " className="h-4/5" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap w-full justify-center ">
            <h1 className=" w-full text-red-600 font-black lg:text-5xl text-3xl text-center  py-5">
              TAKE YOUR DELICIOUS PICK
            </h1>
            <div className="container  flex-row"></div>
            <Product />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
