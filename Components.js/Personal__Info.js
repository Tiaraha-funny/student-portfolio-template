import React from 'react'
import myImage from "../images/smiling-me.jpg";

function Personal__Info() {
    return (
        <div className="personal">
        <article className="personal__info">
            <img className="personal__image" src={myImage}></img>
            <div className="personal__info--about"></div>
            <p><b>Peta Jeannie</b></p>
            <p>Front-end Delveloper</p>
            <div className="personal__info--contacts">
                <a className="personal__info--contacts--email" href="mailto:peta.jea@onja.org">peta.jea@onja.org</a> <br/>
                <a className="personal__info--contacts--phone--number" href="+261345503089">+261345503089</a>
            </div>
            <div className="personal__info--description">
                <p>Self-motivated developer, who is studing at <a href="https://onja.org/"> ONJA Madagascar </a>, willing to learn more and create oustanding UI applications</p>
            </div>
        </article>
        <article className="personal__experiences">
            <header>
                <h4>Hobbies</h4>
            </header>
            <p>My favorite hobbies are:</p>
            <p>Watching movies</p>
            <p>Going on facebook</p>
        </article>
        </div>
    )
}

export default Personal__Info
