"use client";
import Image from "next/image";
import styles from "./page.module.css";
import pageStyles from "./styles.module.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  function onToggle() {
    setToggle((currStatus) => !currStatus);
    console.log(toggle);
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 100,
    });
  }, []);

  return (
    <main>
      <section className={pageStyles.section}>
        <nav className={pageStyles.nav}>
          <div className={pageStyles.resume}>resume</div>
          <div
            onClick={() => onToggle()}
            className={clsx(styles["menu-icon"], {
              "": !toggle,
              [styles["active"]]: toggle,
            })}
          >
            <div
              className={clsx(styles["line-1"], {
                "": !toggle,
                [styles["active"]]: toggle,
              })}
            ></div>

            {/* <div
              className={clsx(styles["line-2"], {
                "": !toggle,
                [styles["active"]]: toggle,
              })}
            ></div> */}

            <div
              className={clsx(styles["line-3"], {
                "": !toggle,
                [styles["active"]]: toggle,
              })}
            ></div>
          </div>
        </nav>

        <div className={pageStyles.textContainer}>
          <div className={pageStyles.textAlignment}>
            <div className={pageStyles.portfolio}>portfolio</div>
            <div className={pageStyles.henry}>x henry tran</div>
            <div className={pageStyles.border}></div>
            <div className={pageStyles.year}>2024</div>
            <div className={pageStyles.developerContainer}>
              <div className={pageStyles.frontEndText}>front end</div>
              <div className={pageStyles.developerText}>developer</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
