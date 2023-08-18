export interface BadgeProps {
    /** Texto para apresentação do botão */
    text:string

    /** Tamanho do botão. O tamanho "normal" é o padrão*/
    scale?:'small'|'normal'

    /** Cor do tema a ser aplicado  */
    color: 'primary' | 'primary-light' | 'white' | 'critical' | 'critical-light' | 'info'| 'info-light' | 'success'| 'success-light'

    /** Nome do ícone do FontAwesome a ser utilizado no lado esquerdo do texto */
    iconleft?: string

    /** Nome do ícone do FontAwesome a ser utilizado no lado right do texto */
    iconright?: string
}