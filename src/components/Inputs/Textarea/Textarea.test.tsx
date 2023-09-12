/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Textarea from './Textarea';

describe('<Textarea />', () => {
  test('it should mount', () => {
    render(<Textarea size={'md'} />);
    
    const textarea = screen.getByTestId('Textarea');

    expect(textarea).toBeInTheDocument();
  });

  test('check attr value', () => {
    render(<Textarea size='md' defaultValue={'x'}  />);
    
    const textarea = screen.getByTestId('Textarea');

    expect(textarea.querySelector('textarea')?.value).toBe('x');
  });

  test('check attr size', () => {
    render(<Textarea size='md' id='x' />);
    
    const textarea = screen.getByTestId('Textarea');

    expect(textarea.classList.contains('input-size-md')).toBeTruthy()
  });

  test('check attr label', () => {
    render(<Textarea size='md' id='x' label='label' defaultValue={'x'} />);
    
    const label = screen.getByLabelText('label');

    expect(label).toBeInTheDocument()
  });

  test('check attr error', () => {
    render(<Textarea size='md' error={true} />);
    const textarea = screen.getByTestId('Textarea');

    expect(textarea.classList.contains('input-error')).toBe(true)
  });

  test('check attr errorMessage', () => {
    render(<Textarea size='md' errorMessage='error' error={true} />);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<Textarea size='md' infoMessage='info' />);
    const textarea = screen.getByTestId('Textarea');

    expect(textarea.querySelector('svg')).toBeInTheDocument()
  });
});