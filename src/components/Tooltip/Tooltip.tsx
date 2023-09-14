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
    const trigger = document.getElementById(triggerId)!
    setPosition(trigger.getBoundingClientRect());
    setHidden(false) 
  }

  const setPosition = (trigger:DOMRect)=>{
    const current = ref.current.getBoundingClientRect();
    let _left;
    const arrowHeight = 5; //arrow do tooltip
    const arrowWidth = 2; //arrow do tooltip
    const _top = (y === 'top'? 
      (trigger.top - current.height - arrowHeight) : 
      (trigger.top + trigger.height + arrowHeight))

    switch (x) {
      case 'center':
        _left = (()=>{
          const center = current.width * 0.5 
          const centerT = trigger.width * 0.5
          const diff = center - centerT;
          return trigger.left - diff;
        })()
        break;

      case 'right':
        _left = (trigger.right - current.width) + arrowWidth;
        break

      default:
        _left = trigger.left - arrowWidth;
    }

    ref.current.style.left = Math.round(_left) + 'px'
    ref.current.style.top = Math.round(_top) + 'px';
  }


  useEffect(()=>{
    const trigger = document.getElementById(triggerId)!
    trigger.addEventListener('mouseover', onMouseEnter)
    trigger.addEventListener('mouseleave', onMouseLeave) 
  }, [])

  return(
    createPortal(
    <div className={classes} aria-hidden={hidden} ref={ref} data-testid="Tooltip">
      {children}
    </div>, document.body
    )
  )
}