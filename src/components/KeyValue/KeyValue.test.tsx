/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {KeyValue} from './KeyValue';
import { KeyValueProps } from './KeyValue.types';

describe('<KeyValue />', () => {
  test('it should mount', () => {
    render(<KeyValue keyText='key' valueText='value' />);
    
    const keyValue = screen.getByTestId('KeyValue');

    expect(keyValue).toBeInTheDocument();
    expect(keyValue.querySelector('.keyText')?.textContent).toBe('key');
    expect(keyValue.querySelector('.valueText')?.textContent).toBe('value');
  });

  describe('check size attr', ()=>{
    const sizes:KeyValueProps['size'][] = [
      'lg',
      'md'
    ]
    sizes.forEach(s=>{
      test(`check size ${s}`, () => {
        render(<KeyValue size={s} keyText='key' valueText='value' />);
        
        const keyValue = screen.getByTestId('KeyValue');
    
        expect(keyValue).toBeInTheDocument();
        expect(keyValue.querySelector('.keyText')?.textContent).toBe('key');
        expect(keyValue.querySelector('.valueText')?.textContent).toBe('value');
      });
    })
  })
});