export interface TextLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    /** Texto para apresentação do botão */
    text:string

    /** Habilita ou desabilita o botão com um boleano  */
    disabled?:boolean

    /** Cor do tema a ser aplicado  */
    color?: 'primary' | 'critical' | 'info'| 'success'

    /** Nome do ícone do FontAwesome a ser utilizado no lado esquerdo do texto */
    iconleft?: string

    /** Nome do ícone do FontAwesome a ser utilizado no lado right do texto */
    iconright?: string
}