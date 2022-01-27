import React, {useContext} from "react";
import Header from "./Header/Header";
import './App.scss'
import About from "./About/About";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contacts/Contacts";
import {portfolioContext} from "./State/portfolioContext";


function App() {
    const {state} = useContext(portfolioContext)
    return (
        <div className='container'>
            {state.opened ?
                <>
                    <Header/>
                    <Main/>
                    <About/>
                    <Skills/>
                    <Portfolio/>
                    <Contact/>
                </> :
                <>
                    <Header/>
                    <Main/>
                    <Contact/>
                </>}

        </div>
    );
}

export default App;
