import '../css-module/hero.css'
import '../css-module/form.css'
import React from 'react'
import Hero from './hero'

const ContactForm = (props) => {
    return (
        <div className="form_container">
            <form className="form animate_pop_in">
                <h2 className="form_title">Contactenos</h2>
                <div className="form_input">
                    <input type="text" placeholder="Nombre" className="input_line"></input>
                </div>
                <div className="form_input">
                    <input type="email" placeholder="Email" className="input_line"></input>
                </div>
                <div className="form_input">
                    <input type="text" placeholder="Telefono" className="input_line"></input>
                </div>
                <div className="form_input">
                    <textarea placeholder="Mensaje" className="input_line" rows="3"></textarea>
                </div>
                <div className="form_input">
                    <button className="button">Enviar</button>
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