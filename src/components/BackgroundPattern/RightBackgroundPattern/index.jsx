import React from "react";

export default function RightBackgroundPattern(props) {
  return (
    <div
      aria-hidden="true"
      className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
    >
      <svg
        className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
      >
        <defs>
          <pattern
            id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
        />
      </svg>
    </div>
  );
}