export interface IconProps{
    /** Nome do icon no FontAwesome */
    name: string

    /** cor de fundo para o ícone */
    color?: 'info'|'error'|'success'

    /** Tamanho do ícone */
    size: 'sm'| 'md'| 'lg'
}