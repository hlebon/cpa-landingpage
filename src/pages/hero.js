import '../css-module/hero.css'
import React from 'react'
import Link from "gatsby-link";

const SellingPitch = (props) => {
    return (
        <div>
            <h1 className="hero_title animate_pop_in">Your awesome selling pitch</h1>
            <h3 className="hero_subtitle animate_pop_in">A subtitle of the selling pitch</h3>
            <p className="hero_button animate_pop_in">
                
            </p>
        </div>
    )
}

const Hero = (props) => {
    return (
        <div className="hero">
            <section className="hero_content">
                <SellingPitch/>
            </section>
        </div>
    )
}

export default Hero