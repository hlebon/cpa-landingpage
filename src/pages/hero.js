import React from 'react'
import styles from '../css-module/hero.module.css'

const SellingPitch = (props) => {
    return (
        <div>
            <h1 className={styles.hero_title}>Your awesome selling pitch</h1>
            <h3 className={styles.hero_subtitle}>A subtitle of the selling pitch</h3>
            <p className={styles.hero_button}>Button</p>
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
