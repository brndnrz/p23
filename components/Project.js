import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Project = ({ project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="relative w-full p-2 mx-auto outline outline-cardGrey  min-h-[200px] max-h-[600px] text-textBlack outline-2 hover:outline-4 font-syne rounded-2xl shadow-shadows group hover:duration-300">
        <div className="rounded-2xl overflow-hidden min-h-[150px] max-h-[400px] ">
          <Image
            src={`${project.featureIMG}`}
            width={600}
            height={400}
            alt={project.title}
            className="object-cover object-center w-full max-h-[400px]  group-hover:scale-105 group-hover:duration-500 rounded-2xl"
          ></Image>
        </div>
        <div className=" p-2  min-h-[80px]">
          <div className="flex items-center p-2 ">
            <h3 className="z-50 text-2xl font-medium">{project.title}</h3>
          </div>
          <div className="w-full p-2 text-lg text-center text-textBlack/60 group-hover:text-textBlack">
            <p className="">{project.tagline}</p>
          </div>
        </div>
        <div className="absolute invisible group-hover:visible top-0 left-0 w-full h-full  rounded-2xl bg-gradient-to-b from-transparent to-[#fe7a11]/70 flex justify-center items-center gap-6 backdrop-blur-sm">
          <h3 className="text-[50px] text-white/80 lg:text-[75px]">Explore</h3>
          <BsArrowUpRightCircle className="text-[50px] text-white/80 lg:text-[75px]" />
        </div>
      </div>
    </Link>
  );
};

export default Project;
