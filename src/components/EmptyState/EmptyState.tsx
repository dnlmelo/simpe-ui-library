import { FC, ReactNode } from 'react';
import './EmptyState.scss';
import img from './emptyState.png';

interface EmptyStateProps {
  /** Elementos ou Components React para descrever o estado */
  children: ReactNode;
}

const EmptyState: FC<EmptyStateProps> = (props) => (
  <div className="emptyState" data-testid="EmptyState">
    <img src={img} alt="" />
    {props.children}
  </div>
);

export default EmptyState;