import { FC } from 'react';
import './Tab.scss';
import { TabProps } from './Tab.types';
import { Icon } from '../Icons/Icon';

export const Tab: FC<TabProps> = (props) => {
  const classes = `tab tab-icon-${props.iconPos}`
  const {icon, svg} = props;

  const onClick = () => {
    props.iconAction && props.iconAction(props.label)
  }

  let IconOrSVG = ()=>{
    if(icon){
      return <Icon name={icon} size={'sm'} onClick={onClick}></Icon>
    }
    else if(svg) return svg
    else <></>
  };

  return (
  <div className={classes}
    data-testid="Tab" 
    data-active={props.active} 
    onClick={()=>props.onActive()}
  >
    {props.iconPos === 'left' && IconOrSVG() }
    {props.label}
    {props.iconPos === 'right' && IconOrSVG() }
  </div>)
}