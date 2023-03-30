import Featured from "@/components/Featured";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div className="px-6 py-12   font-syne lg:w-[90%] mx-auto md:flex md:gap-12">
        <div className="overflow-hidden  rounded-2xl min-h-[200px] mb-6 max-h-[400px] md:w-[50%] md:mb-0">
          <Image
            src="/me.JPG"
            width={200}
            height={300}
            alt="p23 photo"
            className="object-cover w-full h-full rounded-2xl"
          ></Image>
        </div>
        <div className="rounded-2xl md:text-lg lg:text-xl xl:text-2xl flex flex-col justify-center items-center min-h-[200px] max-h-[400px] md:w-[50%] bg-cardGrey">
          <h3 className="w-full px-12 pt-6 pb-2 text-3xl font-semibold text-left text-textBlack/80">
            About Me
          </h3>
          <p className="px-12 pt-0 pb-6 text-textBlack/60">
            {`I am a software developer and digital designer with 5+ years experience building web apps and engaging brands. Outside of working with clients and making digital art, I enjoy video games, following college football (Hook 'Em!), and reading science fiction.`}
          </p>
        </div>
      </div>
      <section className="px-6 py-12 flex flex-col   min-h-[200px] lg:w-[90%] mx-auto">
        <h3 className="mb-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
          Things I Love
        </h3>
        <div className="">
          <Featured />
        </div>
      </section>
    </>
  );
};

export default About;
