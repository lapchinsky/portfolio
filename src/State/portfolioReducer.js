import {CLOSE_CV, OPEN_CV, SWITCH_HARD, SWITCH_SOFT,} from "./types";

const handlers = {
    [SWITCH_SOFT]: (state) => {
        return {...state, visual: true}
    } ,
    [SWITCH_HARD]: (state) => {
        return {...state, visual: false}
    } ,
    [OPEN_CV]: (state) => {
        return {...state, opened: true}
    } ,
    [CLOSE_CV]: (state) => {
        return {...state, opened: false}
    } ,
    DEFAULT: state => state
}

export const portfolioReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}