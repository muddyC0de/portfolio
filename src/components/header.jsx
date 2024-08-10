import React from "react";
import { Navigation } from "./navigation";
import clsx from "clsx";

export const Header = ({ className }) => {
  return (
    <header
      className={clsx(
        className,
        "flex  justify-center  md:justify-end items-center text-[22px] font-extrabold w-full fixed h-[98px] top-0 z-50 bg-white"
      )}
    >
      <Navigation />
    </header>
  );
};
