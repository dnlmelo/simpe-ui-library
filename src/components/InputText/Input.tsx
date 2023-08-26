import { FC } from 'react';
import { Icon } from '../Icons/Icon';
import { InputProps } from './Input.types';
import './Input.scss';

const InputText: FC<InputProps> = (props) => {
  const { error, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `input input-size-${size} ${error? 'input-error': ''}`

  return (
  <div className={classes} data-testid="Input">
    <label htmlFor={res.id}>
      {infoMessage && <Icon name='info' size='sm' color="info"></Icon>}
      {label}
    </label>
    <input type='text' {...res} />
    {errorMessage && error? 
      <div 
        data-testid="errorMsg" 
        className='error-msg'
      >
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}

export default InputText;
