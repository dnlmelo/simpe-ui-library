import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './Badge';
import { BadgeProps } from './Badge.types';

describe('<Badge />', () => {
  test('it should mount', () => {
    render(<Badge color='primary' text='2' />);
    
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
        render(<Badge text="Button" color={v} />)
        expect(screen.getByRole('button').getAttribute(`button-color-${v}`)).toBeDefined()
      }); 
    })
    
  })
  
  describe('icon attr', ()=>{
    test("should render Fontawesome icon by iconright attr", () => {
      render(<Badge text="Badge" color="primary" iconright='user'/>)
      expect(screen.getByRole('img', {hidden: true}).getAttribute('data-icon')).toBe('user')
    });
    
    test("should render Fontawesome icon by iconleft attr", () => {
      render(<Badge text="Badge" color="primary" iconleft='user'/>)
      expect(screen.getByRole('img', {hidden: true}).getAttribute('data-icon')).toBe('user')
    });
    
  })
});