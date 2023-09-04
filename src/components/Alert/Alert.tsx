import { FC } from 'react';
import './Alert.scss';
import { Icon } from '../Icons/Icon';
import { ActionPrimary, ActionSecondary, AlertProps } from './Alert.types';

const iconNames = {
  'attention': 'exclamation',
  'info': 'info',
  'error': 'xmark',
  'success': 'check'
}

export const Alert: FC<AlertProps> = (props) => {
  const classes = `alert alert-${props.type} alert-mode-${props.mode}`;
  let icon = <Icon name={iconNames[props.type]} size='md'></Icon>; 

  return <div className={classes} data-testid="Alert">
    <div className="alert-icon">
      {icon}
    </div>
    <div className="alert-content">
      {props.children}
    </div> 
  </div>
}

export const AlertDescription = (props)=>{
  return <div className="alert-description">{props.children}</div>
}

export const AlertTitle = (props)=>{
  return <div className="alert-title">{props.children}</div>
}

export const AlertActionPrimary = (props:ActionPrimary)=>{
  const {children, ...res} = props;
  return <button {...res} type='button' className='alert-action-primary'>{children}</button>
}

export const AlertActionSecondary = (props:ActionSecondary)=>{
  const {children, ...res} = props;
  return <button {...res} className='alert-action-secondary' type='button'>{children}</button>
}
