import React from "react";
import './MainScreen.css'

export const MainScreen = ({total}) => {
    return (
        <div className="screen-container">
            <p>{total}</p>
        </div>
    )
}