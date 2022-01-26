import React from "react";
import './Project.scss'

const Project = ({project}) => {

    return (
        <div className='project'>
            <strong>{project.name}</strong>
            <img className='projectimg' src={process.env.PUBLIC_URL + '/images' + project.imgUrl} alt={project.name}/>
            {/*<p style={{maxWidth: '21vw'}}>{project.description}</p>*/}
            <div className='links'>
                <a href={project.projectLink}><img src="https://cdn-icons-png.flaticon.com/512/1799/1799476.png" alt="projectimg"/> Project</a>
                <a href={project.githubLink}>Github<img src="https://cdn-icons.flaticon.com/png/512/3128/premium/3128308.png?token=exp=1643209824~hmac=52d1cc74fe2f917ade7c8786b2c11e50" alt="githubimg"/></a>
            </div>
        </div>
    )
}

export default Project