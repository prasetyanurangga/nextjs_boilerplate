import React from "react";

export default function CenterBackgroundPattern() {
  return (
    <div
      aria-hidden="true"
      className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
    >
      <div className="absolute inset-y-0 right-1/2 w-full bg-white rounded-r-3xl lg:right-72" />
      <svg
        className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
        width={404}
        height={392}
        fill="none"
        viewBox="0 0 404 392"
      >
        <defs>
          <pattern
            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
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
          height={392}
          fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
        />
      </svg>
    </div>
  );
}