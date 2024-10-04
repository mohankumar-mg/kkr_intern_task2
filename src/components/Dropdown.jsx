import React, { useState } from "react";
import Up from "../assets/up-arrow.svg";
import Down from "../assets/down-arrow.svg";

const Dropdown = ({ label, menu, border }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className= {`flex items-center font-semibold justify-between px-4 py-2 border-gray-400 rounded-md ${border ? "border" : null}`}>
        {label}
        <span className="ml-2">
          {isOpen ? (
            <img src={Up} alt="up" className="h-[17px] w-[17px]" /> // Up arrow
          ) : (
            <img src={Down} alt="down" className="h-[17px] w-[17px]" /> // Down arrow
          )}
        </span>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 z-10 bg-white border border-gray-400 rounded-md shadow-lg min-w-max w-full"
          onMouseEnter={handleMouseEnter} // Prevent closing when hovering over the dropdown
          onMouseLeave={handleMouseLeave} // Close when leaving the dropdown
        >
          {menu.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                console.log(option); // Action on option click
                setIsOpen(false); // Optionally close dropdown after selection
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
