import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Header() {
  useEffect(() => {
    const eachLetter = new SplitType("#first");
    const chars = document.querySelectorAll("#first .char");
console.log(chars)

  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    const Texttl = gsap.timeline({});

    tl.to("#header", {
      backgroundImage: "linear-gradient(to right bottom, #FFFFFF , #EF9880",
      duration: 10,
    });

    Texttl.to("#first .char", {
      x: 0,
      stagger: 0.04,
      duration: 0.1,
      delay: 0.5,
      opacity: 1,
      rotationX: 0,
    }).to("#second .char", {
      y: 0,
      stagger: 0.04,
      duration: 0.1,
      opacity: 1,
      onComplete: () => {
        setTimeout(() => {
          document.getElementById("second").style.clipPath = "none";
        }, 500);
      },
    });
  }, []);

  return (
    <div
      id="header"
      className="w-full h-screen flex justify-center items-center overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(to right top, #EF9880, #FFFFFF)",
      }}
    >
      <div className="w-9/12 h-full flex flex-col justify-center items-center text-center">
        <div className="text-9xl w-full">
          <div className="w-full font-black italic cursor-pointer relative">
            <h1 id="first" className="w-full h-fit font-narrow ">
              EVAN BREIDECKER.{" "}
              <span
                id="second"
                className="text-6xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
              >
                Front-End Developer
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
