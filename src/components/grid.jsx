import React from "react";

export const Grid = () => {
  return (
    <div className="select-none fixed z-[-1]  h-full w-full">
      {[...Array(9)].map((_, i) => (
        <div className="h-full w-[10%] border-r border-solid border-[#f5f5f5] inline-block"></div>
      ))}
    </div>
  );
};
