import { FC } from 'react';
import './Tab.scss';
import { TabProps } from './Tab.types';
import { Icon } from '../Icons/Icon';

export const Tab: FC<TabProps> = (props) => {
  const classes = `tab tab-icon-${props.iconPos}`
  const {icon, svg} = props;

  let _icon = (()=>{
      if(icon) 
        <Icon name={icon} size={'sm'}></Icon>
      else if(svg) return svg
  })();

  return (
  <div className={classes}
    data-testid="Tab" 
    data-active={props.active} 
    onClick={()=>props.onActive()}
  >
    {props.iconPos === 'left' && _icon }
    {props.label}
    {props.iconPos === 'right' && _icon }
  </div>)
}