import { Icon } from '../Icons/Icon';
import {Tooltip} from '../Tooltip/Tooltip';
import './Select.scss';

interface SelectProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'size'> {
  options: { value: string; label: string }[]
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

export const Select = (props:SelectProps) => {
  const { error, label, infoMessage, errorMessage, size, ...rest} = props
  const classes = `input select input-size-${size} ${error? 'input-error': ''}`

  return <div className={classes} data-testid="Select">
    {(label || infoMessage) && <label htmlFor={rest.id}>
      {label}
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${rest.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${rest.id}`} x={'left'} y={'top'}>{infoMessage}</Tooltip>
      </>
      }
    </label>}

    <select {...rest}>
      {props.options.map(
        (opt, i)=><option key={i} value={opt.value}>{opt.label}</option>
      )}
    </select>

    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg' >
        {errorMessage}
      </div> : ""
    }
  </div>
};
