export interface TextareaProps extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'>{
    /** id do input. Deve ser acionado para utilizar o 'infoMessage' */
    id?: string

    /** Label do input */
    label?: string;

    /** Tamanho do input */
    size: 'sm'|'md'|'lg'

    /** Mensagem de informação do input */
    infoMessage?:string

    /** Mensagem de erro do input */
    errorMessage?:string

    /** Controle de estado de erro do input */
    error?:boolean
}
