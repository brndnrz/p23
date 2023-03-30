import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Work_Sans, Syne } from "next/font/google";

import { useRef } from "react";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

const Layout = ({ children }) => {
  const topRef = useRef();

  return (
    <div
      className={`${syne.variable} ${workSans.variable} relative pt-6 lg:max-w-[1800px]
      text-textBlack  lg:mx-auto   w-full  h-screen`}
    >
      <div ref={topRef} className="absolute top-0 left-0 w-2 h-2 "></div>
      <Nav />
      {children}
      <Footer topRef={topRef} />
    </div>
  );
};

export default Layout;
