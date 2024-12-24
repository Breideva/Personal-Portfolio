import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { IoLogoGithub, IoMail, IoLogoLinkedin } from "react-icons/io5";

export default function Header() {
  useEffect(() => {
    new SplitType("#first");
    const chars = document.querySelectorAll("#first .char");

    const handleMouseEnter = (char, index) => {
      char.addEventListener("mouseenter", () =>
        scaleChange(index, char, chars)
      );
    };

    const handleMouseLeave = (char, index) => {
      char.addEventListener("mouseleave", () =>
        resetTransform(index, char, chars)
      );
    };

    chars.forEach((char, index) => {
      handleMouseEnter(char, index);
      handleMouseLeave(char, index);
    });

    const scaleChange = (index, char, chars) => {
      console.log(char);
      console.log(`${index}`);

      if (index > 0 && index !== 15) {
        const firstChar = chars[index - 1];
        firstChar.style.transform = "scaleY(2)";
        // firstChar.style.color = "#130102";
      }
      if (index < chars.length - 1 && index !== 14) {
        const thirdChar = chars[index + 1];
        thirdChar.style.transform = "scaleY(2)";
        // thirdChar.style.color = "#130102";
      }
      char.style.transform = "scaleY(2.25)";
      // char.style.color = "#130102";
    };

    const resetTransform = (index, char, chars) => {
      if (index > 0) {
        const firstChar = chars[index - 1];
        firstChar.style.transform = "scaleY(1)";
        firstChar.style.color = "#F02F34";
      }
      if (index < chars.length - 1) {
        const thirdChar = chars[index + 1];
        thirdChar.style.transform = "scaleY(1)";
        thirdChar.style.color = "#F02F34";
      }
      char.style.transform = "scaleY(1)";
      char.style.color = "#F02F34";
    };
    return () => {
      chars.forEach((char) => {
        char.removeEventListener("mouseenter", () =>
          scaleChange(index, char, chars)
        );
        char.removeEventListener("mouseleave", () =>
          resetTransform(index, char, chars)
        );
      });
    };
  }, []);

  useEffect(() => {
    const startChange = setTimeout(() => {
      document.getElementById("header").style.pointerEvents = "auto";
    }, 3500);

    return () => clearTimeout(startChange);
  }, []);

  useEffect(() => {
    const Texttl = gsap.timeline({});

    Texttl.to("#first .char", {
      x: 0,
      stagger: 0.04,
      duration: 0.1,
      delay: 0.5,
      opacity: 1,
      rotationX: 0,
    })
      .to("#second .char", {
        y: 0,
        stagger: 0.04,
        duration: 0.1,
        opacity: 1,
        onComplete: () => {
          setTimeout(() => {
            document.getElementById("second").style.clipPath = "none";
          }, 500);
        },
      })
      .to("#mail", {
        x: 0,

        duration: 0.1,
        delay: 0.5,
        opacity: 1,
      })
      .to("#github", {
        x: 0,
        duration: 0.1,
        delay: 0.1,
        opacity: 1,
      })
      .to("#linkedin", {
        x: 0,
        duration: 0.1,
        delay: 0.1,
        opacity: 1,
      })
      .to(
        "#arrow",
        {
          opacity: 1,
          delay: 0.5,
        },
        [3]
      )
      .to(
        "#arrow",
        {
          y: -15,
          yoyo: true,
          repeat: -1,
        },
        [3]
      );
  }, []);

  return (
    <div
      id="header"
      className="w-full flex justify-center items-center sticky top-0 overflow-x-hidden bg-bg text-textLoud"
      style={{
        pointerEvents: "none",
        transition: "all 3s linear",
      }}
    
    >
      <div
        className="text-3xl sm:text-4xl md:text-5xl flex justify-center gap-4 items-center pb-2 w-fit absolute top-4 right-4 text-text"
      >
        <a id="mail" href="mailto:evanbreidecker@gmail.com">
          <IoMail className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
        </a>
        <a id="github" href="https://github.com/Breideva">
          {" "}
          <IoLogoGithub className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/evan-breidecker-917211265/"
        >
          <IoLogoLinkedin className="p-1 rounded-md bg-bgSkillBox transition-all duration-300 hover:scale-105 hover:bg-bgBox" />
        </a>
      </div>
      {/* <div className="w-full h-full bg-black bg-opacity-75 absolute pointer-events-none">
      </div> */}
      <div className="w-full h-screen flex flex-col justify-center relative items-center text-center">
        <div className="w-full z-10">
          <div className="w-full font-black italic cursor-pointer relative">
            <h1 id="first" className="w-full font-narrow text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
              EVAN BREIDECKER.{" "}
              <span
                id="second"
                className="text-xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                Front-End Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full h-full absolute flex justify-center items-end text-7xl z-0 text-text">
          <MdKeyboardDoubleArrowDown id="arrow" />
        </div>
      </div>
    </div>
  );
}
