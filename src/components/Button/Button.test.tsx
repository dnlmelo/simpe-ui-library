import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import { Button } from "./Button";
import { ButtonProps } from './Button.types';

describe("Button test", () => {
  test("Check Button in document", () => {
    render(<Button type="button" color="primary">Button</Button>)
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
        render(<Button type="button" color="primary">Button</Button>)
        expect(screen.getByRole('button').getAttribute(`button-color-${v}`)).toBeDefined()
      }); 
    })
   
  })

  describe('check size attr', ()=>{
    const btTypes:ButtonProps["size"][] =[
      'sm',
      'md',
      'lg',
    ];

    btTypes.forEach((v)=>{
      test(`should render button with ${v} scale`, () => {
        render(<Button type="button" color="primary" size={v}>Button</Button>)
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
        render(<Button type={v} color="primary">Button</Button>)
        expect(screen.getByRole('button').getAttribute('type')).toEqual(v)
      }); 
    })
  })
});