"use client";
import Accordion from "../components/Accordion";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";

function Faq() {
  return (
    <>
      <div className="container mx-auto px-5 py-5 flex flex-col items-center mb-10">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring" }}
          className="md:text-6xl text-5xl text-center font-inter-black mt-20 mb-10"
        >
          FAQ
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Fragen & Antworten
          </span>
        </motion.h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src="/gras-icon.svg"
            alt=""
            className="absolute -z-10 w-16 h-16 -left-12 -top-12 hidden lg:block"
          />
          <motion.img
            src="/small-circle.svg"
            alt=""
            className=" absolute -z-10 w-3 -right-[10px] -top-[20px] opacity-0 fadeIn-animation-first hidden lg:block"
            animate={{
              x: [0, 3, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src="/circle.svg"
            alt=""
            className="absolute -z-10 w-5 -right-[35px] -top-[35px] opacity-0 fadeIn-animation-second hidden lg:block"
            animate={{
              x: [0, 4.5, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              },
            }}
          />
          <motion.img
            src="/muh.svg"
            alt=""
            className="absolute -z-10 w-28 -right-[135px] -top-[120px] opacity-0 fadeIn-animation-third hidden lg:block"
            animate={{
              x: [0, 6, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
          />
          <div className="bg-[#fafafa] p-5 rounded-xl h-[580px] flex items-center">
            <Accordion />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Faq;
