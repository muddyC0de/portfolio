import React from "react";
import { Navigation } from "./navigation";
import clsx from "clsx";

export const Header = ({ activeId, setActiveId, className }) => {
  const [scrollY, setScrollY] = React.useState(0);
  const [openBurger, setOpenBurger] = React.useState(false);
  const menuRef = React.useRef(null);
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return (
    <header
      className={clsx(
        className,
        "flex justify-end sm:justify-center md:justify-end px-3  items-center  font-extrabold w-full fixed h-[98px] top-0 z-40 ",
        scrollY > 0 && "bg-[#fffffff0] backdrop-blur-sm"
      )}
    >
      <div className="hidden sm:block">
        <Navigation activeId={activeId} setActiveId={setActiveId} />
      </div>

      <div className="block  sm:hidden">
        {openBurger ? (
          <button
            ref={closeRef}
            className="z-50 relative"
            onClick={() => {
              console.log("close");
              setOpenBurger(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14DF9B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        ) : (
          <button
            className=""
            onClick={() => {
              console.log("open");
              setOpenBurger(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#14DF9B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        )}

        {openBurger && (
          <div className="absolute top-0 left-0 z-40 w-full h-screen bg-[#fffffff0] backdrop-blur-sm flex items-center justify-center flex-col">
            <div ref={menuRef}>
              <Navigation activeId={activeId} setActiveId={setActiveId} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
