import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export default function DisplayProject() {
  const location = useLocation();
  const { title, desc, lang, type } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    console.log(location);
  });

  return (
    <div className="w-full h-[250vh] absolute z-30 flex justify-center bg-bg">
      <div className="w-7/12 h-full flex flex-col py-8 font-narrow gap-8">
        <div className="flex justify-between items-center gap-8">
          <Link to="/#projects" className="text-2xl w-1/4">
            <MdKeyboardDoubleArrowLeft className="text-4xl" />
          </Link>
          <div className="flex flex-col w-1/2 justify-center text-center">
            <h1 id="top" className="font-black italic text-textLoud text-8xl">
              {title}
            </h1>
            <p className="text-lg">{desc}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/4 items-end justify-center text-center">
            {lang.map((item, index) => (
              <div className="text-2xl border-2 border-text w-1/2" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-zinc-800 w-full h-[65vh]"></div>
          <div className="bg-zinc-800 w-full h-[65vh]"></div>
          <div className="bg-zinc-800 w-full h-[65vh]"></div>
        </div>
      </div>
    </div>
  );
}
