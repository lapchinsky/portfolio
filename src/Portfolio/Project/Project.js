import React from "react";
import './Project.scss'

const Project = ({project}) => {

    return (
        <div className='project'>
            <strong>{project.name}</strong>
            <p className='img-container'>
            <img className='projectimg' src={process.env.PUBLIC_URL + '/images' + project.imgUrl} alt={project.name}/>
                <p className='img-descriprion'>{project.description}</p>
            </p>
            <div className='links'>
                <a href={project.projectLink}><img src="https://cdn-icons-png.flaticon.com/512/1799/1799476.png" alt="projectimg"/> Project</a>
                <a href={project.githubLink}>Github <img src="https://pngset.com/images/github-icon-free-download-symbol-logo-trademark-label-transparent-png-1868500.png" alt="githubimg"/></a>
            </div>
        </div>
    )
}

export default Project