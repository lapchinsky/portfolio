import React, {useContext} from "react";
import './About.scss'
import Description from "./Description/Description";
import {portfolioContext} from "../State/portfolioContext";
import Title from "../Components/Title/Title";

const About = () => {
    const {state} = useContext(portfolioContext)

    return (
        <a name='about' className='about'>
            <div className='about-preview'>
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/me.png'} alt="Lapchinsky Artem"/>
                </div>
                <Title
                    header={state.components.About.header}
                    strong={state.components.About.strong}
                    preview={state.components.About.preview}
                    description={state.components.About.description}
                        />
            </div>
            <div className='list'>
                {state.duties.map(el => <Description dutie={el} key={Math.random()}/>)}
            </div>
        </a>
    )
}

export default About