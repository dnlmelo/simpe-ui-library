export interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'>{
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
  