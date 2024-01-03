import React, { FC, useState } from 'react';
import './InputRange.scss';
import { InputRangeProps } from './InputRange.types';

export const InputRange: FC<InputRangeProps> = (props) => {
  const {label, onChange, minSuffix, maxSuffix, value, ...res} = props
  const classes = `inputRange`;
  const [val, setVal] = useState(value || 0)
  
  const _onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setVal(e.target.value)
    onChange && onChange(e)
  }

  return <div className={classes} data-testid="InputRange" >
    {label && <label htmlFor={res.id} className='inputRange-label'>
      {val} {label}
    </label>}

    <input {...res} type="range" value={val} onChange={_onChange}/>

    <div className='minMaxLabels' data-testid="minMaxLabels">
      <span>{res.min || ''} {minSuffix || ''} </span>
      <span>{res.max || ''} {maxSuffix || ''} </span>
    </div>
  </div>
}