import React, {useContext} from "react";
import Project from "./Project/Project";
import './Portfolio.scss'
import {portfolioContext} from "../State/portfolioContext";

const Portfolio = () => {

    const {state} = useContext(portfolioContext)

    return (
        <a name='portfolio' className='portfolio'>
            <div className='portfolio-preview'>
                <div>
                    <img style={{width: '11vw', height: '11vw'}} src="https://pngicon.ru/file/uploads/2_14-128x128.png" alt="Macbook"/>
                </div>

                <div className='preview'>
                    <small>Portfolio;</small>
                    <h1>Provide your work <strong>Web development</strong></h1>
                    <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, id.
                    </div>
                </div>
            </div>
            <div className='projects'>
                {state.projects.map(project => <Project key={project.name} project={project}/>)}
            </div>

        </a>
    )
}

export default Portfolio