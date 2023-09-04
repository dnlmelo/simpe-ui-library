import { InputProps } from "../Input-base.types";

export interface InputCurrencyProps extends InputProps{
  /** Número máximo Permitido. Pode ser um Inteiro ou Float */
  max: number

  /** Valor inicial do input, se não for passado, inciará com 0 (R$0,00)*/
  value?:number
}
  