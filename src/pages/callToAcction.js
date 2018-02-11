import React from 'react'

const CallToAction = () => {
    goTo.bind(this)

    function goTo() {
        window.location.href = `${window.location.origin}#contacto`
    }
    return (
        <section className="callToAction">
            <div className="callToAction_container">
                <p className="callToAction_container_p">No pierdas esta oportunidad, ponte en contacto con nosotros</p>
                <div className="callToAction_container_btn">
                    <button onClick={() => goTo()}>Contacto</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction