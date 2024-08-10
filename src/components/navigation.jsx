import clsx from "clsx";
import React from "react";

const nav = ["ABOUT ME", "SKILLS", "WORKS", "CONTACTS"];

export const Navigation = ({ className }) => {
  const [active, setActive] = React.useState(0);

  return (
    <ul className={clsx(className, "flex space-x-[90px] mr-[90px]")}>
      {nav.map((item, index) => (
        <li
          onClick={() => setActive(index)}
          className={clsx(
            "cursor-pointer font-[500] tracking-[5px] text-[22px]  relative after:content-[''] after:bg-[rgb(20,_223,_155)] after:h-[5px]  after:absolute after:top-[42px] after:left-0 after:[box-shadow:rgba(20,_223,_155,_0.7)_0px_0px_15px] after:[transition:0.2s_ease-in-out] after:opacity-0 after:w-0",
            active === index
              ? "text-primary after:opacity-100  after:w-full "
              : "hover:after:opacity-100 hover:after:w-full"
          )}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
