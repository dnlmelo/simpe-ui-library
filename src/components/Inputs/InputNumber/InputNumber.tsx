import { FC, KeyboardEvent, useState } from 'react';
import { Icon } from '../../Icons/Icon';
import { InputNumberProps } from './InputNumber.types';
import './InputNumber.scss';

const InputNumber: FC<InputNumberProps> = (props) => {
  const { onKeyUp, onChange, error = false, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `input input-number input-size-${size} ${error? 'input-error': ''}`
  const [_error, setError] = useState(error)
  const _onKeyUp = (e: KeyboardEvent<HTMLInputElement>)=>{
    if( !e.key.match(/(\d)|,|\./)) {
      setError(true)
      return false
    }

    onKeyUp && onKeyUp(e)
    return e.key
  }

  return (
  <div className={classes} data-testid="Input">
    <label htmlFor={res.id}>
      {infoMessage && <Icon name='info' size='sm' color="info"></Icon>}
      {label}
    </label>

    <input type='number' onKeyUp={_onKeyUp} {...res} />
    
    {errorMessage && _error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}

export default InputNumber;