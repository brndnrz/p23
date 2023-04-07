// import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Featured = () => {
  return (
    <div className="w-full h-auto md:w-[90%]   mx-auto px-4 py-2  overflow-hidden  flex justify-center ">
      <a href="https://atap.google.com/soli/" target="_blank">
        <div className="relative inline-block rounded-2xl overflow-hidden group max-h-[600px]">
          <div className="invisible group-hover:visible absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#fe7a11]/40 rounded-2xl flex flex-col justify-end  px-8 py-4 text-4xl   ">
            <div className="flex justify-center ">
              <h3 className="text-white ">Soli</h3>
              <BsArrowUpRightCircle className="ml-auto text-white" />
            </div>
            <p className="self-end text-lg text-white">Explore Project</p>
          </div>
          <video
            src="/loop.mp4"
            autoPlay
            muted
            loop
            className="object-cover w-full h-full rounded-2xl"
          ></video>
        </div>
      </a>
    </div>
  );
};

export default Featured;
