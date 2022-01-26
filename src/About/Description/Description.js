import React from "react";
import './Description.scss'

const Description = () => {
    return (
        <div className='description'>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-laptop" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg" style={{width: 50, height: 50, marginLeft: '1em', color: '#DBD7D2'}}>
                <path fill-rule="evenodd"
                      d="M13.5 3h-11a.5.5 0 0 0-.5.5V11h12V3.5a.5.5 0 0 0-.5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11z"/>
                <path d="M0 12h16v.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5V12z"/>
            </svg>
            <h3>Header</h3>
            <p style={{color: '#464544'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    )
}

export default Description