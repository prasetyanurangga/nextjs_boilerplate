import React from "react";
import PropTypes from "prop-types";

import MainLayout from "@/components/layout/MainLayout";
import ItemGallery from "@/components/Custom/Gallery/ItemGallery";
import HeadingTwo from "@/components/Typograph/HeadingTwo";

export default function Gallery(props) {
  const { pictures } = props;
  return (
    <>
      <div className="relative pt-6 pb-4 sm:pb-24 lg:pb-12 ">
        <MainLayout>
          <div className="relative  mx-auto max-w-7xl py-4 bg-white overflow-hidden pt-4 pb-10 px-4 sm:px-6 lg:pt-4 lg:pb-10 lg:px-8">
            <div className="bg-white">
              <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <HeadingTwo title="Galleri" />
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                  {pictures.map((picture) => (
                    <ItemGallery picture={picture} key={picture.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </>
  );
}

Gallery.defaultProps = {
  pictures: [
    {
      id: 1,
      name: "unknown",
      href: "/a",

      description:
        "Gunung Everest (bahasa Inggris: Mount Everest) adalah gunung tertinggi di dunia (jika diukur dari permukaan laut). Rabung puncaknya menandakan perbatasan ...",
      imageSrc: "/img/gallery/1.JPG",
      imageAlt:
        "Person using a pen to cross a task off a pictureivity paper card.",
    },
    {
      id: 2,
      name: "unknown",
      href: "/b",

      description:
        "Danau Toba terletak di Sumatra Utara dan menjadi salah satu dari keajaiban alam di dunia. Danau ini adalah danau terbesar di Asia Tenggara dan juga dikenal ...",
      imageSrc: "/img/gallery/2.JPG",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",
    },
    {
      id: 3,
      name: "unknown",
      href: "/c",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/3.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 4,
      name: "unknown",
      href: "/d",

      description:
        "Cappadocia adalah wilayah kuno yang terletak di Turki tengah selatan atau tenggara Ankara. Cappadocia berada di dataran tinggi yang terjal di ...",
      imageSrc: "/img/gallery/4.JPG",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 5,
      name: "unknown",
      href: "/d",

      description: "Heather Gray",
      imageSrc: "/img/gallery/5.JPG",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
    {
      id: 6,
      name: "unknown",
      href: "/e",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/6.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 7,
      name: "unknown",
      href: "/e",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/7.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 8,
      name: "unknown",
      href: "/h",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/8.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 9,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/9.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 10,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/10.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 11,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/11.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 11,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/12.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 12,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/13.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 13,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/14.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 14,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/15.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 15,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/16.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },

    {
      id: 17,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/17.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 18,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/18.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },

    {
      id: 19,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/19.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 20,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/20.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 21,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/21.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 22,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/22.JPG",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 23,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/23.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 24,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/24.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 25,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/25.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 25,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/26.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 26,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/27.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    {
      id: 27,
      name: "unknown",
      href: "/a",

      description:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum....",
      imageSrc: "/img/gallery/28.jpg",
      imageAlt:
        "Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.",
    },
    // More pictures...
  ],
};

Gallery.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.object),
};