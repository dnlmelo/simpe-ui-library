import React, { FC } from 'react';
import './Textarea.scss';
import { Icon } from '../../Icons/Icon';
import {Tooltip} from '../../Tooltip/Tooltip';
import { TextareaProps } from './Textarea.types';


export const Textarea: FC<TextareaProps> = (props) => {
  const { error, label, infoMessage, errorMessage, size, ...res} = props;
  const classes = `input textarea input-size-${size} ${error? 'input-error': ''}`

  return <div className={classes} data-testid="Textarea">
    <label htmlFor={res.id}>
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x={'left'} y={'top'}>{infoMessage}</Tooltip>
      </>
      }
      {label}
    </label>

    <textarea {...res}></textarea>

    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
}