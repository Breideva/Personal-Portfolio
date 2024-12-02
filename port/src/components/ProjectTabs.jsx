import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import data from "../data/ProjectData.json";
import MediumWide from "../assets/GrassBeach.avif";

export default function ProjectTabs({}) {


  // const langs = Array.isArray(lang) ? lang : [];

  // useEffect(() => {
  //   console.log("Selected Title:", type);
  // }, [selectedType]);

  // const clicked = () => {
  //   setSelectedTitle(item.title);
  //   setSelectedType(type);
  //   setSelectedLang(lang);
  //   setSelectedDesc(desc);
  // };

  return (
    <div className="w-full">
      <div className="flex-wrap w-full">
        {data.projects.map((item, index) => (
          <div
            className="flex flex-col p-12 rounded-md mb-8 hover:scale-105 transition-all duration-300 bg-bgBox w-full"
            key={index}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start w-full">
              <div className="lg:w-2/3 xl:w-full">
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <Link
                    to="/project"
                    state={{
                      title: item.title,
                      desc: item.desc,
                      lang: item.lang,
                      type: item.type,
                    }}
                    className="text-textLoud text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold hover:text-textLoudHover transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                  {item.icons == "github" ? (
                    <p className=" text-xl sm:text-2xl md:text-3xl">
                      <a href="https://github.com/Breideva">
                        <FaGithub />
                      </a>
                    </p>
                  ) : (
                    <div className="flex gap-2 text-xl sm:text-2xl md:text-3xl">
                      <a href="https://github.com/Breideva">
                        <FaGithub />
                      </a>
                      <a href="https://msmboatcare.com/">
                        <FaGlobe />
                      </a>
                    </div>
                  )}
                </div>
                <p className="font-thin text-xs sm:text-sm md:text-base lg:text-base xl:text-lg lg:w-3/4 xl:w-1/2">
                  {item.desc}
                </p>
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/2 justify-center items-center lg:items-start xl:items-end flex flex-col lg:gap-1">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-medium">
                  {item.type}
                </h3>
                <h3 className="flex flex-wrap gap-1 text-sm sm:text-lg lg:text-base xl:text-xl font-normal">
                  {item.lang.map((i, index) => (
                    <span>
                      {i}
                      {item.lang.length - 1 > index ? "," : ""}
                    </span>
                  ))}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
