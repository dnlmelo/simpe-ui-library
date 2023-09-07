export interface SwitchProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'>{
  /** Função disparada ao interagir com o component */
  onChange?:(boolean)=>any

  /** Controle de liga/desliga do switch */
  checked?: boolean

  /** Texto de descrição do componente */
  children?: string
}