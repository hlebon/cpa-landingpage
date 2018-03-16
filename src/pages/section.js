import '../css-module/common.css'
import segment from '../img/segment.svg'
import create from '../img/create.svg'
import analytics from '../img/analytics.svg'
import files from '../img/files.svg'
import React from 'react'

const cardInfo = [
    {
        id: 1, 
        title: "Who we are?",
        content: {
            description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
            values: ["Ut enim ad minima veniam, quis nostrum", "exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur", "vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"]
        },
        img:  files
    },
    { 
        id: 2,
        title: "Services",
        content: {
            description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
            values: ["Ut enim ad minima veniam, quis nostrum", "exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur", "vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"]
        },
        img: create
    }
]


const ContainerCard = (props) => {
    const { card } = props

    return (
        <div className="section_card">
            <div className="section_img_container">
                
                <img src={card.img} alt="segment" className="section_card_img"/>
            </div>
            <div className="section_info">
                <h3 className="section_info_title">{card.title}</h3>
                <p className="section_info_subtitle">{card.content.description}</p>
                <hr/>
                <ul className="section_info_content">
                {card.content.values.map( (val, key) =>
                    <li key={key}>{val}</li>
                )}
                </ul>
            </div>
        </div>
    )
}

const Section = (props) => {
    return (
        <section className="about_section">
            <div className="about_container">
            {cardInfo.map( ( card, index ) => {
                return (
                    <ContainerCard key={index} card={card}/>
                )
            })}
            </div>
        </section>
    )
}

export default Section