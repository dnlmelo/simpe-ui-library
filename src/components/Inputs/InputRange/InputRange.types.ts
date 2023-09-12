export interface InputRangeProps 
extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'|'placeholder'>{
    /** Label do input. O valor sempre aparece junto com a label.  */
    label?: string

    /** Valor mínimo. Padrão é 0  */
    min?: number 
  
    /** Valor máximo. Padrão é 100  */
    max?: number 
  
    /** Valor mínimo  */
    step?: number
  
    /** Representa o contexto do range do valor mínimo. 
     * Por exemplo: 1 ano ---- 10 anos. 
     * minSuffix: 'ano'
    */
    minSuffix?: string
  
    /** Representa o contexto do range do valor mínimo. 
     * Por exemplo: 1 ano ---- 10 anos. 
     * maxSuffix: 'anos'
    */
    maxSuffix?: string
  }