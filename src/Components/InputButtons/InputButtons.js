import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./InputButtons.css";

export const InputButtons = ({ input }) => {
  return (
    <div className="input-btn-container">
      <button className="input-btn" value="1">
        1
      </button>
      <button className="input-btn" value="2">
        2
      </button>
      <button className="input-btn" value="3">
        3
      </button>
      <button className="input-btn" value="4">
        4
      </button>
      <button className="input-btn" value="5">
        5
      </button>
      <button className="input-btn" value="6">
        6
      </button>
      <button className="input-btn" value="7">
        7
      </button>
      <button className="input-btn" value="8">
        8
      </button>
      <button className="input-btn" value="9">
        9
      </button>
      <button className="input-btn btn-0" value="0">
        0
      </button>
      <button className="input-btn" value=".">
        .
      </button>
    </div>
  );
};
