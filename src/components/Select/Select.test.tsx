/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Select} from './Select';

describe('<Select />', () => {
  const options = [
    {
      value: 'valor 1',
      label: 'valor 1 com um texto maior'
    },
    {
      value: 'valor 2',
      label: 'valor 2'
    }
  ]
  test('it should mount', () => {
    render(<Select options={options} size='md'/>);
    
    const select = screen.getByTestId('Select');

    expect(select).toBeInTheDocument();
  });

  test('check attr size', () => {
    render(<Select size='md' id='x' options={options} />);
    
    const input = screen.getByTestId('Select');

    expect(input.classList.contains('input-size-md')).toBeTruthy()
  });

  test('check attr label', () => {
    render(<Select size='md' id='x' label='label' options={options} />);
    
    const label = screen.getByLabelText('label');

    expect(label).toBeInTheDocument()
  });

  test('check attr error', () => {
    render(<Select options={options} size='md' error={true} />);
    const input = screen.getByTestId('Select');

    expect(input.classList.contains('input-error')).toBe(true)
  });

  test('check attr errorMessage', () => {
    render(<Select options={options} size='md' errorMessage='error' error={true} />);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<Select options={options} size='md' infoMessage='info' />);
    const input = screen.getByTestId('Select');

    expect(input.querySelector('svg')).toBeInTheDocument()
  });

  test('check event onChange', () => {
    const fn = jest.fn()

    render(<Select size={'sm'} options={options} onChange={fn}/>);
    const select = screen.getByTestId('Select').querySelector('select')!;

    fireEvent.change(select, {target: {value: 'value 2'}})

    expect(fn).toHaveBeenCalled()
  });
});