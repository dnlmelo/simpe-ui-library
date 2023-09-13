/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {InputNumber} from './InputNumber';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<InputNumber size='md' value={1} readOnly={true} />);
    
    const input = screen.getByTestId('Input');

    expect(input).toBeInTheDocument();
  });

  test('check attr value', () => {
    render(<InputNumber size='md' value={1} readOnly={true} />);
    
    const input = screen.getByTestId('Input') as Element;

    expect(input.querySelector('input')?.value).toBe('1');
  });

  test('check attr size', () => {
    render(<InputNumber size='md' id='x' readOnly={true} />);
    
    const input = screen.getByTestId('Input') as Element;

    expect(input.classList.contains('input-size-md')).toBeTruthy()
  });

  test('check attr label', () => {
    render(<InputNumber size='md' id='x' label='label' readOnly={true} value={'x'} />);
    
    const label = screen.getByLabelText('label');

    expect(label).toBeInTheDocument()
  });

  test('check attr error', () => {
    render(<InputNumber size='md' error={true} value={1} readOnly={true} />);
    const input = screen.getByTestId('Input') as Element;

    expect(input.classList.contains('input-error')).toBe(true)
  });

  test('check attr errorMessage', () => {
    render(<InputNumber size='md' errorMessage='error' error={true}/>);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<InputNumber size='md' infoMessage='info' />);
    const input = screen.getByTestId('Input') as Element;

    expect(input.querySelector('svg')).toBeInTheDocument()
  });
});