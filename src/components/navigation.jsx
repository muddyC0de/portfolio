import clsx from "clsx";
import React from "react";
import { sectionIds } from "../App";
const nav = ["ABOUT ME", "SKILLS", "WORKS", "CONTACTS"];

export const Navigation = ({ activeId, setActiveId, className }) => {
  return (
    <ul
      className={clsx(
        className,
        "flex space-x-[15px] lg:space-x-[90px] lg:mr-[90px]"
      )}
    >
      {nav.map((item, index) => (
        <a href={"#" + activeId}>
          <li
            onClick={() => setActiveId(sectionIds[index])}
            className={clsx(
              "cursor-pointer font-[500] tracking-[5px] text-[11px] sm:text-[22px] lg:text-[22px] relative after:content-[''] after:bg-[rgb(20,_223,_155)] after:h-[3px] sm:after:h-[5px]  after:absolute after:top-[18px] sm:after:top-[42px] after:left-0 after:[box-shadow:rgba(20,_223,_155,_0.7)_0px_0px_15px] after:[transition:0.2s_ease-in-out] after:opacity-0 after:w-0",
              activeId === sectionIds[index]
                ? "text-primary after:opacity-100  after:w-full "
                : "hover:after:opacity-100 hover:after:w-full"
            )}
            key={index}
          >
            {item}
          </li>
        </a>
      ))}
    </ul>
  );
};
