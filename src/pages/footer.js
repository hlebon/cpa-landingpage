import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => {
    return (
        <footer className="footer-container">
            <div className="footer-section">
                <div className="footer-section-content">
                    <small>&copy; Copyright 2018, CPA-Taxes Consulting</small>
                </div>
            </div>
            <div className="footer-section">
                <div className="footer-section-content">
                    <p> hola a todos 
                        <Link to="/" className="footer-link">facebook</Link>
                        <Link to="/" className="footer-link">instagram</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
} 

export default Footer