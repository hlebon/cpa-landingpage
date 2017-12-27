import '../css-module/common.css'
import segment from '../img/segment.svg'
import create from '../img/create.svg'
import analytics from '../img/analytics.svg'
import React from 'react'

const cardInfo = [
    {
        id: 1, 
        title: "Sed ut perspiciatis unde omnis iste natus",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        img: segment
    },
    { 
        id: 2,
        title: "Sed ut perspiciatis unde omnis iste natus",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        img: create
    },
    { 
        id: 3,
        title: "Sed ut perspiciatis unde omnis iste natus",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum",
        img: analytics
    }

]


const ContainerCard = (props) => {
    const { card } = props
    console.log(card)

    return (
        <div className="section_card">
            <div className="section_img_container">
                <img src={card.img} alt="segment" className="section_card_img"/>
            </div>
            <div className="section_info">
                <h4 className="section_info_title">{card.title}</h4>
                <p className="section_info_content">{card.description}</p>
            </div>
        </div>
    )
}

/*
ContainerCard.PropTypes = {
    card: PropTypes.object.isRequired
}*/

const Section = (props) => {
    return (
        <section className="about_section">
            {cardInfo.map( ( card, index ) => {
                return (
                    <ContainerCard key={index} card={card}/>
                )
            })}
        </section>
    )
}

export default Section