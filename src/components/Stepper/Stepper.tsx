import { FC } from 'react';
import './Stepper.scss';

interface StepsProps {
  /** Index do Step ativo. Quando indefinido, o primeiro será ativado ao renderizar */
  activedStep?: number;

  /** Índices de steps completados ao iniciar.
   * Aceita um array de indíces ou a flag 'allBeforeActive. 
   * Se a Flag for passada. Os passos anteriores estarão com o estado de "completos"
   * */
  completedSteps: 'allBeforeActive' | 'all';

  /** Array com os labels do Step. Cada item será um step  */
  steps:string[];
}

export const Stepper: FC<StepsProps> = (props) => {
  const { activedStep = 0, completedSteps} = props;

  function setActived(i:number) {
    return activedStep === i
  }

  function setCompleted(i:number){
    if(completedSteps === 'all') return true;

    if(completedSteps === 'allBeforeActive'){
      return i < activedStep
    }
  }

  return (
  <div className='steps' data-testid="Steps">
    {props.steps.map((s, i)=>
      <div 
        key={i} 
        className='step' 
        data-actived={setActived(i)}
        data-completed={setCompleted(i)}
        data-name={`step-${i}`} 
      >
        <span className='step-count'>{i+1}</span>
        <span className='step-label'>{s}</span>
      </div>
    )}
  </div>)

}
