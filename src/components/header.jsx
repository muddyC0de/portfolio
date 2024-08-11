import React from "react";
import { Navigation } from "./navigation";
import clsx from "clsx";

export const Header = ({ activeId, setActiveId, className }) => {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);
  return (
    <header
      className={clsx(
        className,
        "flex justify-center lg:justify-end items-center  font-extrabold w-full fixed h-[98px] top-0 z-50 ",
        scrollY > 0 && "bg-[#fffffff0] backdrop-blur-sm"
      )}
    >
      <Navigation activeId={activeId} setActiveId={setActiveId} />
    </header>
  );
};
