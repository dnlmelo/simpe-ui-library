/* eslint-disable @typescript-eslint/no-unused-expressions */

import ReactDOM from "react-dom";
import { InputNumber, InputText, Tab } from "./components";
import { useState } from "react";

const App = () => {

  const [val, setVal] = useState<any>('22.00')
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {val}
            
          </div>
        </div>
        <Tab label="xxx" onActive={()=>{}} icon="user" iconAction={console.log} iconPos="right"></Tab>
        <div>

          <InputText size={"sm"} infoMessage="xxxx" />
        </div>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));