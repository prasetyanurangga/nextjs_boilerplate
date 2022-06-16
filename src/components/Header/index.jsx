/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Link from "next/link";

import { BookmarkAltIcon, SupportIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const { features, callsToAction, resources, recentPosts, hasLogin } = props;
  return hasLogin ? (
    <Popover>
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              {/* <span className="sr-only">Workflow</span> */}
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/home/khalisakhalid.jpeg"
                alt=""
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:space-x-10">
            {/* {navigation.map((item) => (
                <Link to={item.to}>{item.name}</Link>
              ))} */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/about">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Tentang Saya
                </a>
              </Link>
              <Link href="/gallery">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Galeri
                </a>
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Artikel</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <div>
                              {resources.map((item) => (
                                <div
                                  key={item.name}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <Link href={item.to}>
                                    <a className="text-base font-medium text-gray-900">
                                      {item.name}
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                Postingan Terkini
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="text-base truncate"
                                  >
                                    <a
                                      href={item.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {" "}
                                Lihat Semua Post{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="./img/khalisakhalid.jpeg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {features.map((item) => (
                    <div
                      key={item.name}
                      to={item.to}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <Link href={item.to}>
                        <a className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/about">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Tentang Saya
                  </a>
                </Link>
                <Link href="/gallery">
                  <a className="ml-4 text-base font-medium text-gray-500 hover:text-gray-900">
                    Galeri
                  </a>
                </Link>
                {resources.map((item) => (
                  <Link href={item.to}>
                    <a className="ml-4 text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              {/* <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  ) : (
    <Popover>
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              {/* <span className="sr-only">Workflow</span> */}
              <img
                className="h-8 w-auto sm:h-10"
                src="/img/home/khalisakhalid.jpeg"
                alt=""
              />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:space-x-10">
            {/* {navigation.map((item) => (
                <Link to={item.to}>{item.name}</Link>
              ))} */}
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Link href="/about">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Tentang Saya
                </a>
              </Link>
              <Link href="/gallery">
                <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                  Galeri
                </a>
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Artikel</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            <div>
                              {resources.map((item) => (
                                <div
                                  key={item.name}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <Link href={item.to}>
                                    <a className="text-base font-medium text-gray-900">
                                      {item.name}
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </a>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                                Postingan Terkini
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((item) => (
                                  <li
                                    key={item.id}
                                    className="text-base truncate"
                                  >
                                    <a
                                      href={item.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                {" "}
                                Lihat Semua Post{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
            <a
              href="./Article"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50"
            >
              Log in
            </a>
          </span>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="./img/khalisakhalid.jpeg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {features.map((item) => (
                    <div
                      key={item.name}
                      to={item.to}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <Link href={item.to}>
                        <a className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/about">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Tentang Saya
                  </a>
                </Link>
                <Link href="/gallery">
                  <a className="ml-4 text-base font-medium text-gray-500 hover:text-gray-900">
                    Galeri
                  </a>
                </Link>
                {resources.map((item) => (
                  <Link href={item.to}>
                    <a className="ml-4 text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              {/* <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

Header.defaultProps = {
  features: [
    {
      name: "Tentang Saya",
      to: "/about",
      description:
        "Get a better understanding of where your traffic is coming from.",
    },
    {
      name: "Galeri",
      to: "/gallery",
      description: "Speak directly to your customers in a more meaningful way.",
    },
    {
      name: "Artikel",
      to: "/articledetail",
      description: "Speak directly to your customers in a more meaningful way.",
    },
  ],

  resources: [
    {
      name: "Artikel Serius",
      description: "Berisi artikel yg serius?",
      to: "/article/nonfiksi",
      icon: SupportIcon,
    },
    {
      name: "Artikel sastra",
      description: "Kumpulan karya sastra",
      to: "/article/fiksi",
      icon: BookmarkAltIcon,
    },
  ],
  recentPosts: [
    { id: 1, name: "Ayo hidup sehat", href: "#" },
    {
      id: 2,
      name: "How to use search engine optimization to drive traffic to your site",
      href: "#",
    },
    { id: 3, name: "Improve your customer experience", href: "#" },
  ],
};
Header.propTypes = {
  navigation: PropTypes.arrayOf(PropTypes.object),
  callsToAction: PropTypes.arrayOf(PropTypes.object),
  resources: PropTypes.arrayOf(PropTypes.object),
  recentPosts: PropTypes.arrayOf(PropTypes.object),
};