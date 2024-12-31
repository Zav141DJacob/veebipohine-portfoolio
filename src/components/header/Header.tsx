import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { Button } from "../button/Button";
import React from "react";
import Icon from "../icon/Icon";

const Header = () => {
  return (
    <header className="fixed flex justify-center sm:justify-between w-screen border-solid bg-bg1 border-border1 border-b border-0 px-4 py-5 z-20">
      <div>
        <Link
          href="/"
          className="text-center sm:text-start mx-4 font-bold text-xl cursor-pointer"
        >
          Jaagup Tomingas
        </Link>
        <div className="hidden sm:contents">
          <HeaderItem href="about-me">About Me</HeaderItem>
          <HeaderItem href="/#employment-history">
            Employment History
          </HeaderItem>
          <HeaderItem href="/#education">Education</HeaderItem>
          <HeaderItem href="/#courses">Courses</HeaderItem>
          <HeaderItem href="/#projects">Projects</HeaderItem>
          <HeaderItem href="/#hackathons">Hackathons</HeaderItem>
        </div>
      </div>
      <div className="absolute sm:hidden right-0 mr-4 h-full top-0 pt-0.5">
        <div className="mt-6">
          <Icon name="hamburger-menu" height={16} width={16} />
        </div>
        {/* <Button intent="clickable">
                    Dark mode switcher
                </Button> */}
      </div>
    </header>
  );
};

export default Header;
