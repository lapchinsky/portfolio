import React from "react";
import './Header.scss'

const Header = props => {
    return (

        <div className='header'>
            {`<Lapchinsky Artem />`}
            <nav>
                <a href="#about">About me</a>
                <a href="#skills">Skills</a>
                <a href="#portfolio">Portfolio</a>
                <a href='#contacts'>Contact me</a>
            </nav>
        </div>

    )
}

export default Header