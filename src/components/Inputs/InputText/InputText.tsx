import { FC } from 'react';
import { Icon } from '../../Icons/Icon';
import { InputTextProps } from './InputText.types';
import './InputText.scss';
import {Tooltip} from '../../Tooltip/Tooltip';

export const InputText: FC<InputTextProps> = (props) => {
  const { error, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `input input-size-${size} ${error? 'input-error': ''}`

  return (
  <div className={classes} data-testid="Input">
    <label htmlFor={res.id}>
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x={'left'} y={'top'}>{infoMessage}</Tooltip>
      </>
      }
      {label}
    </label>
    <input type='text' {...res} />
    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}