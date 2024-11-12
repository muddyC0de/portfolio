import clsx from "clsx";
import React from "react";
import { sectionIds } from "../App";
const nav = ["ABOUT ME", "SKILLS", "WORKS", "CONTACTS"];

export const Navigation = ({ activeId, setActiveId, className }) => {
  return (
    <ul
      className={clsx(
        className,
        "flex flex-col sm:flex-row  gap-[15px] md:gap-8"
      )}
    >
      {nav.map((item, index) => (
        <a href={"#" + activeId}>
          <li
            onClick={() => setActiveId(sectionIds[index])}
            className={clsx(
              "cursor-pointer font-[500] tracking-[5px] text-[30px] sm:text-[22px]  relative after:content-[''] after:bg-[rgb(20,_223,_155)] after:h-[5px]   after:absolute after:top-[40px]  after:left-0 after:[box-shadow:rgba(20,_223,_155,_0.7)_0px_0px_15px] after:[transition:0.2s_ease-in-out] after:opacity-0 after:w-0",
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
