import { FC, ReactNode } from 'react';
import './Button.scss'
import { ButtonProps } from "./Button.types"

export const Button:FC<ButtonProps> = ({children, type, ...rest}) =>{
    const classes = [
        'button-base',
        `button-color-${rest.color}`,
        `button-size-${rest.size || 'md'}`
    ].join(' ')

    return (
    <button className={classes} {...rest}>
        {children}
    </button>
    )
} 