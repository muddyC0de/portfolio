import clsx from "clsx";
import React from "react";

export const Container = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-[1360px] h-full mx-auto px-3  lg:px-0 "
      )}
    >
      {children}
    </div>
  );
};
