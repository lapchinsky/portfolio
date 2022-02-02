import React, {useContext} from "react";
import Project from "./Project/Project";
import './Portfolio.scss'
import {portfolioContext} from "../State/portfolioContext";
import Title from "../Components/Title/Title";

const Portfolio = () => {

    const {state} = useContext(portfolioContext)

    return (
        <a name='portfolio' className='portfolio'>
            <div className='portfolio-preview'>
                <div>
                    <img style={{width: '11vw', height: '11vw'}} src="https://pngicon.ru/file/uploads/2_14-128x128.png" alt="Macbook"/>
                </div>

                <Title
                    header={state.components.Portfolio.header}
                    strong={state.components.Portfolio.strong}
                    preview={state.components.Portfolio.preview}
                    description={state.components.Portfolio.description}
                />
            </div>
            <div className='projects'>
                {state.projects.map(project => <Project key={project.name} project={project}/>)}
            </div>

        </a>
    )
}

export default Portfolio