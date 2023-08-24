import { FC } from 'react';
import './Breadcrumb.scss';
import TextLink from '../TextLink/TextLink';
import { Icon } from '../Icons/Icon';

interface BreadcrumbProps {
  /** Array com objeto contendo o texto a ser exibido e o href do link */
  history:{
    text:string, 
    href?:string
  }[]
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => (
  <div className="breadcrumb" data-testid="Breadcrumb">
    {props.history.map((h, i)=>
      <TextLink 
        href={h.href} 
        key={i}
        data-current={i+1 == props.history.length}
      >
        {h.text} 
        {i+1 < props.history.length? <Icon name='chevron-right' size={'sm'} /> : ''} 
      </TextLink>
    )}
  </div>
);

export default Breadcrumb;
