"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import clsx from "clsx";

export default function GetInTouch() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: any) {
    event.preventDefault();

    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      setEmail("");
      setSubject("");
      setMessage("");
      console.log("Email sent successfully");
      // Clear form or handle success
    } else {
      const errorResponse = await response.text();
      console.error("Failed to send email");
      // Handle error
    }
  }

  type SlideType = {
    fullName: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
    subject: boolean;
  };

  const slideList: SlideType = {
    fullName: false,
    email: false,
    phone: false,
    message: false,
    subject: false,
  };

  const [slide, setSlide] = useState<SlideType>(slideList);

  function onSliding(field: keyof SlideType) {
    setSlide((currStatus) => ({ ...currStatus, [field]: true }));
  }

  return (
    <section id="Get in touch" className={styles.section}>
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
        className={styles.container}
      >
        <div className={styles.textContainer}>
          <div>let&apos;s do</div>
          <div>something amazing</div>
          <div>together</div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.alignment}>
            <label
              className={clsx({
                [styles.labelBefore]: !slide.fullName,
                [styles.labelAfter]: slide.fullName,
              })}
              htmlFor="fullName"
            >
              full name
            </label>

            <input
              className={styles.input}
              id="fullName"
              name="fullName"
              type="text"
              onClick={() => onSliding("fullName")}
            />
          </div>

          <div className={styles.contactInForm}>
            <div className={styles.email}>
              <label
                className={clsx({
                  [styles.labelBefore]: !slide.email,
                  [styles.labelAfter]: slide.email,
                })}
                htmlFor="email"
              >
                email
              </label>

              <input
                className={styles.input}
                id="email"
                name="email"
                type="text"
                onClick={() => onSliding("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.phone}>
              <label
                className={clsx({
                  [styles.labelBefore]: !slide.phone,
                  [styles.labelAfter]: slide.phone,
                })}
                htmlFor="phone"
              >
                phone
              </label>

              <input
                className={styles.input}
                id="phone"
                name="phone"
                type="text"
                onClick={() => onSliding("phone")}
              />
            </div>
          </div>

          <div className={styles.alignment}>
            <label
              className={clsx({
                [styles.labelBefore]: !slide.subject,
                [styles.labelAfter]: slide.subject,
              })}
              htmlFor="subject"
            >
              subject
            </label>

            <input
              className={styles.input}
              id="subject"
              name="subject"
              type="text"
              onClick={() => onSliding("subject")}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className={styles.alignment}>
            <label
              className={clsx({
                [styles.labelBefore]: !slide.message,
                [styles.labelAfter]: slide.message,
              })}
              htmlFor="message"
            >
              message
            </label>

            <input
              className={styles.input}
              id="message"
              name="message"
              type="text"
              onClick={() => onSliding("message")}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit" className={styles.button}>
            send
          </button>

          <address className={styles.address}>
            <div className={styles.henrytran}>henry tran</div>
            <div className={styles.phoneContact}>(+84)903338165</div>
            <div className={styles.mail}>henrytran012599@gmail.com</div>
          </address>
        </form>
      </div>
    </section>
  );
}
