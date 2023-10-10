import { ReactNode } from 'react';
import './CardSection.scss';

interface CardSectionProps {
  /** Conteúdo do card */
  children:ReactNode

  /** retira o shadow do card */
  noElevation?: boolean
}

export const CardSection = (props:CardSectionProps) => (
  <div className={`cardSection ${!props.noElevation && 'elevation-1'}`} data-testid="CardSection">
    {props.children} 
  </div>
);
