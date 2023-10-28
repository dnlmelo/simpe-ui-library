import { ReactNode } from "react";

export interface DialogProps {
  /** Id do elemento html ou component clicável que ativa a Dialog */
  trigger:string

  /** Conteúdo do Dialog () */
  children?: ReactNode

  /** Texto para o botão de confirmar uma ação */
  confirmTitle?: string;

  /** Texto para o botão de cancelar uma ação */
  cancelTitle?: string;

  /** Texto descritivo da Dialog */
  description: string;

  /** Título descritivo da Dialog */
  title: string;

  /** Ação executada ao fechar a Dialog. Ao confimar retorna TRUE, ao cancelar retorna FALSE */
  onClose?:(value:boolean)=>any,

}