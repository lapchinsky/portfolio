import React, {useContext} from "react";
import {portfolioContext} from "../../State/portfolioContext";

const List = () => {
    const {state} = useContext(portfolioContext)
    return (
        <ul>
            {state.visual ? state.skills.soft.map(skill => <li key={skill}>{skill}</li>) : state.skills.hard.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    )
}

export default List