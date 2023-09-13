import { FC } from 'react';
import './Badge.scss';
import { BadgeProps } from './Badge.types';

export const Badge:FC<BadgeProps> = (props) => {
  const size = `badge-size-${props.size || 'sm'}`
  const classes = `badge-base ${size} badge-color-${props.color}`; 

  return(
    <div className={classes} data-testid="Badge">
      {props.text}
    </div>
  )
};
  