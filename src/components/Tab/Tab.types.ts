export interface TabProps {
    /** Flag para mudar o estado de ativo da tab */
    active?: boolean;
  
    /** Texto de rótulo da tab */
    label: string;
  
    /** Evento disparado ao clicar na tab */
    onActive:Function;
  
    /** Adiciona um ícone ao lado da label */
    icon?: string
    
    /** Posiciona o ícone à direita ou à esquerda */
    iconPos?: 'left'|'right'
  }
  