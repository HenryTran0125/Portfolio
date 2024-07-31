import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import time from "../../../public/pictures/time-management.png";
import critical from "../../../public/pictures/thinking.png";
import brain from "../../../public/pictures/brain.png";
import self from "../../../public/pictures/self-study.png";
import teamwork from "../../../public/pictures/teamwork.png";
import solving from "../../../public/pictures/solved.png";
import adaption from "../../../public/pictures/adaptation.png";
import javascript from "../../../public/pictures/js.png";
import react from "../../../public/pictures/science.png";
import typescript from "../../../public/pictures/typescript.png";
import next from "../../../public/icons/next-js.svg";
import restful from "../../../public/pictures/api.png";
import tailwind from "../../../public/pictures/Tailwind CSS.png";
import scss from "../../../public/pictures/scss.png";
import git from "../../../public/pictures/social.png";
import github from "../../../public/pictures/github.png";
import figma from "../../../public/pictures/figma.png";

export default function Skills() {
  return (
    <section id="Skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.developerSkillsContainer}>
          <div
            // data-aos="fade-right"
            // data-aos-delay="800"
            // data-aos-duration="1000"
            className={styles.softwareSkillAlignment}
          >
            <div className={styles.softwareSkillContainer}>
              <div className={styles.skillTitleSoftWareSide}>
                Software Skills
              </div>

              <div>
                <ul className={styles.listSkillContainer}>
                  {[
                    { name: "Javascript", icon: javascript },
                    { name: "React", icon: react },
                    { name: "Typescript", icon: typescript },
                    { name: "Next.js", icon: next },
                    { name: "Restful", icon: restful },
                    {
                      name: "TailwindCSS",
                      icon: tailwind,
                    },
                    { name: "SCSS", icon: scss },
                  ].map((skill, index) => (
                    <li className={styles.skillElement} key={index}>
                      <Image
                        src={skill.icon}
                        height={20}
                        width={20}
                        alt={skill.name}
                      />

                      <div className={styles.skillName}>{skill.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div
            // data-aos="fade-right"
            // data-easing="ease-in"
            // data-aos-delay="1000"
            // data-aos-duration="1000"
            className={styles.toolsContainer}
          >
            <div className={styles.toolSkillContainer}>
              <div className={styles.skillTitleSoftWareSide}>Tools</div>

              <div>
                <ul className={styles.listToolContainer}>
                  {[
                    { name: "Git", icon: git },
                    { name: "Github", icon: github },
                    { name: "Figma", icon: figma },
                  ].map((skill, index) => (
                    <li className={styles.skillElement} key={index}>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={20}
                        height={20}
                      />
                      <div className={styles.skillName}>{skill.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          // data-aos="fade-left"
          // data-easing="ease-in"
          // data-aos-delay="1000"
          // data-aos-duration="1000"
          className={styles.softSkillsContainer}
        >
          <div className={styles.softSkillsDeveloperContainer}>
            <div className={styles.skillTitle}>Soft Skills</div>
            <div className={styles.listSkillContainer}>
              <ul className={styles.ul}>
                {[
                  { name: "Time Management", icon: time },
                  { name: "Critical Thinking", icon: critical },
                  { name: "Brain Storming", icon: brain },
                  { name: "Self-Learning", icon: self },
                  { name: "Team Work", icon: teamwork },
                  { name: "Problem-Solving Skill", icon: solving },
                  { name: "Adaptability", icon: adaption },
                ].map((skill, index) => (
                  <li className={styles.li} key={index}>
                    <Image
                      src={skill.icon}
                      width={20}
                      height={20}
                      alt={skill.name}
                    />
                    <div className={styles.skillName}>{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          // data-aos="zoom-in"
          // data-aos-delay="500"
          // data-aos-duration="1000"
          className={styles.skillText}
        >
          Skills
        </div>
      </div>
    </section>
  );
}
