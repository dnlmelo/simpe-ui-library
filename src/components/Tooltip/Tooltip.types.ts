import { ReactNode } from "react";

export interface TooltipProps {
  /** Cor do tema do tooltip o default é 'info' */
  color?: 'info'|'error'|'success';

  /** Id do elemento que abre o tooltip */
  triggerId: string;

  /** Mensagem do tooltip */
  children: ReactNode;

  /** Posição horizontal do tooltip */
  x: 'center'|'left'|'right'

  /** Posição vertical do tooltip */
  y: 'top'|'bottom'
}