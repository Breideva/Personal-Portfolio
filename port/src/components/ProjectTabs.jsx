import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaGlobe, FaPlayCircle } from "react-icons/fa";
import data from "../data/ProjectData.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectTabs({}) {
  useEffect(() => {
    const tl = gsap.timeline({});

    data.projects.forEach((_, index) => {
      tl.to(`#box${index}`, {
        scrollTrigger: {
          trigger: index == 0 ? "#top" : `#box${index - 1}`,
          start: "top bottom",
          end: "end",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 0.2,
      });
    });
  }, []);

  const link = 'https://cardquestdemo.netlify.app/'

  useEffect(() => {
    console.log(data.projects.map((item) => {
      return item.link
    }))
  }, [data])
  return (
    <div className="w-full" id="top">
      <div className="flex-wrap w-full">
        {data.projects.map((item, index) => (
          <div
            className="flex flex-col p-12 rounded-md mb-8 bg-bgBox w-full"
            id={"box" + index}
            key={index}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start w-full">
              <div className="lg:w-2/3 xl:w-full">
                <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                  <div
                    // to="/project"
                    // state={{
                    //   imgs: item.imgs,
                    //   title: item.title,
                    //   desc: item.desc,
                    //   lang: item.lang,
                    //   type: item.type,
                    // }}
                    className="text-textLoud text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold hover:text-textLoudHover cursor-default transition-all duration-300"
                  >
                    {item.title}
                  </div>
                  {item.icons == "website" ? (
                    <div className="flex gap-2 text-xl sm:text-2xl md:text-3xl">
                      <a
                        href="https://github.com/Breideva/MSM"
                        className="hover:text-textLoud transition-all duration-300"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://msmboatcare.com/"
                        className="hover:text-textLoud transition-all duration-300"
                      >
                        <FaGlobe />
                      </a>
                    </div>
                  ) : (
                    <div className="flex gap-2 text-xl sm:text-2xl md:text-3xl">
                      <a
                        href={item.link2}
                        className="hover:text-textLoud transition-all duration-300"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={item.link1}
                        className="hover:text-textLoud transition-all duration-300"
                      >
                        <FaPlayCircle />
                      </a>
                    </div>
                  )}
                </div>
                <p className="font-thin text-xs sm:text-sm md:text-base lg:text-base xl:text-lg lg:w-3/4 xl:w-3/4">
                  {item.desc}
                </p>
              </div>
              <div className="w-full lg:w-1/3 xl:w-1/2 justify-center items-center lg:items-start xl:items-end flex flex-col lg:gap-1">
                <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl font-medium">
                  {item.type}
                </h3>
                <h3 className="flex flex-wrap gap-1 text-sm sm:text-lg lg:text-base xl:text-xl font-normal">
                  {item.lang.map((i, index) => (
                    <span key={index}>
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
