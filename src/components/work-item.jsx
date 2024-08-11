import clsx from "clsx";
import React from "react";

export const WorkItem = ({
  title,
  description,
  techStack,
  link,
  isReflected,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "relative flex  items-center",
        isReflected ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={clsx(
          "border  absolute z-10   max-w-[50%] space-y-3 p-4 border-solid bg-white border-primary rounded-lg",
          isReflected ? "right-[10px]" : "left-[-10px]"
        )}
      >
        <h1 className="text-primary font-semibold font-roboto flex items-center text-2xl">
          {title}
          <a href={link}>
            <svg
              className="ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </h1>
        <p className="font-roboto text-lg">{description}</p>
        <div className="flex flex-wrap cursor-default">
          {techStack.map((tech) => (
            <div className="font-roboto mr-2 my-1 p-2 border border-solid border-primary rounded-md">
              {tech}
            </div>
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
