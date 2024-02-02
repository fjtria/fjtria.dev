import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    className={styles.aboutImage}
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="About-Image"
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")} 
                            alt="Cursor"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Front-End Developer</h3>
                            <p>I'm a Front-End Developer with experience in building responsive websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="Server"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Back-End Developer</h3>
                            <p>I'm a Back-End Developer with experience in building responsive websites.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")} 
                            alt="UI"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UX/UI Designer</h3>
                            <p>I'm a Back-End Developer with experience in building responsive websites.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};