import { FC, ReactNode } from 'react';
import './EmptyState.scss';
import img from './emptyState.svg';

interface EmptyStateProps {
  /** Elementos ou Components React para descrever o estado */
  children: ReactNode;
}

export const EmptyState: FC<EmptyStateProps> = (props) => (
  <div className="emptyState" data-testid="EmptyState">
    <img src={img} alt="" />
    {props.children}
  </div>
);