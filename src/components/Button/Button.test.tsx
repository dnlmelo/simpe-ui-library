import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import { Button } from "./Button";
import { ButtonProps } from './Button.types';

describe("Button test", () => {
  test("Check Button in document", () => {
    render(<Button text="Button" type="button" color="primary"/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  });

  describe('- color attr', ()=>{
    const btTypes:ButtonProps["color"][] =[
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
        render(<Button text="Button" type="button" color={v} />)
        expect(screen.getByRole('button').getAttribute(`button-color-${v}`)).toBeDefined()
      }); 
    })
   
  })

  describe('icon attr', ()=>{
    test("should render Fontawesome icon by iconright attr", () => {
      render(<Button text="Button" type="button" color="primary" iconright='user'/>)
      expect(screen.getByRole('img', {hidden: true}).getAttribute('data-icon')).toBe('user')
    });

    test("should render Fontawesome icon by iconleft attr", () => {
      render(<Button text="Button" type="button" color="primary" iconleft='user'/>)
      expect(screen.getByRole('img', {hidden: true}).getAttribute('data-icon')).toBe('user')
    });

  })

  describe('scale attr', ()=>{
    const btTypes:ButtonProps["scale"][] =[
      'extralarge',
      'large',
      'normal',
      'small'
    ];

    btTypes.forEach((v)=>{
      test(`should render button with ${v} scale`, () => {
        render(<Button text="Button" type="button" color="primary" scale={v} />)
        expect(screen.getByRole('button').getAttribute(`button-size-${v}`)).toBeDefined()
      }); 
    })
  })

  describe('type attr', ()=>{
    const btTypes:ButtonProps["type"][] =[
      'button',
      'reset',
      'submit'
    ];

    btTypes.forEach((v)=>{
      test(`should render button with ${v} type`, () => {
        render(<Button text="Button" type={v} color="primary" />)
        expect(screen.getByRole('button').getAttribute('type')).toEqual(v)
      }); 
    })
  })
});