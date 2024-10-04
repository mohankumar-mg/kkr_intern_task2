import React from "react";
import ToolTip from "./ToolTip";
import Robu from "../assets/robu.png";
import Search from "../assets/search.svg";
import Heart from "../assets/heart.svg";
import Cart from "../assets/cart.svg";

function Header() {
  return (
    <div className="mt-[20px] flex items-center justify-center">
      <div>
        <img src={Robu} alt="robu" className="h-[80px] w-[250px]" />
      </div>
      
      <div className="border-2 border-grey-400 flex rounded-3xl items-center h-[45px] w-[400px] mr-[40px]">
        <div className="bg-gray-200 rounded-full h-[35px] w-[35px] flex justify-center items-center mr-[6px] ml-[5px]">
          <img src={Search} alt="search" className="h-[22px] w-[22px]" />
        </div>
        <input
          type="text"
          placeholder="Search for products..."
          className="border-none focus:outline-none focus:ring-0 p-2"
        />
      </div>

      <div className="relative group cursor-pointer">
        <img
          src={Heart}
          alt="wishlist"
          className="h-[30px] w-[30px] mx-[40px]"
        />
        <ToolTip label="Wishlist" />
      </div>

      <div className="relative group cursor-pointer flex">
        <img src={Cart} alt="cart" className="h-[30px] w-[30px]" />
        <h3 className="font-bold">₹ 0.00</h3>
        <ToolTip label="Cart" />
      </div>
    </div>
  );
}

export default Header;
