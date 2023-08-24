import { FC } from 'react';
import './Button.scss'
import { ButtonProps } from "./Button.types"

export const Button:FC<ButtonProps> = ({children, ...rest}) =>{
    const {scale, color, } = rest;
    const size = 'button-size-'.concat(scale? scale : 'normal')

    return (
    <button className={`button-base ${size} button-color-${color}` } {...rest}>
        {children}
    </button>
    )
} 