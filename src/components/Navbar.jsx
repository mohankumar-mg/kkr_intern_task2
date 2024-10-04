import React from "react";
import Dropdown from "./Dropdown";
import Phone from "../assets/phone.svg";
import {MyAccount} from "../constants/DropdownLists";

function Navbar() {
  return (
    <div>
      <div className="flex mt-2 items-center">
        <div className="flex mr-[60px] ml-[70px]">
          <img src={Phone} alt="phone" className="h-[20px] w-[20px]" />
          <h3>1800 266 6123</h3>
        </div>
        <div className="mr-[520px] ml-[30px]">
          <h3 className="cursor-pointer">Customer Support</h3>
        </div>
        <div className="mr-[60px] ml-[30px]">
          <h3 className="cursor-pointer">My orders</h3>
        </div>
        <div className="mr-[60px] ml-[30px]">
          <h3 className="cursor-pointer">Track your order</h3>
        </div>
        <div>
          <Dropdown label="My Account" menu={MyAccount} border={false} />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
