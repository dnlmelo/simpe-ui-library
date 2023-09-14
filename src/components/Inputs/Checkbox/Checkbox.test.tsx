/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Checkbox} from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('<Checkbox />', () => {
  test('it should mount', () => {
    render(<Checkbox size={'lg'} />);
    const inputRadio = screen.getByTestId('Checkbox');
    expect(inputRadio).toBeInTheDocument();
  });

  describe('check attr size', () => {
    const sizes:CheckboxProps['size'][] = [
      'lg',
      'md'
    ]

    sizes.forEach(s =>{
      test(`check size ${s}`, ()=>{
        render(<Checkbox size={s} id='x' />);
        const input = screen.getByTestId('Checkbox');
        expect(input.classList.contains(`checkbox-size-${s}`)).toBeTruthy()
      })
    })
  });


  test('check attr errorMessage', () => {
    render(<Checkbox size='md' errorMessage='error' error={true} />);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<Checkbox size='md' infoMessage='info' />);
    const input = screen.getByTestId('Checkbox');

    expect(input.querySelector('.icon')).toBeInTheDocument()
  });
});