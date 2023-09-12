/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputRadio from './InputRadio';
import { InputRadioProps } from './InputText.types';

describe('<InputRadio />', () => {
  test('it should mount', () => {
    render(<InputRadio size={'lg'} />);
    const inputRadio = screen.getByTestId('InputRadio');
    expect(inputRadio).toBeInTheDocument();
  });

  describe('check attr size', () => {
    const sizes:InputRadioProps['size'][] = [
      'lg',
      'md'
    ]

    sizes.forEach(s =>{
      test(`check size ${s}`, ()=>{
        render(<InputRadio size={s} id='x' />);
        const input = screen.getByTestId('InputRadio');
        expect(input.classList.contains(`inputRadio-size-${s}`)).toBeTruthy()
      })
    })
  });


  test('check attr errorMessage', () => {
    render(<InputRadio size='md' errorMessage='error' error={true} />);
    const msg = screen.getByTestId('errorMsg');

    expect(msg.textContent).toEqual('error')
  });

  test('check attr infoMessage', () => {
    render(<InputRadio size='md' infoMessage='info' />);
    const input = screen.getByTestId('InputRadio');

    expect(input.querySelector('.icon')).toBeInTheDocument()
  });
});