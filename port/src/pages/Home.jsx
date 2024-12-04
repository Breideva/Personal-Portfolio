import React from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";


export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Projects />
      <About/>
    </div>
  );
}
