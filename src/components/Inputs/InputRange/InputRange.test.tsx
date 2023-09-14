/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {InputRange} from './InputRange';

describe('<InputRange />', () => {
  test('it should mount', () => {
    render(<InputRange label='x'  />);
    
    const inputRange = screen.getByTestId('InputRange');

    expect(inputRange).toBeInTheDocument();
  });

  test('check minSuffix attr', ()=>{
    render(<InputRange label='x' minSuffix='min'  />);
    const minMaxLabels = screen.getByTestId('minMaxLabels');
    expect(minMaxLabels.textContent).toContain('min')
  })

  test('check maxSuffix attr', ()=>{
    render(<InputRange label='x' maxSuffix='max'/>);
    const minMaxLabels = screen.getByTestId('minMaxLabels');
    expect(minMaxLabels.textContent).toContain('max')
  })

  test('check min attr', ()=>{
    render(<InputRange label='x' min={10} minSuffix='min' value={5}/>);
    const minMaxLabels = screen.getByTestId('minMaxLabels');
    expect(minMaxLabels.textContent).toContain('10 min')
    expect(document.querySelector('input')!.value).toBe('10')
  })

  test('check max attr', ()=>{
    render(<InputRange label='x' max={10} maxSuffix='max' value={40}/>);
    const minMaxLabels = screen.getByTestId('minMaxLabels');
    expect(minMaxLabels.textContent).toContain('10 max')
    expect(document.querySelector('input')!.value).toBe('10')
  })

  test('check label attr', ()=>{
    render(<InputRange label='x' max={10} maxSuffix='max' value={10}/>);
    const label = screen.getByTestId('InputRange').querySelector('label')!;
    expect(label.textContent).toContain('10 x')
  })

  test('check onChange event', ()=>{
    const fn = jest.fn();
    render(<InputRange onChange={fn} label='x' max={10} maxSuffix='max'/>);
    const input = (document.querySelector('input')!);

    fireEvent.change(input, {target: {value: 4} })
    expect(fn).toHaveBeenCalled()
  })
});