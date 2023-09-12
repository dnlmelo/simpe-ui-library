export interface IconProps{
    /** Id */
    id?:string

    /** Nome do icon no FontAwesome */
    name: string

    /** cor de fundo para o ícone */
    color?: 'info'|'error'|'success'|'attention'

    /** Tamanho do ícone */
    size: 'sm'| 'md'| 'lg'
}