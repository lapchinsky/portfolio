import React, {useContext} from "react";
import './Skills.scss'
import List from "./skillsList/skillsList";
import {portfolioContext} from "../State/portfolioContext";

const Skills = () => {
    const {toggleVisual, toggleProd} = useContext(portfolioContext)
    return (
        <a name='skills' className='skills'>
            <div className='preview'>
                <small>-Skills</small>
                <div>
                    <h1>My <strong>Web Development</strong> skills include</h1>
                    <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi numquam quaerat quasi similique,
                        veritatis voluptates?</div>
                </div>
            </div>
                <div className='skills-content'>
                    <div className='buttons'>
                        <button className='yellowbtn' type="button" onClick={() => toggleVisual()}>Web Design</button>
                        <button type="button" onClick={() => toggleProd()}>Web development</button>
                    </div>
                    <List/>
                </div>
        </a>
    )
}

export default Skills