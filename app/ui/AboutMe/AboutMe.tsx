import React from "react";
import styles from "./about-me.module.css";
import Image from "next/image";
import henryPicture from "../../../public/Edward.jpeg";
import barbell from "../../../public/icons/barbell.svg";
import book from "../../../public/icons/book.svg";
import game from "../../../public/icons/game-controller.svg";
import youtube from "../../../public/icons/logo-youtube.svg";
import music from "../../../public/icons/musical-notes.svg";
import search from "../../../public/icons/search.svg";

export default function AboutMe() {
  return (
    <section id="About Me" className={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        className={styles.container}
      >
        <div className={styles.introduction}>
          <div className={styles.overview}>
            <div>
              {/* <Image
                style={{ height: "624px", width: "500px" }}
                alt="Henry"
                src={henryPicture}
              /> */}
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1000"
              className={styles.nameContainer}
            >
              <div className={styles.familyName}>Trần</div>
              <div className={styles.name}>Kiến Quân</div>
            </div>
          </div>

          <div className={styles.detailInformation}>
            <div className={styles.aboutMeContainer}>
              <div className={styles.aboutMe}>about me</div>
              <div className={styles.majorTitle}>
                <div className={styles.majorText}>front end developer</div>
                <div className={styles.underline}></div>
              </div>
            </div>

            <div>
              <div>
                <p className={styles.information}>
                  My name is Quan (Trần Kiến Quân), but you can call me Henry
                  Tran, which is the nickname most people use. I am a Front End
                  Web Developer with a passion for crafting creative, modern,
                  and visually appealing websites. My goal is to combine
                  aesthetic design with user-friendly functionality to deliver
                  engaging online experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.educationContainer}>
          <div className={styles.areaContainer}>
            <div className={styles.category}>Education</div>
            <div className={styles.details}>
              <div className={styles.alignment}>
                <div className={styles.title}>Tôn Đức Thắng University</div>
                <div className={styles.description}>
                  Automation and Control Engineering
                </div>
              </div>

              <div>
                <div className={styles.title}>Udemy Course Online</div>
                <div className={styles.description}>
                  Front End Web Developer by Jonas Schmedtmann
                </div>
              </div>
            </div>
          </div>

          <div className={styles.areaContainer}>
            <div className={styles.category}>Language</div>
            <div className={styles.details}>
              <div className={styles.alignment}>
                <span className={styles.title}>English:</span>
                <span className={styles.description}>
                  &nbsp; Communication, Read document.
                </span>
              </div>

              <div>
                <span className={styles.title}>Chinese:</span>
                <span className={styles.description}>
                  &nbsp; Communication.
                </span>
              </div>
            </div>
          </div>

          <div className={styles.areaContainer}>
            <div className={styles.category}>Hobbies</div>
            <div className={styles.details}>
              <div className={styles.hobbiesContainer}>
                {[
                  { name: "Games", icon: game },
                  { name: "Reading", icon: book },
                  { name: "Music", icon: music },
                  { name: "Sport", icon: barbell },
                  {
                    name: "Watching Youtube",
                    icon: youtube,
                  },
                  {
                    name: "Searching Modern Website",
                    icon: search,
                  },
                ].map((item, index) => (
                  <div className={styles.hobbiesElement} key={index}>
                    <Image height={20} width={20} src={item.icon} alt="icon" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
