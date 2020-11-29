import React from 'react'
import Personal__Info from './Personal__Info';
import Skills from './Skills';

function Portfolio() {
    return (
        <div className="container">
            <section className="container__personal--info">
                <Personal__Info />
            </section>
            <section className="container__personal--skills">
                <Skills/>
            </section>
        </div>
    )
}

export default Portfolio
