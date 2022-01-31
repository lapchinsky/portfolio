import React, {useReducer} from "react";
import {portfolioContext} from "./portfolioContext";
import {portfolioReducer} from "./portfolioReducer";
import {CLOSE_CV, OPEN_CV, SWITCH_HARD, SWITCH_SOFT} from "./types";

export const State = ({children}) => {
    const initialState = {
        projects: [
            {
                name: 'Todo App',
                imgUrl: '/todo.jpg',
                projectLink: 'https://todohooks-sandy.vercel.app/',
                githubLink: 'https://github.com/lapchinsky/todohookz',
                description: `Basic ToDo application developed using React.
                 Linted code, bootstrap styles and functional components inside.
                 LocalStorage provides saved 'Todo's' any time you reconnect.
                 Plan your day and don't forget anything! `
            },
            {
                name: 'Quiz App',
                imgUrl: '/quiz.jpg',
                projectLink: 'https://react-quiz-18967.web.app',
                githubLink: 'https://github.com/lapchinsky/QuizApp',
                description: `Do you like Quizes? That application developed specially for you!
                 Choose your role as a competitor, or even author of Quizes.
                 Application developed using React/Redux.
                 Firebase used as data storage and authorization provider.
                 HOCs, validated authorization form, asynchronous requests using axios library and React hooks provides efficient SPA operation`
            },
            {
                name: 'Slider',
                imgUrl: '/slider.jpg',
                projectLink: 'https://slider-psi.vercel.app/',
                githubLink: 'https://github.com/lapchinsky/slider',
                description: 'Simple but beautiful slider developed using native JavaScript, HTML and CSS.'
            },
            {
                name: 'Cards',
                imgUrl: '/cards.jpg',
                projectLink: 'https://cards-two-kappa.vercel.app',
                githubLink: 'https://github.com/lapchinsky/cards',
                description: `Impressive slider based on JavaScript, HTML and CSS.
                May be used as separate functional page for watching photos for example,
                or built in your application as a showcase attribute`
            },
            {
                name: 'Aim Game',
                imgUrl: '/aimGame.jpg',
                projectLink: 'https://aim-ten.vercel.app',
                githubLink: 'https://github.com/lapchinsky/aim-game',
                description: `You can train your aiming skills and have some fun using this App.
                All you need - just clicking on colored circle. How much can you catch?
                Application built on native JavaScript combined with HTML and CSS`
            },
            {
                name: 'Hoverboard',
                imgUrl: '/board.jpg',
                projectLink: 'https://hoverboard-rosy.vercel.app',
                githubLink: 'https://github.com/lapchinsky/board-sources',
                description: `That's marvelous! How ordinary gray things can come alive and acquire amazing colors.
                Use cursor to see that! Simple application based on JavaScript. Enjoy!`
            },
        ],
        skills: {
            soft: [
                'Communication Skills', 'Creativity', 'Problem-solving', 'Teamwork ', 'Responsibility', 'Management skills'
            ],
            hard: [
                'HTML5','CSS3', 'SCSS', 'JavaScript', 'React', 'Redux', 'Git', 'Firebase', 'Webpack', 'Figma', 'Bootstrap', 'Ant-Design',
            ]
        },
        duties: [
            'Implementing web design and development principles to build stable software.',
            'Bringing mock-ups to life using HTML, CSS, JavaScript, React.',
            'Building websites and apps that are responsive and usable.',
            'Monitoring website performance and rectifying front-end-related issues.',
            'Identifying innovative ideas and proof of concepts according to project requirements.',
            'Testing to identify bugs and technical issues before and after deploying.'
        ],
        visual: false,
        opened: false
    }
    const [state, dispatch] = useReducer(portfolioReducer, initialState)

    const toggleSoft = state => {
        dispatch({
            type: SWITCH_SOFT
        })
    }

    const toggleHard = state => {
        dispatch({
            type: SWITCH_HARD
        })
    }

    const openCV = state => {
        console.log('open')
        dispatch({
            type: OPEN_CV
        })
    }

    const closeCV = state => {
        console.log('close')
        dispatch({
            type: CLOSE_CV
        })
    }


    return (
        <portfolioContext.Provider value={
            {state, toggleHard, toggleSoft, openCV, closeCV}
        }>
            {children}
        </portfolioContext.Provider>
    )
}