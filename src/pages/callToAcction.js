import React from 'react'

const CallToAction = () => {
    goTo.bind(this)

    function goTo() {
        window.location.href = `${window.location.origin}#contacto`
    }
    return (
        <section className="callToAction">
            <div className="callToAction_container">
                <p className="callToAction_container_p">Work with our amazing team!</p>
                <div className="callToAction_container_btn">
                    <button onClick={() => goTo()}>Contact</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction