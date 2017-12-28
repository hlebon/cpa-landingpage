import React from "react"
import Header from './header'
import Section from './section'
import Footer from './footer'
import '../layout/index.css'

document.body.className += " js-loading"
window.addEventListener("load", showPage, false)

function showPage(){
    document.body.className = document.body.className.replace("js-loading", "")
}


class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        )
    }
}



export default Index;