import React, {useContext} from "react";
import './Main.scss'
import {portfolioContext} from "../State/portfolioContext";
import BTitle from "../Components/BTitle/BTitle";

const Main = () => {
    const {state, openCV} = useContext(portfolioContext)
    return (
        <div className='main'>
            <BTitle
                header={state.components.Main.header}
                strong={state.components.Main.strong}
                preview={state.components.Main.preview}
                description={state.components.Main.description}
            />
            <div className='buttons-group'>
                <button><a className='btnlink' href={process.env.PUBLIC_URL + '/LapchinskyCV.pdf'} download>Download CV</a></button>
                <button className='yellowbtn' onClick={() => openCV()} placeholder='Open'>Read profile</button>
            </div>
        </div>
    )
}

export default Main