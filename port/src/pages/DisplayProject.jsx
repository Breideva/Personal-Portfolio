import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DisplayProject() {
  const location = useLocation();
  const { title, desc, lang, type, imgs } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);

    const tl = gsap.timeline({});

    gsap.to(".title", {
      opacity: 1,
      x: 0,
      duration: 0.2,
    });

    gsap.to("#items > div", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
    });
    gsap.to("#img0", {});
    imgs.forEach((_, index) => {
      tl.to("#img0", {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }).to(`#img${index}`, {
        scrollTrigger: {
          trigger: index == 0 ? ".title" : `#img${index - 1}`,
          start: "center 20%",
          end: "top 20%",
          scrub: 1,
          markers: true,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    });
  }, []);

  useEffect(() => {
    console.log(location);
  });

  return (
    <div className="w-full absolute z-30 flex justify-center bg-bg">
      <div className="w-7/12 h-full flex flex-col py-8 font-narrow gap-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8">
          <Link to="/#projects" className="text-2xl lg:w-1/4 title">
            <MdKeyboardDoubleArrowLeft className="text-3xl sm:text-5xl lg:text-7xl" />
          </Link>
          <div
            // id="title"
            className="flex flex-col lg:w-1/2 justify-center text-center title"
          >
            <h1 className="font-black italic text-textLoud text-6xl sm:text-7xl md:text-8xl">
              {title}
            </h1>
            <p className="text-base md:text-lg xl:text-xl">{desc}</p>
          </div>
          <div
            id="items"
            className="flex flex-row lg:flex-col flex-wrap gap-2 lg:w-1/4 md:items-end justify-center text-center"
          >
            {lang.map((item, index) => (
              <div
                className="text-lg md:text-xl p-1 lg:p-0 xl:text-2xl border-2 border-text lg:w-1/2"
                id={`tech${index}`}
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          {imgs.map((image, index) => (
            <div className="w-full text-center" key={index}>
              <img
                id={`img${index}`}
                loading="lazy"
                className="w-full"
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
