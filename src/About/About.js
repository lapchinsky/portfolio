import React from "react";
import './About.scss'
import Description from "./Description/Description";

const About = () => {
    return (
        <a name='about' className='about'>
            <div className='about-preview'>
                <div>
                    <img
                        src="https://previews.123rf.com/images/rikkyal/rikkyal1712/rikkyal171200010/90908344-bearded-man-s-face-hipster-character-fashion-silhouette-avata.jpg"
                        alt="avatar"/>
                </div>
                <div className='preview'>
                    <small>-About me</small>
                    <h1>Hi! My name is Artem Lapchinsky and I am a <strong>Web developer</strong></h1>
                    <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, id.
                    </div>
                </div>
            </div>
            <div className='list'>
                <Description/>
                <Description/>
                <Description/>
                <Description/>
                <Description/>
                <Description/>
            </div>
        </a>
    )
}

export default About