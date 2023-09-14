import { FC } from 'react';
import './Tab.scss';
import { TabProps } from './Tab.types';
import { Icon } from '../Icons/Icon';

export const Tab: FC<TabProps> = (props) => {
  const classes = `tab tab-icon-${props.iconPos}`
  let icon = props.icon? <Icon name={props.icon} size={'sm'}></Icon> : '';

  return (
  <div className={classes}
    data-testid="Tab" 
    data-active={props.active} 
    onClick={()=>props.onActive()}
  >
    {props.iconPos == 'left' && icon }
    {props.label}
    {props.iconPos == 'right' && icon }
  </div>)
}