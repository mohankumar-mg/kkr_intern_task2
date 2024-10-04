import React from "react";
import Card from "./Card";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";
import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";

function Categories() {
  return (
    <div className="mt-[60px]">
      <h1 className="font-semibold text-2xl px-5 text-center">Categories</h1>
      <div className="mx-[2%] flex justify-center mt-[30px]">
        <Card image={c1} label="Development Boards" />
        <Card image={c2} label="Batteries | Charges Accessories" />
        <Card image={c3} label="Drone Parts" />
        <Card image={c4} label="Sensors Modules" />
        <Card image={c5} label="Motors | Drivers | Pumps | Actuators" />
        <Card image={c6} label="IoT and Wireless" />
      </div>
      <div className="mx-[2%] flex justify-center mt-[30px]">
        <Card image={c7} label="Electronic Components" />
        <Card image={c8} label="Electronic Modules and Displays" />
        <Card image={c9} label="3D Printers and Parts" />
        <Card image={c10} label="Mechanical Parts and Workbench Tools" />
        <Card image={c11} label="Electric Vehicle Parts" />
        <Card image={c12} label="DIY Learning and Robot Kits" />
      </div>
    </div>
  );
}

export default Categories;
