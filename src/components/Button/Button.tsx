import React from "react"
import './Button.scss'
import { ButtonProps } from "./Button.types"
import { getIcons } from "../Icons"

/**
 * Botão primário da Finvity
 **/
export const Button = (props:ButtonProps) =>{
    const size = 'button-size-'.concat(props.scale? props.scale : 'normal')
    const iconLeft = props.iconleft && getIcons(props.iconleft) 
    const iconRight = props.iconright && getIcons(props.iconright) 

    return (
    <button className={`button-base ${size} button-color-${props.color}` } {...props}>
        {iconLeft}
        {props.text}
        {iconRight}
    </button>
    )
} 