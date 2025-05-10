import Link from "next/link";
import HeaderItem from "./HeaderItem";
import React, { useState } from "react";
import { HamburgerMenu } from "@UI";
import MobileHeader from "./MobileHeader";

const headerItems = [
  {
    href: "about-me",
    title: "About Me",
  },
  {
    href: "/#employment-history",
    title: "Employment History",
  },
  {
    href: "/#education",
    title: "Education",
  },
  {
    href: "/#courses",
    title: "Courses",
  },
  {
    href: "/#projects",
    title: "Projects",
  },
  {
    href: "/#hackathons",
    title: "Hackathons",
  },
];
const Header = () => {
  return (
    <>
      <header className="hidden sm:flex fixed justify-center sm:justify-between w-screen border-solid bg-bg1 border-border1 border-b border-0 px-4 py-5 z-20">
        <div>
          <Link
            href="/"
            className="text-center sm:text-start mx-4 font-bold text-xl cursor-pointer"
          >
            Jaagup Tomingas
          </Link>
          {headerItems.map((headerItem) => (
            <HeaderItem
              key={`title-${headerItem.title
                .replaceAll(" ", "-")
                .toLowerCase()}`}
              href={headerItem.href}
            >
              {headerItem.title}
            </HeaderItem>
          ))}
        </div>
        {/* <Button intent="clickable">
                    Dark mode switcher
                </Button> */}
      </header>
      <MobileHeader headerItems={headerItems} />
    </>
  );
};

export default Header;
