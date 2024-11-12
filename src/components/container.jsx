import clsx from "clsx";
import React from "react";

export const Container = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        "max-w-[1360px] h-full mx-auto px-3 lg:px-12 xl:px-0 p-[0 92px]"
      )}
    >
      {children}
    </div>
  );
};
