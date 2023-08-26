import { useState } from 'react';
import './Collapse.scss';
import { Icon } from '../Icons/Icon';
import { CollapseProps } from './Collapse.types';

const Collapse = (props:CollapseProps) => {
  const [collapsed, setCollapse] = useState(props.collapsed)

  function toggleCollapse(): void {
    setCollapse(!collapsed)
  }

  return (
    <div className="collapse">
      <div className="collapse-header">
        <p className='text-normal-bold'>{props.title}</p>
        <div className="collapse-actions">
          <span onClick={toggleCollapse}>
            <Icon size='lg' name={collapsed? 'chevron-down': 'chevron-up'}></Icon> 
          </span>
        </div>
      </div>

      <div className='collapse-body' data-collapsed={collapsed}>
        {props.children}
      </div>
    </div>
  )
}

export default Collapse;