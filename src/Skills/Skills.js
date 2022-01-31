import React, {useContext} from "react";
import './Skills.scss'
import List from "./skillsList/skillsList";
import {portfolioContext} from "../State/portfolioContext";

const Skills = () => {
    const {toggleSoft, toggleHard, state} = useContext(portfolioContext)
    return (
        <a name='skills' className='skills'>
            <div className='preview'>
                <small>-Skills</small>
                <div>
                    <h1>Here is <strong>My current skills</strong> list, which includes :</h1>
                    <div className='description'>

                    </div>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/frontend.png'} alt="icons" style={{width: '25vw', height: '25vh', paddingLeft: '2vw'}}/>
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