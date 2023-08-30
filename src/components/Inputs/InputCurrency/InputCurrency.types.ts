import { InputProps } from "../Input-base.types";

export interface InputCurrencyProps extends InputProps{
  max: number
  defaulValue?:number
  value?:number
}
  