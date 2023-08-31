import {useState } from 'react';
import './Dropdown.scss';
import { Icon } from '../Icons/Icon';
import React from 'react';
import { DropdownProps } from './Dropdown.types';


const Dropdown = (props:DropdownProps) => {
  const [hidden, setHidden] = useState(true)
  const classes = `dropdown dropdown-size-${props.size || 'sm'} dropdown-color-${props.color || "default"}`

  return <div className={classes} data-testid="Dropdown">
    <button className='dropdown-button' onClick={()=>setHidden(!hidden)} >
        {props.label}
        <Icon name='chevron-down' size='sm'></Icon>
    </button>

    <ul className="dropdown-itens" aria-hidden={hidden}>
      {React.Children.map(
        props.children, 
        (child)=><li onClick={()=>setHidden(true)}>{child}</li>
      )}
    </ul>
  </div>
}

export default Dropdown;