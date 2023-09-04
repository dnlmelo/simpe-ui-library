import { ReactNode } from "react"

export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
    /** Poder um texto e/ou ícone */
    children:ReactNode
    /** Tamanho do botão. O tamanho "normal" é o padrão*/
    size?:'sm'|'md'|'lg'

    /** Tipo do botão */
    type:'button' | 'submit' | 'reset',

    /** Cor do tema a ser aplicado  */
    color: 
        'attention' |
        'attention-light' |
        'primary' | 
        'primary-light' | 
        'white' | 
        'critical' | 
        'critical-light' | 
        'info' | 
        'info-light' |
        'success'| 
        'success-light'
}