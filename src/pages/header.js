import React from 'react'
import Hero from './hero'
import styles from '../css-module/form.module.css'

const ContactForm = (props) => {
    return (
        <div className={styles.form_container}>
            <form className={styles.form}>
                <h2>Contactenos</h2>
                <div className={styles.form_input}>
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre"></input>
                </div>
                <div className={styles.form_input}>
                    <label>Correo</label>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div className={styles.form_input}>
                    <label>Telefono</label>
                    <input type="text" placeholder="Telefono"></input>
                </div>
                <div className={styles.form_input}>
                    <label>Correo</label>
                    <textarea></textarea>
                </div>
                <div className={styles.form_input}>
                    <button>Enviar</button>
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