import React, { FC } from 'react';
import './Breadcrumb.scss';
import TextLink from '../TextLink/TextLink';

interface BreadcrumbProps {
  /** Array com objeto contendo o texto a ser exibido e o href do link */
  history:{text:string, href?:string}[]
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => (
  <div className="breadcrumb" data-testid="Breadcrumb">
    {props.history.map((h, i)=>
      <TextLink 
        href={h.href} 
        text={h.text} 
        key={i}
        iconright={i+1 < props.history.length? 'chevron-right' : ''} 
        data-current={i+1 == props.history.length}
      />
    )}
  </div>
);

export default Breadcrumb;
