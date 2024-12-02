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
    // const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // tl.to("#projects", {
    //   backgroundImage: "linear-gradient(to left bottom, #FFFFFF , #F7934C",
    //   duration: 10,
    // });

  //   gsap.to(".box", {
  //     scrollTrigger: {
  //       trigger: "#projects",
  //       start: "top 80%",
  //       end: "top 5%",
  //       scrub: 1,
  //     },
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.2,
  //     stagger: 0.03,
  //   });
  //   gsap.to(".box-2", {
  //     scrollTrigger: {
  //       trigger: ".box",
  //       start: "top 70%",
  //       end: "top 20%",
  //       scrub: 1,
  //     },
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.2,
  //     stagger: 0.03,
  //   });
  }, []);

  return (
    <div
      id="projects"
      className="w-full flex justify-center items-center relative bg-bg"
      style={{
        borderTop: "1px solid rgba(19, 1, 2, 0.1)",
        // background: "linear-gradient(155deg, #E7D3BB 30%, #F02F34, #E7D3BB 60%)"
      }}
    >
      <div className="w-9/12 h-full flex flex-col items-center text-text">
        <div className="py-8 text-6xl xl:text-8xl font-narrow flex flex-col items-center justify-center text-center">
          <div className="font-semibold text-textLoud">PROJECTS</div>
          <div className="text-base xl:text-xl">
            Featuring personal projects and a professional client project
          </div>
        </div>
        <div className="py-8 font-narrow">
          <ProjectTabs/>
        </div>
      </div>
    </div>
  );
}
