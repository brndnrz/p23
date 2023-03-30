import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className=" flex w-full items-center mx-auto lg:w-[90%] h-24 px-8 md:px-10 lg:px-0 text-lg font-medium font-syne md:text-xl ">
      <Link href="/">
        <div className="px-4 py-2 my-auto hover:rounded-xl hover:bg-cardGrey ">
          p23
        </div>
      </Link>
      <ul className="flex items-center gap-6 ml-auto ">
        <Link href="/all">
          <li className="px-4 py-2 hover:rounded-xl hover:bg-cardGrey">
            <p>Work</p>
          </li>
        </Link>
        <Link href="/about">
          <li className="px-4 py-2 hover:rounded-xl hover:bg-cardGrey">
            <p>About</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
