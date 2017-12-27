import styles from '../css-module/hero.module.css'
import React from 'react'
import Link from "gatsby-link";

const SellingPitch = (props) => {
    return (
        <div>
            <h1 className={ `${styles.hero_title} ${styles.animate_pop_in}`}>Your awesome selling pitch</h1>
            <h3 className={ `${styles.hero_subtitle} ${styles.animate_pop_in}`}>A subtitle of the selling pitch</h3>
            <p className={ `${styles.hero_button} ${styles.animate_pop_in}`}>
                <Link to="#contactForm">Contacto</Link>
            </p>
        </div>
    )
}

const Hero = (props) => {
    return (
        <div className={styles.hero}>
            <section className={styles.hero_content}>
                <SellingPitch/>
            </section>
        </div>
    )
}

export default Hero
