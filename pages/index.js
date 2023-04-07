import Head from "next/head";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import data from "@/data";
import Project from "@/components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brandon Ruiz</title>
        <meta
          name="description"
          content="Brandon Ruiz is an Award Winning Software Developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        {/* create animated slide show of portfolio products */}
        {/* <Featured /> */}
        <section className="mt-20 w-full  lg:grid lg:grid-cols-2 lg:w-[90%] mx-auto flex flex-col gap-14 h-auto p-6">
          {data.map((item) => {
            return <Project key={item.id} project={item} />;
          })}
        </section>
        <section className="w-full  lg:w-[90%] mx-auto mt-8 mb-16 text-2xl font-syne flex justify-center gap-8 p-8">
          <Link href="/all">
            <button className="px-4 py-2 flex  gap-2 justify-center items-center rounded-2xl bg-cardGrey hover:bg-gradient-to-b from-[#ff9838] to-[#fe7a11]  hover:text-white hover:duration-200">
              <p className="">Work Archive</p>
              <BsArrowUpRightCircle />
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
