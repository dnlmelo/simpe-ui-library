import { FC, KeyboardEvent, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import { InputNumberProps } from './InputNumber.types';
import './InputNumber.scss';
import { Tooltip } from '../../Tooltip/Tooltip';

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
    {(label || infoMessage) && <label htmlFor={res.id}>
      {label}
      {infoMessage && 
        <>
          <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
          <Tooltip color='info' triggerId={`info-${res.id}`} x='left' y='top'>{infoMessage}</Tooltip>
        </>
      }
    </label>}

    <input type='number' onKeyDown={_onKeyUp} {...res} value={value} />
    
    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}