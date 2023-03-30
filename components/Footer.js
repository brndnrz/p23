import { BsArrowUpCircle } from "react-icons/bs";

const Footer = ({ topRef }) => {
  const handleScroll = () => {
    const top = topRef.current;
    if (top) {
      top.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`you're signed up! ${e.target[0].value}`);
    e.target[0].value = "";
  };
  return (
    <footer className="flex flex-col md:w-[90%] mx-auto items-center justify-center gap-8 px-8 py-12 mb-12   font-syne">
      <h3 className="text-2xl ">Check Out My Weekly Newsletter</h3>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center w-full lg:w-[65%] gap-6 text-lg "
      >
        <input
          type="email"
          name="email"
          id="email"
          className="p-4 text-textBlack bg-cardGrey text-md w-[50%] placeholder:text-md focus:outline-none rounded-2xl"
          placeholder="Enter your email address..."
        />
        <button
          type="submit"
          className="px-4 py-2 text-white outline bg-textBlack rounded-2xl hover:bg-gradient-to-b  from-[#ff9838] to-[#fe7a11]  hover:text-white hover:duration-200"
        >
          Sign Up
        </button>
      </form>
      <div className="flex items-center w-full mt-16 ">
        <h3 className="px-4 py-2 my-auto text-lg font-medium rounded-xl bg-cardGrey">
          p23
        </h3>
        <BsArrowUpCircle
          onClick={handleScroll}
          className="ml-auto text-4xl cursor-pointer hover:text-[#f37a11] "
        />
      </div>
    </footer>
  );
};

export default Footer;
