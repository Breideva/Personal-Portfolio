import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTabs from "./ProjectTabs";
import MediumWide from "../assets/GrassBeach.avif";
gsap.registerPlugin(ScrollTrigger);

export default function Projects({}) {
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    console.log(selectedTitle);
  }, [selectedTitle]);

  useEffect(() => {
    gsap.to(".box", {
      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
    });
    gsap.to(".box-2", {
      scrollTrigger: {
        trigger: ".box",
        start: "top 60%",
        end: "top 20%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
    });
  }, []);

  return (
    <div
      id="projects"
      className="w-full h-[125vh] flex justify-center items-center relative bg-slate-400 "
      //   style={{
      //     backgroundImage: "linear-gradient(to left bottom, #EF9880, #FFFFFF)",
      //   }}
    >
      <div className="w-9/12 h-full flex py-8 border-t-2 border-white">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-dense gap-x-8">
          <div className="w-full h-full box col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="Press Play"
              type="Video Game Library"
              desc=""
              lang={["React", "TailwindCSS", "RAWG API"]}
            />
          </div>
          <div className="box col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="Feed Me Flavor"
              type="Recipe Library"
              desc=""
              lang={["Javascript, React, TailwindCss, Spoonacular API"]}
            />
          </div>
          <div className="box col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="Card Quest"
              type="Card Game"
              desc=""
              lang={["Javascript"]}
            />
          </div>
          <div className="box-2 col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="MSM"
              type="Landing Page"
              desc=""
              lang={["Javascript, React, TailwindCss"]}
            />
          </div>
          <div className="box-2 col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="Mr.8Ball"
              type="Interactive Game"
              desc=""
              lang={["Javascript"]}
            />
          </div>
          <div className="box-2 col-span-1">
            <ProjectTabs
              image={MediumWide}
              height="3/4"
              title="St.Louis Co"
              type="Location Site"
              desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in
        numquam natus aliquid autem amet eaque molestiae cum inventore aperiam!"
              lang="Javascript, React, TailwindCss, APi"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
