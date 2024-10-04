import React from "react";

function ToolTip({ label }) {
  return (
    <div className="absolute hidden group-hover:block w-max p-2 bg-gray-800 text-white text-sm rounded shadow-lg -bottom-10 left-1/2 transform -translate-x-1/2">
      <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-gray-800"></div>
      {label}
    </div>
  );
}

export default ToolTip;
