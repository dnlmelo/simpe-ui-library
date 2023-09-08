/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import {createRoot} from 'react-dom/client'
import TextLink from "./components/TextLink/TextLink";
import InputRadio from "./components/Inputs/InputRadio/InputRadio";
import  './foundation/index.scss'
import Dropdown from "./components/Dropdown/Dropdown";
import InputRange from "./components/Inputs/InputRange/InputRange";
import Stepper from "./components/Stepper/Stepper";
import { Button } from "./components";
import './components/Table/Table.scss'
import { Icon } from "./components/Icons/Icon";

export const App = ()=>{
  const [x, setX] = useState('x');

  const onValueChange = (event:any) =>{
    setX(event.target.value);
  }
  return <React.StrictMode>
    <h1>Components</h1>

    <div>
      <h2>Input Currency</h2>
      <Dropdown label={'dropdwn'} size="lg">
        <TextLink>Link 1</TextLink>
        <TextLink>Link 2</TextLink>
        <TextLink>Link 3</TextLink>
      </Dropdown>
      <div>
      <div>
        <h2>Input Radio</h2>
        <InputRadio 
          name="item"
          onChange={onValueChange}
          size={"lg"} 
          label="Label" 
          value={'2x'}
          infoMessage="Msg"
          errorMessage="error" 
          id="xxx"
        ></InputRadio>

        <InputRadio 
          name="item"
          onChange={onValueChange}
          size={"lg"} 
          label="Label" 
          value={'4x'}
          infoMessage="Msg"
          errorMessage="error" 
          id="xxx1"
        ></InputRadio>
        value is {x}
      </div>
    </div>

    <div>
      <h2>Input range</h2>
      <InputRange label="x" minSuffix="min" maxSuffix="max"/>
    </div>

    <div>
      <h2>Stepper</h2>
      <StepEx></StepEx> 
    </div>

    <div>
      <h2>Table</h2>
      <table className="table table-stripped">
        <thead className="tableHeader">
          <th>col 1 <Icon name="arrow-up" size={"md"}></Icon></th>
          <th>col 2 <Icon name="arrow-up" size={"md"}></Icon></th>
          <th>col 3 <Icon name="arrow-up" size={"md"}></Icon></th>
        </thead>
        <tbody>
          <tr className="tableRow">
            <td className="tableCell">cell 1</td>
            <td className="tableCell">cell 2</td>
            <td className="tableCell">cell 3</td>
          </tr>
          <tr className="tableRow">
            <td className="tableCell">cell 1</td>
            <td className="tableCell">cell 2</td>
            <td className="tableCell">cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </React.StrictMode>
}

function StepEx(props){
  const [step, setStep] = useState(-1)
  const [allCompleted, setAllCompleted] = useState(true)

  return <>
    <Stepper 
    steps={['step 1', 'step2', 'step3']}
    activedStep={step}
    completedSteps={allCompleted? 'all' : 'allBeforeActive'} 
  ></Stepper>

  {step === 0 && <div>
    <p>Content step 1 </p>
    <Button 
      onClick={() => setStep(1)}  
      type={"button"} 
      color={"primary"}> Concluir </Button>
  </div>
  }
  {step === 1 && <div>
    <p>Content step 2 </p>
    <Button 
      onClick={() => setStep(2)}  
      type={"button"} 
      color={"primary"}> Concluir </Button>
  </div>
  }
  {step === 2 && <div>
    <p>Content step 3</p>
    <Button 
      onClick={()=>{ setAllCompleted(true); setStep(-1)}}
      type={"button"} 
      color={"primary"}> Concluir </Button>
  </div>
  }

  {allCompleted && <div>
    Todos os passos estão completos
  </div>
  }
  </>
}
const root = createRoot(document.getElementById("root")!);
root.render(<App />)