import clsx from "clsx";
import React from "react";

export const Container = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-[1360px] h-full mx-auto p-[0 92px] md:p-0"
      )}
    >
      {children}
    </div>
  );
};
