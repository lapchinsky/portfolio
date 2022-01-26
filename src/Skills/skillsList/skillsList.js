import React, {useContext} from "react";
import {portfolioContext} from "../../State/portfolioContext";

const List = () => {
    const {state} = useContext(portfolioContext)
    return (
        <ul>
            {state.visual ? state.skills.design.map(skill => <li key={skill}>{skill}</li>) : state.skills.development.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
    )
}

export default List