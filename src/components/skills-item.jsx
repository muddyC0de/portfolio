import React from "react";

export const SkillsItem = ({ title, imageUrl }) => {
  return (
    <div className="bg-white justify-between will-change-transform h-[130px] flex w-[116px] flex-col items-center text-[23px] p-3 rounded-[20px] border border-solid border-[#f5f5f5] hover:-translate-y-1 hover:[box-shadow:0px_20px_35px_0px_rgba(0,_0,_0,_0.06)] [transition:box-shadow_0.2s_ease-in-out,_transform_0.2s_ease-in-out]">
      <img className="w-[60px]" src={imageUrl} alt={title} />
      <span className="font-medium text-[19px]">{title}</span>
    </div>
  );
};
