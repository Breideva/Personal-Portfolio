import React, { useEffect, useState } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export default function DisplayProject() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  });

  const { selectedTitle } = location.state || {};
  const { selectedType } = location.state || {};
  const { selectedLang } = location.state || {};
  const { selectedDesc } = location.state || {};

  return (
    <div className="w-full h-[250vh] absolute z-30 flex justify-center bg-slate-400 bg-opacity-85 ">
      <div className="w-7/12 h-full flex flex-col py-8 font-narrow gap-8">
        <div className="flex justify-between gap-8">
          <Link to="/" className="text-2xl w-1/4">
            <h3>Back</h3>
            <HiArrowSmLeft className="" />
          </Link>
          <div className="flex flex-col w-1/2 justify-center text-center">
            <h1 className="font-black italic text-8xl">{selectedTitle}</h1>
            <p>{selectedDesc}</p>
          </div>
          <div className="flex flex-col gap-2 w-1/4 items-end justify-center text-center">
            {selectedLang.map((item, index) => (
              <div className="text-3xl border-2 border-black w-1/2" key={index}>
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
