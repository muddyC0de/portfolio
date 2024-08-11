import React from "react";

export const SectionTitle = ({ title, imageUrl, width = 18 }) => {
  return (
    <h1 className="font-medium flex items-center text-3xl mb-[90px] ">
      <img src={imageUrl} width={width} className={"mr-[16px]"} alt={title} />
      {title}
    </h1>
  );
};
