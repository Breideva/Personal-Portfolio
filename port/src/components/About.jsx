import React, { useEffect, useState } from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
} from "react-icons/io5";
import {
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiVite,
  SiFramer,
} from "react-icons/si";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const names = [
  "HTML",
  "CSS",
  "Javascript",
  "TailWindCSS",
  "React",
  "Bootstrap",
  "Figma",
  "Vite",
  "Framer",
  "Node",
];
const icons = [
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  SiTailwindcss,
  IoLogoReact,
  SiBootstrap,
  SiFigma,
  SiVite,
  SiFramer,
  IoLogoNodejs,
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  const changeHover = (index) => {
    setHovered(index);
  };

  const tl = gsap.timeline({});

  useEffect(() => {
    icons.forEach((_, index) => {
      gsap.to(`#skill${index}`, {
        scrollTrigger: {
          trigger: `#skill${index}`,
          start: "top 90%",
          end: "top 90%",
          scrub: 1,
        },
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    });
    gsap.to("#desc", {
      scrollTrigger: {
        trigger: "#desc",
        start: "top 90%",
        end: "top 90%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    gsap.to("#skills", {
      scrollTrigger: {
        trigger: "#skills",
        start: "top 90%",
        end: "top 90%",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.03,
    });
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#about",
        start: "top 90%",
        end: "top 90%",
        scrub: true,
      },
      opacity: 1,
      x: 0,
      duration: 0.2,
      stagger: 0.03,
    });
    gsap.to("#social", {
      scrollTrigger: {
        trigger: "#desc",
        start: "top 70%",
        end: "top 70%",
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
      className="w-full  flex justify-center items-center relative bg-bg text-text"
      style={{
        borderTop: "1px solid rgba(19, 1, 2, 0.1)",
      }}
    >
      <div className="w-9/12 h-full flex flex-col justify-around gap-8 items-center">
        <div className="flex flex-col w-full h-full items-center">
          <div
            className="py-8 text-6xl font-narrow flex flex-col items-center text-center"
            id="skills"
          >
            <div className="font-semibold text-textLoud text-6xl sm:text-7xl md:text-8xl">
              SKILLS
            </div>
            <div className="text-base md:text-lg xl:text-xl">
              Languages and Technologies frequently used
            </div>
          </div>
          <div className="w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
            {/* <IoLogoHtml5 className="p-2 rounded-md bg-bgBox transition-all duration-200 hover:scale-105 hover:bg-bgBoxHover" /> */}
            {icons.map((Item, index) => (
              <div
                className="w-full h-full relative"
                onMouseEnter={() => changeHover(index)}
                onMouseLeave={changeHover}
                key={index}
                onClick={() => console.log("Clicked ID:", "box" + index)}
                id={"skill" + index}
              >
                <Item className="w-full h-full text-text bg-bgSkillBox p-4 rounded-md" />
                {hovered === index ? (
                  <div className="rounded-md absolute text-text font-semibold transition-all cursor-default duration-300 top-0 opacity-100 bg-bg bg-opacity-75 w-full h-full flex justify-center items-center text-xl">
                    {names[index]}
                  </div>
                ) : (
                  <div className="rounded-md absolute transition-all duration-300 top-0 opacity-0 text-text bg-bg bg-opacity-85 w-full h-full flex justify-center items-center text-xl">
                    {names[index]}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="py-4 text-6xl font-narrow flex flex-col items-center"
            id="about"
          >
            <div className="font-semibold text-textLoud text-6xl sm:text-7xl md:text-8xl">
              ABOUT
            </div>
            <div className="text-base md:text-lg xl:text-xl">
              An overview of my skills and me
            </div>
          </div>
          <div
            className="w-3/4 font-normal bg-bgSkillBox p-4 sm:p-12 text-center text-sm sm:text-base md:text-xl xl:text-2xl"
            id="desc"
          >
            Hey, my name's Evan and I specialize in crafting dynamic web
            applications using{" "}
            <span className="bg-gradient-to-r from-textLoud via-text to-textLoud text-transparent bg-clip-text">
              JavaScript{" "}
            </span>
            and{" "}
            <span className="bg-gradient-to-r from-textLoud via-text to-textLoud text-transparent bg-clip-text">
              React
            </span>
            . I have a strong passion for designing minimalistic yet powerful
            websites, always prioritizing user-friendly and visually appealing
            UIs. <br />
            <span className="bg-gradient-to-r from-textLoud via-text to-textLoud text-transparent bg-clip-text">
              TailWind CSS{" "}
            </span>
            is the tool that I usually go for when creating, responsive designs.{" "}
            <br /> APIs are a key element in my work, and I find building
            libraries with them both a rewarding challenge and a valuable skill.{" "}
            <br /> One of my favorite projects is the work I did for{" "}
            <span className="bg-gradient-to-r from-textLoud via-text to-textLoud text-transparent bg-clip-text">
              Marine Services & Management{" "}
            </span>
            , where I delivered a website that met the client’s needs and left
            them very satisfied.
          </div>
        </div>
        <div
          className="text-5xl flex justify-center gap-8 items-center pb-2 w-fit"
          id="social"
          style={{
            borderBottom: "1px solid rgba(19, 1, 2, 0.1)",
          }}
        >
          <a href="mailto:evanbreidecker@gmail.com">
            <IoMail className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
          </a>
          <a href="https://github.com/Breideva">
            {" "}
            <IoLogoGithub className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
          </a>
          <a href="https://www.linkedin.com/in/evan-breidecker-917211265/">
            <IoLogoLinkedin className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
          </a>
        </div>
        <a href="/" className="text-textLoud mb-8">
          Portfolio Code
        </a>
      </div>
    </div>
  );
}
