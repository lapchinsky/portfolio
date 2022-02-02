import React, {useContext} from "react";
import './Skills.scss'
import List from "./skillsList/skillsList";
import {portfolioContext} from "../State/portfolioContext";
import Title from "../Components/Title/Title";

const Skills = () => {
    const {toggleSoft, toggleHard, state} = useContext(portfolioContext)
    return (
        <a name='skills' className='skills'>
            <Title
                header={state.components.Skills.header}
                strong={state.components.Skills.strong}
                preview={state.components.Skills.preview}
                description={state.components.Skills.description}
            />
            <img src={process.env.PUBLIC_URL + '/images/frontend.png'} alt="icons" style={{width: '20vw', height: '20vh', paddingLeft: '2vw'}}/>
                <div className='skills-content'>
                    <div className='buttons'>
                        <button className={state.visual ? 'yellowbtn' : null} type="button" onClick={() => toggleSoft()}>Soft skills</button>
                        <button className={state.visual ? null : 'yellowbtn'} type="button" onClick={() => toggleHard()}>Hard skills</button>
                    </div>
                    <List/>
                </div>
        </a>
    )
}

export default Skills