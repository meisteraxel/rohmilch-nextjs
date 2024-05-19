import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="container mx-auto mt-auto p-10 sm:flex-row sm:gap-0 gap-4 flex-col flex items-center justify-between text-xs font-inter-bold text-white">
      <div>
        <p>
          Mit{" "}
          <img
            className="inline-block mb-1 ml-[1px]"
            src="/heart.png"
            alt="Heart Icon"
          />{" "}
          erstellt in Berlin & Sachsen
        </p>
      </div>
      <Link href="/disclaimer" className="text-white hover:underline">
        Disclaimer
      </Link>
    </footer>
  );
}

export default Footer;
