"use client";
import { useState, useEffect } from "react";

function Pageload() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`pageload-container ${isVisible ? "" : "hidden"}`}>
        <div
          className={`pageload-animation ${
            isVisible ? "" : "hidden"
          } flex items-center justify-center flex-col`}
        >
          <img src="/cow-animation-small.gif" alt="cow animation" />
          <p className="text-white font-pacifico sm:text-2xl text-lg text-center">
            Einen Moment, Kühe werden gemolken...
          </p>
        </div>
      </div>
    </>
  );
}

export default Pageload;
