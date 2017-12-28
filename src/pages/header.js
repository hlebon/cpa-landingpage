import stylesHero from '../css-module/hero.module.css'
import styles from '../css-module/form.module.css'
import React from 'react'
import Hero from './hero'

const ContactForm = (props) => {
    return (
        <div className={styles.form_container}>
            <form className={`${styles.form} ${stylesHero.animate_pop_in}`}>
                <h2 className={styles.form_title}>Contactenos</h2>
                <div className={styles.form_input}>
                    <input type="text" placeholder="Nombre" className={styles.input_line}></input>
                </div>
                <div className={styles.form_input}>
                    <input type="email" placeholder="Email" className={styles.input_line}></input>
                </div>
                <div className={styles.form_input}>
                    <input type="text" placeholder="Telefono" className={styles.input_line}></input>
                </div>
                <div className={styles.form_input}>
                    <textarea placeholder="Mensaje" className={styles.input_line} rows="3"></textarea>
                </div>
                <div className={styles.form_input}>
                    <button className={styles.button}>Enviar</button>
                </div>
                
            </form>
        </div>
    )
}

const Header = (props) => {
    return (
        <header>
            <Hero/>
            <ContactForm/>
        </header>
    )
}

export default Header