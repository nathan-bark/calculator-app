import "./App.css";
import { InputButtons } from "../InputButtons/InputButtons";
import { MainScreen } from "../MainScreen/MainScreen";
import { FunctionButtons } from "../FunctionButtons/FunctionButtons";
import {ClearMinus} from "../ClearMinus/ClearMinus"
import { useState } from "react";

function App() {

  const [total, setTotal] = useState(0);
  const [input, setInput] = useState('');

  const updateInput = (e) => {
    setInput(input + e.target.value);
  };
  
  return (
    <div className="component-container">
      <div className="mainscreen">
        <MainScreen total={total} input={input} />
      </div>
      <div className="inputbuttons" onClick={updateInput}>
        <InputButtons input={input}/>
      </div>
      <div className="functionbuttons">
        <FunctionButtons />
      </div>
      <div className="clear-minus">
        <ClearMinus />
      </div>
    </div>
  );
}

export default App;
