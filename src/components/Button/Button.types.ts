export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    /** Texto para apresentação do botão */
    text:string

    /** Tamanho do botão. O tamanho "normal" é o padrão*/
    scale?:'small'|'normal'|'large'|'extralarge'

    /** Habilita ou desabilita o botão com um boleano  */
    disabled?:boolean

    /** Tipo do botão */
    type:'button' | 'submit' | 'reset',

    /** Cor do tema a ser aplicado  */
    color: 'primary' | 'primary-light' | 'white' | 'critical' | 'critical-light' | 'info'| 'info-light' | 'success'| 'success-light'

    /** Elevação do dropshadow ser aplicado  */
    // elevation?: '1'|'2'|'3'|'4'

    /** Nome do ícone do FontAwesome a ser utilizado no lado esquerdo do texto */
    iconleft?: string

    /** Nome do ícone do FontAwesome a ser utilizado no lado right do texto */
    iconright?: string
}