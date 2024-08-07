"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import clsx from "clsx";
import Image from "next/image";
import facebook from "../../../public/icons/logo-facebook.svg";
import instagram from "../../../public/icons/logo-instagram.svg";
import linkedin from "../../../public/icons/logo-linkedin.svg";
import Link from "next/link";

export default function GetInTouch() {
  const socialMedia = [facebook, instagram, linkedin];

  return (
    <section id="Get in touch" className={styles.section}>
      <div
        // data-aos="fade-up"
        // data-aos-delay="400"
        // data-aos-duration="1000"
        className={styles.container}
      >
        <div className={styles.textContainer}>
          <div>let&apos;s do</div>
          <div>something amazing</div>
          <div>together</div>
        </div>

        <div className={styles.form}>
          <address className={styles.address}>
            <div className={styles.henrytran}>henry tran</div>
            <div className={styles.phoneContact}>
              <span>
                <strong>phone: &nbsp;</strong>
              </span>
              (+84)90-333-8165
            </div>

            <div className={styles.mail}>
              <span>
                <strong>MAIL: &nbsp;</strong>
              </span>
              henrytran012599@gmail.com
            </div>

            <div className={styles.mail}>
              <div className={styles.socialMedia}>
                <strong>Social Media: &nbsp;</strong>
              </div>

              <div className={styles.socialMediaContainer}>
                {["Facebook", "Instagram", "Linkedin"].map((item, index) => (
                  <Link href="#" className={styles.span} key={index}>
                    <Image
                      className={styles.img}
                      src={socialMedia[index]}
                      alt={item}
                    />
                    {item}
                  </Link>
                ))}{" "}
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
