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
      <div className="flex-wrap w-fit">
        {data.projects.map((item, index) => (
          <div
            className="flex flex-col p-12 rounded-md mb-8 hover:scale-105 transition-all duration-300 bg-bgBox"
            key={index}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Link
                    to="/project"
                    state={{
                      title: item.title,
                      desc: item.desc,
                      lang: item.lang,
                      type: item.type,
                    }}
                    className="text-textLoud text-4xl md:text-7xl font-semibold hover:text-textLoudHover transition-all duration-300"
                  >
                    {item.title}
                  </Link>
                  {item.icons == "github" ? (
                    <p className=" text-xl lg:text-3xl">
                      <a href="https://github.com/Breideva">
                        <FaGithub />
                      </a>
                    </p>
                  ) : (
                    <div className="flex gap-2 text-xl md:text-3xl">
                      <a href="https://github.com/Breideva">
                        <FaGithub />
                      </a>
                      <a href="https://msmboatcare.com/">
                        <FaGlobe />
                      </a>
                    </div>
                  )}
                </div>
                <p className="font-thin text-xs md:text-base lg:text-lg lg:w-1/2">
                  {item.desc}
                </p>
              </div>
              <div>
                <h3 className=" text-xl md:text-5xl font-medium">
                  {item.type}
                </h3>
                <h3 className="flex gap-1 text-base xl:text-2xl font-normal">
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
