import { FC, KeyboardEvent, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import { InputNumberProps } from './InputNumber.types';
import './InputNumber.scss';

export const InputNumber: FC<InputNumberProps> = (props) => {
  const {value, error = false, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `input input-number input-size-${size} ${error? 'input-error': ''}`

  const _onKeyUp = (e: KeyboardEvent<HTMLInputElement>)=>{
    const keys = ['Backspace', 'Enter']
    if(!keys.includes(e.key) && !e.key.match(/(\d)|,|\./)) {
      e.preventDefault()
    }
  }

  return (
  <div className={classes} data-testid="Input">
    <label htmlFor={res.id}>
      {infoMessage && <Icon name='info' size='sm' color="info"></Icon>}
      {label}
    </label>

    <input type='number' onKeyDown={_onKeyUp} {...res} value={value} />
    
    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}