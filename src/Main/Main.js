import React, {useContext} from "react";
import './Main.scss'
import {portfolioContext} from "../State/portfolioContext";

const Main = () => {
    const {state, openCV, closeCV} = useContext(portfolioContext)
    return (
        <div className='main preview'>
            <small>-Hi!</small> &nbsp;
            <h1>
                <p>I'am Artem Lapchinsky</p>
                <strong>{`{Web Developer}`}</strong>
            </h1>
            <div className='description'>
                I would help you with building and maintaining responsive websites.
                Proficient in HTML, CSS, JavaScript and React; plus some other modern libraries and frameworks.
            </div>
            <div style={{marginTop: '2vh'}}>
                <button onClick={() => openCV()} className='yellowbtn'><a className='btnlink' href="#portfolio">Watch projects</a></button>
                <button><a className='btnlink' href={process.env.PUBLIC_URL + '/LapchinskyCV.pdf'} download>Download CV</a></button>
            </div>
            {state.opened ? <button className='button-up' onClick={() => closeCV()} placeholder='Close'>Close</button> : <button className='button-down' onClick={() => openCV()} placeholder='Open'>Open</button> }
        </div>
    )
}

export default Main