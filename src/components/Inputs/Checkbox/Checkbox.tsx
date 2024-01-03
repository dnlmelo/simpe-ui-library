import { Icon } from '../../Icons/Icon';
import {Tooltip} from '../../Tooltip/Tooltip';
import { CheckboxProps } from './Checkbox.types';
import './Checkbox.scss';

export const Checkbox = (props:CheckboxProps) => {
  const { error, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `checkbox checkbox-size-${size} ${error? 'checkbox-error': ''}`

  return (
    <div className={classes} data-testid="Checkbox">
      <input 
        className="check-input" 
        type="checkbox" 
        {...res}
      />

      {(label || infoMessage) && <label className="check-label" htmlFor={res.id}>
        {props.label}
        {props.infoMessage && <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x={'left'} y={'top'}>{infoMessage}</Tooltip>
      </>}
      </label> }
      {errorMessage && error? 
        <div data-testid="errorMsg" className='error-msg'>
          {errorMessage}
        </div> : ""
      }
    </div>
  );
};