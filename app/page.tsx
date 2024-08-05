"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GeneralSection from "./ui/GeneralSection/GeneralSection";
import AboutMe from "./ui/AboutMe/AboutMe";
import Skills from "./ui/Skills/Skills";
import Certificate from "./ui/Certificate/Certificate";
import Project from "./ui/Projects/Project";
import { project } from "./project";
import GetInTouch from "./ui/GetInTouch/GetInTouch";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 800,
    });
  }, []);

  return (
    <main style={{ overflow: "hidden" }}>
      <GeneralSection />
      <AboutMe />
      <Skills />
      <Certificate />
      {project.map((project, index) => (
        <div key={index}>
          <Project
            nameProject={project.name}
            description={project.description}
            image={project.image}
          />
        </div>
      ))}
      <GetInTouch />
    </main>
  );
}
