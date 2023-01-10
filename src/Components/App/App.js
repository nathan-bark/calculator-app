import "./App.css";
import { InputButtons } from "../InputButtons/InputButtons";
import { MainScreen } from "../MainScreen/MainScreen";
import { FunctionButtons } from "../FunctionButtons/FunctionButtons";
import {ClearMinus} from "../ClearMinus/ClearMinus"

function App() {
  return (
    <div className="component-container">
      <div className="mainscreen">
        <MainScreen total={0}  />
      </div>
      <div className="inputbuttons">
        <InputButtons />
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
