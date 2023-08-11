import { getIcons } from '../Icons';
import './TextLink.scss';
import { TextLinkProps } from './TextLink.types';


const TextLink= (props:TextLinkProps) => {
    const iconLeft = props.iconleft && getIcons(props.iconleft, 'left') 
    const iconRight = props.iconright && getIcons(props.iconright, 'right')
    const color = props.color || 'normal'

  return (
  <a className={ `textLink textLink--color-${color}`} 
    data-testid="TextLink" {...props}
  >
    {iconLeft}
    {props.text}
    {iconRight}
  </a>)
};

export default TextLink;
