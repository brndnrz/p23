import React from "react";
import data from "@/data";
import Project from "@/components/Project";

const All = () => {
  return (
    <div className="h-auto py-10 font-syne">
      <section className=" w-full   lg:grid lg:grid-cols-2 lg:w-[90%] mx-auto flex flex-col gap-14 h-auto p-6">
        {data.map((item) => {
          return <Project key={item.id} project={item} />;
        })}
      </section>
    </div>
  );
};

export default All;
