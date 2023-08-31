import { ReactNode } from "react";

export interface DropdownProps {
  /** Opções clicáveis do dropdown. Recomendamos utilizar o componente TextLink */
  children: ReactNode;

  /** Tamanho do dropdown */
  size?: 'sm' | 'md' | 'lg'

  /** Label do dropdown */
  label: String;

  /** Cor do botão do dropdown */
  color?: 'primary' | 'info' 
}