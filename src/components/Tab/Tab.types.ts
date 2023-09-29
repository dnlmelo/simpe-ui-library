import { ReactNode } from "react";

export interface TabProps {
    /** Flag para mudar o estado de ativo da tab */
    active?: boolean;
  
    /** Texto de rótulo da tab */
    label: string;
  
    /** Evento disparado ao clicar na tab */
    onActive:Function;
  

    /** Nome do ícone do pacote FontAwesome a ser adiconado ao lado da label. 
     * */
    icon?: string

    /*
     * Adicona um SVG caso o ícone não estiver no pacote FontAwesome 
    */
    svg?: ReactNode 

    /** Posiciona o ícone à direita ou à esquerda */
    iconPos?: 'left'|'right'
  }
  