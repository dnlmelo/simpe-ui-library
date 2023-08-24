import { ReactNode } from "react"

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    /** Poder um texto e/ou ícone */
    children:ReactNode
    /** Tamanho do botão. O tamanho "normal" é o padrão*/
    scale?:'small'|'normal'|'large'|'extralarge'

    /** Tipo do botão */
    type:'button' | 'submit' | 'reset',

    /** Cor do tema a ser aplicado  */
    color: 'primary' | 'primary-light' | 'white' | 'critical' | 'critical-light' | 'info'| 'info-light' | 'success'| 'success-light'

}