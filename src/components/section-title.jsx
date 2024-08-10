import React from "react";

export const SectionTitle = ({ title, imageUrl }) => {
  return (
    <h1 className="font-medium flex items-center text-3xl mb-[90px]">
      <img src={imageUrl} className="mr-[16px] w-[44px]" alt={title} />
      {title}
    </h1>
  );
};
