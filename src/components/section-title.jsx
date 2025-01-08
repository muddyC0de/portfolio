import React from "react";

export const SectionTitle = ({ title, Icon }) => {
  return (
    <h1 className="font-medium flex items-center text-3xl gap-3 mb-[90px] ">
      <Icon className="text-[#14DF9B] " size={35} />
      {title}
    </h1>
  );
};
