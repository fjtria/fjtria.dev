import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hey there!</h1>
            <p className={styles.description}>
            I'm FJ, a Network & Digital Technology student at UC Santa Cruz. I'm an aspiring Full-Stack Web Developer. Thanks for visiting my site!
            </p>
            <a href="mailto:fjstria@gmail.com" className={styles.contactBtn}>
            Say hello!
            </a>
        </div>
        <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Me!"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        </section>
    );
};
