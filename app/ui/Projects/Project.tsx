import React from "react";
import styles from "./page.module.css";
import shopee from "../../../public/pictures/shop2.png";
import Image from "next/image";
import Link from "next/link";

interface ProjectTypes {
  nameProject: string;
  description: string;
  image: any;
  gitHub: string;
  visitPage: string;
}

export default function Project({
  nameProject,
  description,
  image,
  gitHub,
  visitPage,
}: ProjectTypes) {
  return (
    <section id="Project" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.titleText}>Project</h1>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.contentAlignment}>
            <div className={styles.image}>
              <Image src={image} alt="shopee" className={styles.img} />
            </div>

            <div className={styles.description}>
              <h3 className={styles.h3}>{nameProject}</h3>
              <p className={styles.p}>{description}</p>

              <Link href={visitPage} className={styles.visit}>
                Visit Site
              </Link>

              <Link href={gitHub} className={styles.visit}>
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
