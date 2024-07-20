"use client";
import Image from "next/image";
import styles from "./page.module.css";
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
    <main className={styles.main}>
      <section>
        <nav className={styles.nav}>
          <div>resume</div>
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

        <div>portfolio x henry tran</div>
      </section>
    </main>
  );
}
