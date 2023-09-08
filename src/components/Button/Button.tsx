import { FC } from 'react';
import './Button.scss'
import { ButtonProps } from "./Button.types"

export const Button:FC<ButtonProps> = ({children, ...rest}) =>{
    const {size: scale, color, } = rest;
    const size = 'button-size-'.concat(scale? scale : 'md')

    return (
    <button className={`button-base ${size} button-color-${color}` } {...rest}>
        {children}
    </button>
    )
} 