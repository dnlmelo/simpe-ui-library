import { getIcons } from '../Icons';
import './Badge.scss';
import { BadgeProps } from './Badge.types';

const Badge = (props:BadgeProps) => {
  const size = 'badge-size-'.concat(props.scale? props.scale : 'normal')
  const iconLeft = props.iconleft && getIcons(props.iconleft) 
  const iconRight = props.iconright && getIcons(props.iconright) 
  
  return(
    <div className={`badge-base ${size} badge-color-${props.color}`} data-testid="Badge">
      {iconLeft}
      {props.text}
      {iconRight} 
    </div>
    )
  };
  
  export default Badge;
  