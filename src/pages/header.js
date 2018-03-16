import '../css-module/hero.css'
import '../css-module/form.css'
import React from 'react'
import Hero from './hero'

const ContactForm = (props) => {
    return (
        <div id="contacto" className="form_container">
            <form className="form animate_pop_in">
                <h2 className="form_title">Contact</h2>
                <div className="form_input">
                    <input type="text" placeholder="Name" className="input_line"></input>
                </div>
                <div className="form_input">
                    <input type="email" placeholder="Email" className="input_line"></input>
                </div>
                <div className="form_input">
                    <input type="text" placeholder="Phone" className="input_line"></input>
                </div>
                <div className="form_input">
                    <textarea placeholder="Message" className="input_line" rows="3"></textarea>
                </div>
                <div className="form_input">
                    <button className="btn btn-primary">SEND</button>
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