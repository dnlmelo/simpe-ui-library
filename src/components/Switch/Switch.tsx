import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './Switch.scss';
import { SwitchProps } from './Switch.type';

export const Switch: FC<SwitchProps> = (props) => {
  const { onChange, checked } = props;
  const [_checked, setChecked] = useState(checked || false)
  const classes = 'switch';

  function _onChange(e:ChangeEvent<HTMLInputElement>){
    setChecked(e.target.checked);
    onChange && onChange(e.target.checked)
  }
  useEffect(()=>{
    setChecked(props.checked)
  }, [props.checked])

  return <>
    {props.children && <span className='switch-desc'>{props.children}</span>}
    <label className={classes} data-testid="Switch">
      <input type="checkbox" onChange={_onChange} value={'1'} checked={_checked} />
      <span className="slider"></span>
    </label>
  </>
}
