import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import HTML from "../../../public/pictures/HTML.jpg";
import Javascript from "../../../public/pictures/Javascript.jpg";
import ReactJS from "../../../public/pictures/React.jpg";

export default function Certificate() {
  return (
    <section id="Certificate" className={styles.section}>
      <div className={styles.container}>
        <div
          // data-aos="fade-up"
          // data-aos-delay="500"
          // data-aos-duration="1000"
          className={styles.titleSectionText}
        >
          Certificate
        </div>

        <div
          // data-aos="fade-up"
          // data-aos-delay="900"
          // data-aos-duration="900"
          className={styles.certificateContainer}
        >
          <div className={styles.wrapper}>
            {[
              {
                name: "Build Responsive Real-World Websites with HTML and CSS",
                instructors: "by Jonas Schmedtmann",
                image: HTML,
                description:
                  "Certificate of completion HTML and CSS course on Udemy",
              },
              {
                name: "The Complete JavaScript Course: From Zero to Expert",
                instructors: "by Jonas Schmedtmann",
                image: Javascript,
                description:
                  "Certificate of completion Javascript course on Udemy",
              },
              {
                name: "The Ultimate React Course: React, Redux & More",
                instructors: "by Jonas Schmedtmann",
                image: ReactJS,
                description:
                  "Certificate of completion ReactJS course on Udemy",
              },
            ].map((skill, index) => (
              <div className={styles.certificateElementContainer} key={index}>
                <div className={styles.imageContainer}>
                  <Image
                    src={skill.image}
                    height={500}
                    width={700}
                    alt={skill.description}
                  />
                </div>

                <div className={styles.textContainer}>
                  <div className={styles.courseName}>{skill.name}</div>

                  <div className={styles.instructorsText}>
                    {skill.instructors}
                  </div>

                  <div className={styles.courseDescription}>
                    {skill.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
