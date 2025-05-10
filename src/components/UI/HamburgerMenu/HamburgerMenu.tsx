"use client";
import { FC, useState } from "react";
import Icon from "../Icon";

const HamburgerMenu: FC<{
  handleClick: (
    event: React.MouseEvent<HTMLDivElement>,
    isOpen: boolean
  ) => void;
}> = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(event: React.MouseEvent<HTMLDivElement>) {
    handleClick(event, !isOpen);
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className={["hamburger-menu", isOpen && "open"].join(" ")}
        onClick={setOpen}
      >
        <div className="icon" />
      </div>
    </>
  );
};

export default HamburgerMenu;
