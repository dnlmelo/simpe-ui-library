import { InputProps } from "../Input-base.types";

export interface InputRadioProps extends InputProps{
    /** Color do radio quando ativado */
    color?: 'success' | 'critical' | 'warning'
}
  