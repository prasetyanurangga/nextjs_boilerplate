import React from "react";
import Link from "next/link";

export default function ItemGallery(props) {
  const { picture } = props;
  return (
    <Link href={picture.href}>
      <a key={picture.id} className="group">
        <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
          <img
            src={picture.imageSrc}
            alt={picture.imageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{picture.name}</h3>
        </div>
        <p className="mt-1 text-sm italic text-gray-500">
          {picture.description}
        </p>
      </a>
    </Link>
  );
}