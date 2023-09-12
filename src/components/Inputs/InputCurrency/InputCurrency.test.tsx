/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputCurrency from './InputCurrency';

//o espaço entre R$ e 0 está "diferente" entre as strings
const trimValue = (value:string)=>value.replace(/\s/g, '')

describe('<InputCurrency />', () => {
  test('it should mount', () => {
    render(<InputCurrency max={0} size={'sm'} />);
    const inputCurrency = screen.getByTestId('InputCurrency');
    expect(inputCurrency).toBeInTheDocument();
  });

  test('it should show R$0,00', () => {
    render(<InputCurrency max={0} size={'sm'}/>);
    const inputCurrency = screen.getByTestId('InputCurrency');
    const value = trimValue(inputCurrency.querySelector('input')!.value)
    expect(value).toBe('R$0,00');
  });

  test('it should show R$ 1,00 as inital value', () => {
    render(<InputCurrency max={2} size={'sm'} value={1}/>);
    const inputCurrency = screen.getByTestId('InputCurrency');
    const value = trimValue(inputCurrency.querySelector('input')!.value)
    expect(value).toBe('R$1,00');
  });

  test('check max attr', () => {
    render(<InputCurrency max={3} size={'sm'}/>);
    const inputCurrency = screen.getByTestId('InputCurrency');
    const input = inputCurrency.querySelector('input')!
    fireEvent.change(input, {target: {value: '4.44'}})
    expect(trimValue(input.value)).toBe('R$0,00');

    fireEvent.change(input, {target: {value: '0.44'}})
    expect(trimValue(input.value)).toBe('R$0,44');
  });

  test('check event onChange', () => {
    const fn = jest.fn()

    render(<InputCurrency max={3} size={'sm'} onChange={fn}/>);
    const inputCurrency = screen.getByTestId('InputCurrency');
    const input = inputCurrency.querySelector('input')!
    fireEvent.change(input, {target: {value: '4.44'}})

    expect(fn).toHaveBeenCalled()
  });
});