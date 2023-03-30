import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 py-10 h-5/6 mb-32 lg:h-[600px]    lg:flex-row lg:w-[90%] lg:mx-auto">
      <div className="bg-cardGrey  text-textBlack flex flex-col  p-12 lg:px-12 lg:py-16 w-[90%] lg:w-[55%]    mx-auto  rounded-2xl lg:h-full">
        <h1 className="mb-4 text-3xl font-medium tracking-tighter sm:text-4xl lg:text-5xl font-work">{`Hey, I'm Brandon`}</h1>
        <h3 className="mb-12 text-xl sm:text-2xl lg:text-3xl font-syne text-textGrey">{`Software Developer | Digital Designer | CFB Fan`}</h3>
        <h3 className="mb-6 text-2xl tracking-tighter sm:text-3xl lg:text-4xl text-textBlack font-syne">
          Welcome to the Space
        </h3>
        <Link href="/contact">
          <button className="w-full lg:w-[25%] font-syne py-4 shadow-shadows text-xl text-white rounded-2xl bg-textBlack hover:bg-gradient-to-b  from-[#ff9838] to-[#fe7a11] hover:text-white hover:duration-200">{`Let's Talk`}</button>
        </Link>
      </div>

      <div className="  flex justify-center  gap-8 rounded-2xl  w-[90%] lg:w-[45%]  mx-auto">
        <Image
          src="/me.JPG"
          height={200}
          width={100}
          alt="Brandon Ruiz Profile Photo"
          className="object-cover w-[50%] rounded-2xl"
        ></Image>
        <div className="flex flex-col w-[50%] gap-8  ">
          <div className="rounded-2xl bg-cardGrey h-[70%] text-left p-12 flex  justify-center items-center">
            <h3 className="w-full sm:text-2xl lg:text-3xl font-syne ">
              Total Following{" "}
              <span className="text-4xl font-semibold font-work">250K</span>
            </h3>
          </div>
          <div className="flex items-center justify-center bg-cardGrey rounded-2xl gap-4 sm:gap-8 h-[30%] text-2xl">
            <a
              target="_blank"
              href="https://twitter.com/brndnrz"
              className="p-2 rounded-full hover:bg-gradient-to-br from-[#ff9838] to-[#fe7a11] hover:duration-200 hover:text-white "
            >
              <FiTwitter />
            </a>
            <a
              target="_blank"
              href="https://github.com/brndnrz"
              className="p-2 rounded-full hover:bg-gradient-to-br from-[#ff9838] to-[#fe7a11] hover:duration-200 hover:text-white "
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/brndnrz/"
              className="p-2 rounded-full hover:bg-gradient-to-br from-[#ff9838] to-[#fe7a11] hover:duration-200 hover:text-white "
            >
              <GrLinkedinOption />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
