import React from "react";
import './Main.scss'

const Main = () => {
    return (
        <div className='main preview'>
            <small>-Hi!</small> &nbsp;
            <h1>
                <p>I'am Artem Lapchinsky</p>
                <strong>Web Developer</strong>
            </h1>
            <div className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aperiam eaque ex in ipsa laborum pariatur repellendus sapiente. Beatae blanditiis excepturi hic iste, possimus quaerat quibusdam saepe sapiente tempora.</div>
            <div>
                <button className='yellowbtn'>Write a letter</button>
                <button>Download CV</button>
            </div>
        </div>
    )
}

export default Main