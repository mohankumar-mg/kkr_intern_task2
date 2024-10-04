import React from "react";

function Card({image, label}) {
  return (
    <div className="mx-[1%] mb-[1%] shadow-xl w-[14%] h-[250px] rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
        <img src={image} alt="" className="w-[90%] h-[70%] mx-[5%] mt-[6px] mb-[10px] rounded-lg" />
        <h3 className="text-center">{label}</h3>
    </div>
  );
}

export default Card;
