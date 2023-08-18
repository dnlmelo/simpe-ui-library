import './Checkbox.scss';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = (props:CheckboxProps) => {
  const id = 'check-'.concat(new Date().getTime().toString())

  return (
    <div className="checkbox-base" data-testid="Checkbox">
      <input 
        className="check-input" 
        type="checkbox" 
        id={id} 
        {...props}
      />

      <label className="check-label" htmlFor={id}>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
