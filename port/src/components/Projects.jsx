import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTabs from "./ProjectTabs";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({}) {
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    console.log(selectedTitle);
  }, [selectedTitle]);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    
    gsap.to("#projects", {
          scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            end: "top 80%",
            scrub: true,
          },
          opacity: 1,
          x: 0,
          duration: 0.2,
          stagger: 0.03,
        });
  }, []);

  return (
    <div
      className="w-full flex justify-center items-center relative bg-bg"
      style={{
        borderTop: "1px solid rgba(19, 1, 2, 0.1)",
        // background: "linear-gradient(155deg, #E7D3BB 30%, #F02F34, #E7D3BB 60%)"
      }}
    >
      <div className="w-9/12 h-full flex flex-col items-center text-text">
        <div className="py-8 font-narrow flex flex-col items-center justify-center text-center" id="projects">
          <div className="font-semibold text-textLoud text-6xl sm:text-7xl md:text-8xl">
            PROJECTS
          </div>
          <div className="text-base md:text-lg xl:text-xl">
            Showcasing Personal Projects and Professional Client Work
          </div>
        </div>
        <div className="py-8 font-narrow">
          <ProjectTabs />
        </div>
      </div>
    </div>
  );
}
