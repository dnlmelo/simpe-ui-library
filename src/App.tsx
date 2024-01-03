/* eslint-disable @typescript-eslint/no-unused-expressions */

import Chart from "react-apexcharts";
import ReactDOM from "react-dom";
import { InputNumber, Tab } from "./components";
import { useState } from "react";

const App = () => {

  const [val, setVal] = useState<any>('22.00')
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            {val}
            <InputNumber size={"sm"} value={val} onChange={(e)=> {
                setVal((e.target as HTMLInputElement).value)} 
              }/>
          </div>
        </div>
        <Tab label="xxx" onActive={()=>{}} icon="user" iconAction={console.log} iconPos="right"></Tab>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));