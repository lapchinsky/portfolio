import React from "react";
import Header from "./Header/Header";
import './App.scss'
import About from "./About/About";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contacts/Contacts";
import {State} from "./State/State";

function App() {
    return (
        <State>
            <div className='container'>
                <Header/>
                <Main/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </div>
        </State>
    );
}

export default App;
