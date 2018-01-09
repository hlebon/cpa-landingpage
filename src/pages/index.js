import React from "react"
import Header from './header'
import Section from './section'
import CallToAction from './callToAcction'
import Footer from './footer'
import '../layout/index.css'

class Index extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Section/>
                <CallToAction/>
                <Footer/>
            </div>
        )
    }
}

export default Index;