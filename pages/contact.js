import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full min-h-[600px] flex justify-center   p-6 mb-[80px]  font-syne">
      <div className="px-8 py-12 m-6 bg-cardGrey rounded-2xl">
        <h3 className="mb-4 text-3xl font-semibold lg:text-4xl lg:mb-6">
          Looking to get in touch?
        </h3>
        <p className="mb-2  sm:w-[60%] w-full text-lg">{`Shoot me an email and I'll get back to you within 2 Days!`}</p>
        <p className="ms:w-[60%] w-[100%] mb-2 text-lg">
          {`I'm currently available for new contract work for up to 6 months.`}{" "}
        </p>
        <p className="sm:w-[60%]  text-left text-lg mb-12 lg:mb-24 text-textBlack/60">{`If you have any questions regarding pricing, daily availability, travel needs, etc., don't hesitate to include them in your message!`}</p>
        <a href="mailto:brndnruiz@gmail.com?subject=I'm Looking To Work With You!">
          <button className="sm:w-[60%] w-[90%] mx-auto flex  justify-center items-center gap-4 lg:w-[25%] font-syne py-4  sm:text-xl text-lg text-white shadow-shadows rounded-2xl bg-textBlack hover:bg-gradient-to-b  from-[#ff9838] to-[#fe7a11] hover:text-white hover:duration-200">
            Send A Message
            <FaRegPaperPlane className="text-xl sm:text-2xl lg:text-2xl" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
