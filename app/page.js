"use client";
import { useState, useEffect } from "react";
import Pageload from "./components/Pageload";
import { motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";

function Home() {
  // Initialize runPageload based on session storage
  const [runPageload, setRunPageload] = useState(
    sessionStorage.getItem("visited") === null
  );

  useEffect(() => {
    if (sessionStorage.getItem("visited") === null) {
      setTimeout(() => {
        sessionStorage.setItem("visited", "true");
      }, 1000);
    }
  }, []);

  const [toggleView, setToggleView] = useState("Liste");

  function setList() {
    setToggleView("Liste");
  }

  function setMap() {
    setToggleView("Karte");
  }

  return (
    <>
      {runPageload && <Pageload />}
      <div className="container mx-auto py-5 flex flex-col items-center mb-10 px-5">
        <motion.h1
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: "spring" }}
          className="md:text-6xl text-5xl text-center font-inter-black mb-10 mt-20"
        >
          Rohmilch
          <br />
          <span className="font-pacifico mt-2 md:text-5xl text-4xl">
            Übersicht
          </span>
        </motion.h1>
        <div className="container relative flex flex-col max-w-[1000px]">
          <img
            src="/gras-icon.svg"
            alt=""
            className="absolute -z-10 w-16 h-16 -left-12 top-1 hidden lg:block"
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
          <div className="md:self-end self-center mb-3">
            <button
              onClick={setList}
              className={`cta-button w-24 px-4 py-2 font-inter-bold ${
                toggleView === "Liste" ? "bg-black text-white !important" : ""
              }`}
            >
              Liste
            </button>
            <button
              onClick={setMap}
              className={`cta-button w-24 px-4 py-2 font-inter-bold ${
                toggleView === "Karte" ? "bg-black text-white" : ""
              }`}
            >
              Karte
            </button>
          </div>
          <div className="bg-[#fafafa] p-5 rounded-xl">
            {toggleView === "Liste" && (
              <iframe
                src="https://airtable.com/embed/appVQeK2S27Ao22O2/shrxwBedOL86REAZz?backgroundColor=purple&layout=card&viewControls=on"
                className="bg-white w-full h-[60vh] rounded-2xl border"
                title="Listenansicht aller Stationen"
              ></iframe>
            )}
            {toggleView === "Karte" && (
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1j-vSFXpJLG0BVcDzCjzG6S4hqTxNTvs&ehbc=2E312F&noprof=1"
                className="bg-white w-full h-[60vh] rounded-2xl border"
                title="Kartenansicht aller Stationen"
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default Home;
