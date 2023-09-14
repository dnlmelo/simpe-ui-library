/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {InputText} from './InputText';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<InputText size='md' />);
    
    const input = screen.getByTestId('Input');

    expect(input).toBeInTheDocument();
  });

  test('check attr value', () => {
    render(<InputText size='md' defaultValue={'x'}  />);
    
    const input = screen.getByTestId('Input') as HTMLInputElement;

    expect(input.querySelector('input')?.value).toBe('x');
  });

  test('check attr size', () => {
    render(<InputText size='md' id='x' />);
    
    const input = screen.getByTestId('Input') as HTMLInputElement;

    expect(input.classList.contains('input-size-md')).toBeTruthy()
  });

  test('check attr label', () => {
    render(<InputText size='md' id='x' label='label' defaultValue={'x'} />);
    
    const label = screen.getByLabelText('label');

    expect(label).toBeInTheDocument()
  });

  test('check attr error', () => {
    render(<InputText size='md' error={true} />);
    const input = screen.getByTestId('Input') as HTMLInputElement;

    expect(input.classList.contains('input-error')).toBe(true)
  });

  test('check attr errorMessage', () => {
    render(<InputText size='md' errorMessage='error' error={true} />);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<InputText size='md' infoMessage='info' />);
    const input = screen.getByTestId('Input') as HTMLInputElement;

    expect(input.querySelector('svg')).toBeInTheDocument()
  });
});