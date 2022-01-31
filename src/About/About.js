import React, {useContext} from "react";
import './About.scss'
import Description from "./Description/Description";
import {portfolioContext} from "../State/portfolioContext";

const About = () => {
    const {state} = useContext(portfolioContext)

    return (
        <a name='about' className='about'>
            <div className='about-preview'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/me.png'} alt="Lapchinsky Artem"/>
                </div>
                <div className='preview'>
                    <small>-About me</small>
                    <h1>Hi! My name is Artem Lapchinsky and I am <strong>Web developer</strong></h1>
                    <div className='description'>
                        Equipped with a diverse and promising skill set.
                        Proficient in an assortment of technologies, including HTML, CSS, JavaScript, React and Redux.
                        Dedicated to learning additional technologies and coding languages.
                        Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                        Looking for an entry-level position at a great company to be a hard-working asset to any team, to learn, grow and develop long-term.
                    </div>
                </div>
            </div>
            <div className='list'>
                {state.duties.map(el => <Description dutie={el} key={Math.random()}/>)}
            </div>
        </a>
    )
}

export default About