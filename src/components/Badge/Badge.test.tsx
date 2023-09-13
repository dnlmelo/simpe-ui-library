import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Badge} from './Badge';
import { BadgeProps } from './Badge.types';

describe('<Badge />', () => {
  test('it should mount', () => {
    render(<Badge color='primary' text='2'/>);
    
    const badge = screen.getByTestId('Badge');
    
    expect(badge).toBeInTheDocument();
  });
  
  describe('- color attr', ()=>{
    const btTypes:BadgeProps["color"][] =[
      'critical',
      'critical-light',
      'info',
      'info-light',
      'primary',
      'primary-light',
      'success',
      'success-light',
      'white'
    ];
    
    btTypes.forEach((v)=>{
      test(`should render button ${v}`, () => {
        render(<Badge color={v} text='2'/>);
        expect(screen.getByText('2').getAttribute(`button-color-${v}`)).toBeDefined()
      }); 
    })
  })
  
});