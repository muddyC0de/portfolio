import React from "react";

export const WorkItem = ({ title, description, techStack, link, imageUrl }) => {
  return (
    <div className="relative flex justify-end items-center ">
      <div className="border  absolute z-10  left-[-10px] max-w-[50%] space-y-3 p-4 border-solid bg-white border-primary rounded-lg">
        <h1 className="text-primary font-semibold font-roboto text-2xl">
          {title}
        </h1>
        <p className="font-roboto text-lg">{description}</p>
        <div className="flex space-x-1">
          {techStack.map((tech) => (
            <div className="font-roboto">{tech}</div>
          ))}
        </div>
      </div>
      <div className="">
        <img
          className="rounded-lg border border-solid object-cover  border-[#f5f5f5]"
          width={720}
          height={450}
          src={imageUrl}
          alt={title}
        />
      </div>
    </div>
  );
};
