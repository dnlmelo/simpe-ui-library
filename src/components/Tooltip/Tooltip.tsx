import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import './Tooltip.scss';
import { TooltipProps } from './Tooltip.types';
import { createPortal } from 'react-dom';

export const TooltipTrigger = (props:ReactNode)=> (<>{props}</>)

export const Tooltip: FC<TooltipProps> = (props) => {
  const {x, y, color = 'info', children, triggerId} = props;
  const [hidden, setHidden] = useState(true)
  const classes = `tooltip tooltip-color-${color} tooltip-position--${y}-${x}`;
  const ref = useRef({} as HTMLDivElement)

  const onMouseLeave = ()=> { 
    setHidden(true) 
  }

  const onMouseEnter = ()=> { 
    setPosition();
    setHidden(false) 
  }

  const setPosition = ()=>{
    let _left;
    const trigger = document.getElementById(triggerId)
    const triggerRect = trigger.getBoundingClientRect()
    const current = ref.current.getBoundingClientRect();
    const arrowHeight = 5; //arrow do tooltip
    const arrowWidth = 2; //arrow do tooltip
    const _top = (y === 'top'? 
      (triggerRect.top - current.height - arrowHeight) : 
      (triggerRect.top + triggerRect.height + arrowHeight)) + window.scrollY

    switch (x) {
      case 'center':
        _left = (()=>{
          const center = current.width * 0.5 
          const centerT = triggerRect.width * 0.5
          const diff = center - centerT;
          return triggerRect.left - diff;
        })()
        break;

      case 'right':
        _left = (triggerRect.right - current.width) + arrowWidth;
        break

      default:
        _left = triggerRect.left - arrowWidth;
    }

    ref.current.style.left = Math.round(_left) + 'px'
    ref.current.style.top = Math.round(_top) + 'px';
  }


  useEffect(()=>{
    const trigger = document.getElementById(triggerId)!
    trigger.addEventListener('mouseover', onMouseEnter)
    trigger.addEventListener('mouseleave', onMouseLeave) 
  }, [])

  return createPortal( 
      <div 
        className={classes} 
        aria-hidden={hidden} 
        ref={ref} 
        data-testid="Tooltip"
      > {children} </div>, 
      document.body
  )
}