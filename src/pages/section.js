import React from 'react'
import PropTypes from 'prop-types'

const cardInfo = [
    {
        id: 1, 
        title: "Titulo 1",
        description: "Descripcion",
        img: "https://fakeimg.pl/250x200/"
    },
    { 
        id: 2,
        title: "Titulo 2",
        description: "Descripcion 2",
        img: "https://fakeimg.pl/250x200/"
    },
    { 
        id: 3,
        title: "Titulo 3",
        description: "Descripcion 3",
        img: "https://fakeimg.pl/250x200/"
    }

]


const ContainerCard = (props) => {
    return (
        <div>
            Container Card
        </div>
    )
}
ContainerCard.PropTypes = {
    card: PropTypes.object.isRequired
}


const Section = (props) => {
    return (
        <section>
            {cardInfo.map( ( card ) => {
                return (
                    <ContainerCard/>
                )
            })}
        </section>
    )
}

export default Section