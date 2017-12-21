import React from 'react'
import styles from '../css-module/header.module.css'

const SellingPitch = (props) => {
    return (
        <div>
            <h1 className={styles.header_title}>Your awesome selling pitch</h1>
            <h3 className={styles.header_subtitle}>A subtitle of the selling pitch</h3>
            <p className={styles.header_button}>Button</p>
        </div>
    )
}


const ContactForm = (props) => {
    return (
        <div>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Nombre"></input>
                </div>
                <div>
                    <label>Correo</label>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div>
                    <label>Telefono</label>
                    <input type="text" placeholder="Telefono"></input>
                </div>
                <div>
                    <label>Correo</label>
                    <textarea></textarea>
                </div>
            </form>
        </div>
    )
}


const Header = (props) => {
    return (
        <header className={styles.header}>
            <section className={styles.header_content}>
                <SellingPitch/>
            </section>
        </header>
    )
}

export default Header
