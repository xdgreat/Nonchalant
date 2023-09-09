// import MenuOpen from "../../public/assets/menuopen.png";
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpenSrc = "/assets/menuopen.png";
  const menuCloseSrc = "/assets/menuclose.png";
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex sticky z-50 top-0 left-0 bg-black justify-between items-center h-[10dvh] px-2">
      <Link href={"/"}>
        <h3 className="text-3xl font-medium">Nonchalant&trade;</h3>
      </Link>
      <img
        src={isOpen ? menuOpenSrc : menuCloseSrc}
        alt="menuopen"
        className="w-12"
        onClick={handleMenuClick}
      />
      {isOpen ? (
        <ul
          className="absolute px-4 bg-black w-full inset-0 z-50 h-[90dvh] flex flex-col gap-4 font-medium top-[10dvh] uppercase text-lg "
          style={{ fontFamily: "'Mulish', sans-serif" }}
        >
          <hr className="w-full mb-4" />

          <li>
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/events"} onClick={() => setIsOpen(false)}>
              Events
            </Link>
          </li>
          <li>
            <Link href={"/gallery"} onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
          <li>
            <Link href={"/members"} onClick={() => setIsOpen(false)}>
              Members
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
