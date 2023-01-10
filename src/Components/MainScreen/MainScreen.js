import React from "react";
import './MainScreen.css'

export const MainScreen = ({total, input}) => {
    return (
        <div className="screen-container">
            <p>{input}</p>
        </div>
    )
}