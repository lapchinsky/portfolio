import React, {useContext} from "react";
import './Header.scss'
import {portfolioContext} from "../State/portfolioContext";

const Header = () => {
    const {openCV} = useContext(portfolioContext)
    return (

        <div className='header'>
            {`<Lapchinsky Artem />`}
            <nav>
                <a onClick={() => openCV()} href="#about">About me</a>
                <a onClick={() => openCV()} href="#skills">Skills</a>
                <a onClick={() => openCV()} href="#portfolio">Portfolio</a>
                <a href='#contacts'>Contact me</a>
            </nav>
        </div>

    )
}

export default Header