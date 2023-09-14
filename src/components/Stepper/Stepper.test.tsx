/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Stepper} from './Stepper';

describe('<Stepper />', () => {
  const _steps = [
    'Step 1',
    'Step 2'
  ];
  test('it should mount', () => {
    render(<Stepper steps={_steps} completedSteps={'allBeforeActive'} />);
    const steps = screen.getByTestId('Steps');
    expect(steps).toBeInTheDocument();
  });

  test('check activedStep attr', ()=>{
    render(<Stepper steps={_steps} completedSteps={'allBeforeActive'} activedStep={1} />);
    const stepper = screen.getByTestId('Steps')
    const actived = stepper.querySelector('[data-actived=true]')
    expect(actived.textContent).toContain('Step 2')
  })

  test('check completeSteps attr with "allBeforeActive" value', ()=>{
    render(<Stepper steps={_steps} completedSteps={'allBeforeActive'} activedStep={1} />);
    const stepper = screen.getByTestId('Steps')
    const actived = stepper.querySelector('[data-actived=true]')
    const completed = stepper.querySelector('[data-completed=true]')
    expect(actived.textContent).toContain('Step 2')
    expect(completed.textContent).toContain('Step 1')
  })

  test('check completeSteps attr with "all" value', ()=>{
    render(<Stepper steps={_steps} completedSteps={'all'} activedStep={1} />);
    const stepper = screen.getByTestId('Steps')
    const completed = stepper.querySelectorAll('[data-completed=true]')
    expect(completed.length).toBe(_steps.length)
  })
});