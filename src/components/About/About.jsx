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
                            <h3>Web Developer</h3>
                            <p>I have experience using HTML and CSS alongside React and Vue to build responsive web pages.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cameraIcon.png")} 
                            alt="Camera"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Photographer & Videographer</h3>
                            <p>I'm a self-taught photographer and videographer that loves street photography and portriats. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/controllerIcon.png")} 
                            alt="Game Controller"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Gamer</h3>
                            <p>I spend my free time playing online cooperative games like Minecraft, Animal Crossing, and Pokémon. </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};