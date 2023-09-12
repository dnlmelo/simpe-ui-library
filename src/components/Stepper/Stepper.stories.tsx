import { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof Stepper>= {
  component: Stepper,
};

type Story = StoryObj<typeof Stepper>;

export default meta;
export const Default: Story = {
  args: {
    steps: [
      'Step 1',
      'Step 2',
      'Step 3',
    ],
    completedSteps: 'allBeforeActive',
    activedStep: 1,
  }
};

export const Exemple: Story={
  render: ()=><Component></Component>
}

function Component(props:any){
  //Controle do estado do conteúdo (show/hide)
  const [step, setStep] = useState(0)
  const [allCompleted, setAllCompleted] = useState(false)

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
  </div>}
  </>
}
