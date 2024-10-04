import React from "react";
import Dropdown from "./DropDown";
import { Shop } from "../constants/DropdownLists";
import { Blogs } from "../constants/DropdownLists";

function Face() {
  return (
    <div className="flex mt-[15px] items-center justify-center">
      <h3 className="mr-[40px] font-semibold cursor-pointer">Home</h3>
      <div>
        <Dropdown label="Shop" menu={Shop} border={false} />
      </div>
      <h3 className="mr-[40px] font-semibold cursor-pointer ml-[20px]">Forum</h3>
      <h3 className="mr-[40px] font-semibold cursor-pointer">Bulk Enquiry</h3>
      <h3 className="mr-[40px] font-semibold cursor-pointer">New Arrivals</h3>
      <h3 className="mr-[40px] font-semibold cursor-pointer">ATL Kits Enquiry</h3>
      <div>
        <Dropdown label="Blogs" menu={Blogs} border={false} />
      </div>
    </div>
  );
}

export default Face;
