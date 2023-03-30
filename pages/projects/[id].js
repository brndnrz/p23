import Image from "next/image";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import data from "@/data";

const ProjectPage = ({ project }) => {
  return (
    <div className="p-6 text-textBlack font-syne  min-h-[35%]  lg:w-[90%] mx-auto">
      <div className="m-6  rounded-2xl       max-h-[900px] shadow-shadows">
        <Image
          src={project.featureIMG[0]}
          width={600}
          height={400}
          alt={project.title}
          className="object-cover object-center w-full max-h-[900px]  rounded-2xl"
        ></Image>
      </div>
      <div className="p-6 mt-12">
        <p className="my-6">
          <span className="px-4 py-2 text-sm font-bold capitalize text-textBlack/80 rounded-2xl bg-cardGrey ">
            {project.tag}
          </span>
        </p>
        <h1 className="mb-16 text-3xl font-semibold md:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <div className="flex items-center justify-end mb-16 ">
          <a href={project.link} target="_blank">
            <button className="flex items-center gap-2 px-4 py-2 text-lg font-semibold text-white shadow-shadows xl:text-2xl xl:py-4 rounded-2xl bg-textBlack hover:bg-gradient-to-b  from-[#ff9838] to-[#fe7a11] hover:text-white hover:duration-200">
              {`Visit ${project.title}`}
              <BsArrowUpRightCircle className="text-2xl lg:text-3xl xl:text-4xl " />
            </button>
          </a>
        </div>
        <div className="gap-8 md:flex ">
          <div className="p-4 mr-auto md:w-[80%] bg-cardGrey rounded-2xl">
            <h3 className="p-4 text-lg font-semibold md:text-xl lg:text-2xl">
              About {project.title}
            </h3>
            <h3 className="p-4 text-md md:text-lg font-work text-textBlack/80">
              {project.description}
            </h3>
          </div>
          <div className="p-4  flex flex-wrap gap-2  justify-center items-centermt-6 md:mt-0 md:w-[20%] ml-auto   ">
            {project.stack.map((item, idx) => {
              return (
                <div
                  className="flex items-center px-2 text-sm font-bold text-center text-textBlack/80 "
                  key={idx}
                >
                  <p className="p-2 rounded-md bg-cardGrey">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  let pageID = context.params.id;
  return {
    props: { project: data[pageID] },
  };
}
