"use client";
import { FC, useState } from "react";
import { HamburgerMenu } from "@UI";
import Link from "next/link";
import HeaderItem from "./HeaderItem";

const MobileHeader: FC<{
  headerItems: { href: string; title: string }[];
}> = ({ headerItems }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    isOpen: boolean
  ) => {
    setIsVisible(isOpen);
  };
  return (
    <div className="relative">
      <header className="fixed shadow-md flex w-full py-5 left-0 top-0 bg-bg1 z-10">
        <div className="grow flex justify-center">
          <Link href="/" className="font-bold text-xl cursor-pointer">
            Jaagup Tomingas
          </Link>
        </div>
        <div className="absolute w-fit right-0 translate-y-1/2 mr-4">
          <HamburgerMenu handleClick={handleClick} />
        </div>
      </header>

      <div
        className={[
          isVisible ? "translate-y-full" : "-translate-y-full",
          "fixed transition-all flex flex-col top-0 w-screen text-center bg-bg1 pssst-[68px]",
        ].join(" ")}
      >
        {headerItems.map((headerItem) => (
          <HeaderItem
            key={`title-${headerItem.title.replaceAll(" ", "-").toLowerCase()}`}
            href={headerItem.href}
          >
            {headerItem.title}
          </HeaderItem>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
