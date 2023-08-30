import { FC } from 'react';
import { Icon } from '../../Icons/Icon';
import './InputCurrency.scss';
import Tooltip from '../../Tooltip/Tooltip';
import { InputCurrencyProps } from './InputCurrency.types';
import IntlCurrencyInput from 'react-intl-currency-input';
import { currencyMask } from './CurrencyMaskConfig';

const InputCurrency: FC<InputCurrencyProps> = (props) => {
  const { error, label, infoMessage, errorMessage, size, ...res} = props
  const classes = `input input-size-${size} ${error? 'input-error': ''}`

  if(props.value && props.max > 0 && props.value > props.max){
    throw 'valor passado é maior que o máximo atribuído'
  }

  return (
  <div className={classes} data-testid="InputCurrency">
    <label htmlFor={res.id}>
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x='left' y='top'>{infoMessage}</Tooltip>
      </>
      }
      {label}
    </label>

    <IntlCurrencyInput currency="BRL" config={{ locale: 'pt-BR', ...currencyMask }} 
      {...res}
      defaultValue={props.defaulValue || 0}
    />

    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg'>
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}

export default InputCurrency;
