import React from "react";
import './FunctionButtons.css'

export const FunctionButtons = () => {
  return (
    <div className="func-btn-container">
      <button className="func-btn">+</button>
      <button className="func-btn">-</button>
      <button className="func-btn">÷</button>
      <button className="func-btn">×</button>
      <button className="func-btn">=</button>
    </div>
  );
};
