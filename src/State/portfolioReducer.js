import {SWITCH_PROD, SWITCH_VISUAL} from "./types";

const handlers = {
    [SWITCH_VISUAL]: (state) => {
        return {...state, visual: true}
    } ,
    [SWITCH_PROD]: (state) => {
        return {...state, visual: false}
    } ,
    DEFAULT: state => state
}

export const portfolioReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}