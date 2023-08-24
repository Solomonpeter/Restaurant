import React from "react";

const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" flex  bg-red-600 items-center justify-center py-5 mt-10">
      <div className=" text-xl text-white">
        &copy; {currentYear} Coding Beauty
      </div>
    </div>
  );
};
export default footer;
