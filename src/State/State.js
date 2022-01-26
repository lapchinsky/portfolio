import React, {useReducer} from "react";
import {portfolioContext} from "./portfolioContext";
import {portfolioReducer} from "./portfolioReducer";
import {SWITCH_PROD,  SWITCH_VISUAL} from "./types";

export const State = ({children}) => {
    const initialState = {
        projects: [
            {
                name: 'Todo App',
                imgUrl: '/todo.jpg',
                projectLink: 'https://todohooks-sandy.vercel.app/',
                githubLink: 'https://github.com/lapchinsky/todohookz',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
            {
                name: 'Quiz App',
                imgUrl: '/quiz.jpg',
                projectLink: 'https://react-quiz-18967.web.app',
                githubLink: 'https://github.com/lapchinsky/QuizApp',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
            {
                name: 'Slider',
                imgUrl: '/slider.jpg',
                projectLink: 'https://slider-psi.vercel.app/',
                githubLink: 'https://github.com/lapchinsky/slider',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
            {
                name: 'Cards',
                imgUrl: '/cards.jpg',
                projectLink: 'https://cards-two-kappa.vercel.app',
                githubLink: 'https://github.com/lapchinsky/cards',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
            {
                name: 'Aim Game',
                imgUrl: '/aimGame.jpg',
                projectLink: 'https://aim-ten.vercel.app',
                githubLink: 'https://github.com/lapchinsky/aim-game',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
            {
                name: 'Hoverboard',
                imgUrl: '/board.jpg',
                projectLink: 'https://hoverboard-rosy.vercel.app',
                githubLink: 'https://github.com/lapchinsky/board-sources',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus dolore labore nostrum obcaecati similique sint soluta! Impedit, laudantium, veniam!'
            },
        ],
        skills: {
            design: [
                'CSS3', 'SCSS', 'Figma', 'Bootstrap', 'Ant-Design'
            ],
            development: [
                'HTML5', 'JavaScript', 'React', 'Redux', 'Git'
            ]
        },
        visual: true,
        opened: false
    }
    const [state, dispatch] = useReducer(portfolioReducer, initialState)

    const toggleVisual = state => {
        dispatch({
            type: SWITCH_VISUAL
        })
    }

    const toggleProd = state => {
        dispatch({
            type: SWITCH_PROD
        })
    }


    return (
        <portfolioContext.Provider value={
            {state, toggleProd, toggleVisual}
        }>
            {children}
        </portfolioContext.Provider>
    )
}