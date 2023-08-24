import { FC } from 'react';
import './TextLink.scss';
import { TextLinkProps } from './TextLink.types';


const TextLink:FC<TextLinkProps> = ({children, ...res}:TextLinkProps) => {
  const color = res.color || 'normal'

  return <a 
    className={ `textLink textLink--color-${color}`} 
    data-testid="TextLink" 
    {...res}
  >
    {children}
  </a>
};

export default TextLink;
