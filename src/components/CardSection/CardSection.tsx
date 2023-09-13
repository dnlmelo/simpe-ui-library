import { ReactNode } from 'react';
import './CardSection.scss';

interface CardSectionProps {
  /** Conteúdo do card */
  children:ReactNode
}

export const CardSection = (props:CardSectionProps) => (
  <div className="cardSection" data-testid="CardSection">
    {props.children} 
  </div>
);
