import React from "react";
import styles from "./page.module.css";
import pageStyles from "./styles.module.css";
import clsx from "clsx";
import { useState } from "react";
import Link from "next/link";

export default function GeneralSection() {
  const [toggle, setToggle] = useState(false);

  function onScrolling(selectedId: string) {
    document.getElementById(selectedId)?.scrollIntoView({ behavior: "smooth" });
  }

  function onToggle() {
    setToggle((currStatus) => !currStatus);
  }

  return (
    <section id="Home" className={pageStyles.section}>
      <nav className={pageStyles.nav}>
        <div className={pageStyles.resume}>resume</div>

        <div
          onClick={() => onToggle()}
          className={clsx(pageStyles.menuAlignment, styles["menu-icon"], {
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

          <div
            className={clsx(styles["line-3"], {
              "": !toggle,
              [styles["active"]]: toggle,
            })}
          ></div>
        </div>

        {toggle && (
          <aside
            data-aos={toggle ? "fade-left" : "fade-right"}
            className={pageStyles.sideNav}
          >
            {[
              "Home",
              "About Me",
              "Skills",
              "Certificate",
              "Project",
              "Get in touch",
            ].map((section, index) => (
              <div
                onClick={() => onScrolling(section)}
                className={pageStyles.navElement}
                key={index}
              >
                {section}
              </div>
            ))}
          </aside>
        )}
      </nav>
      <div>
        <div className={pageStyles.textContainer}>
          <div className={pageStyles.textAlignment}>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="900"
              className={pageStyles.portfolio}
            >
              portfolio
            </div>

            <div
              data-aos="zoom-out"
              data-aos-delay="800"
              data-aos-duration="1000"
              className={pageStyles.henry}
            >
              x henry tran
            </div>

            <div className={pageStyles.border}></div>

            <div
              data-aos="zoom-in"
              data-aos-delay="800"
              data-aos-duration="1000"
              className={pageStyles.year}
            >
              2024
            </div>

            <div className={pageStyles.developerContainer}>
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="900"
                className={pageStyles.frontEndText}
              >
                front end
              </div>
              <div
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-duration="900"
                className={pageStyles.developerText}
              >
                developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
