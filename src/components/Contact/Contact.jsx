import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Don't be a stranger!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
            <a href="mailto:fjstria@gmail.com" target="_blank">fjstria@gmail.com</a>
            </li>
            <li className={styles.link}>
            <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn"
            />
            <a href="https://www.linkedin.com/in/fjstria" target="_blank">linkedin.com/in/fjstria</a>
            </li>
            <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github" />
            <a href="https://www.github.com/fjstria" target="_blank">github.com/fjstria</a>
            </li>
        </ul>
        </footer>
    );
};
