import React, {useContext} from "react";
import './Contacts.scss'
import {portfolioContext} from "../State/portfolioContext";
import BTitle from "../Components/BTitle/BTitle";

const Contact = () => {
    const {state, closeCV} = useContext(portfolioContext)
    return (
        <a name='contacts' className='contacts'>
            <BTitle
                header={state.components.Contacts.header}
                strong={state.components.Contacts.strong}
                preview={state.components.Contacts.preview}
                description={state.components.Contacts.description}
            />
            <div>
                <div className='contact-description'>
                    <p>
                        <svg width="1vw" height="1vw" viewBox="0 0 16 16" className="bi bi-chat-left-text-fill"
                             fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                        </svg>
                        &nbsp;
                        <strong>Email:</strong>&nbsp;
                        <p>lapchinsky0308@icloud.com</p>
                    </p>
                    <p>
                        <svg width="1vw" height="1vw" viewBox="0 0 16 16" className="bi bi-phone" fill="white"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        &nbsp;
                        <strong>Phone Number:</strong>&nbsp;
                        <p>+7(928)982-54-43</p>
                    </p>
                </div>
                {state.opened ? <button className='button-up' onClick={() => closeCV()}>Close profile</button> : null }
            </div>
        </a>
    )
}

export default Contact