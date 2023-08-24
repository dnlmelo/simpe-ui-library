import { ReactNode } from "react"

export interface TextLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    /** Texto do link, pode conter ícones */
    children:ReactNode
    /** Cor do tema a ser aplicado  */
    color?: 'primary' | 'critical' | 'info'| 'success'
}