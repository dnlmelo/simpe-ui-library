import { FC } from 'react';
import { Icon } from '../../Icons/Icon';
import './InputCurrency.scss';
import {Tooltip} from '../../Tooltip/Tooltip';
import { InputCurrencyProps } from './InputCurrency.types';
import IntlCurrencyInput from 'react-intl-currency-input';
import { currencyMask } from './CurrencyMaskConfig';

export const InputCurrency: FC<InputCurrencyProps> = (props) => {
  const { error, label, infoMessage, errorMessage, size, value, ...res} = props
  const classes = `input input-size-${size} ${error? 'input-error': ''}`

  if(props.value && props.max > 0 && Number(props.value) > props.max){
    throw 'valor passado é maior que o máximo atribuído';
  }

  return (
  <div className={classes} data-testid="InputCurrency">
    {(label || infoMessage) && <label htmlFor={res.id}>
      {label}
      {infoMessage && 
      <>
        <Icon name='info' size='sm' color="info" id={`info-${res.id}`}></Icon>
        <Tooltip color='info' triggerId={`info-${res.id}`} x='left' y='top'>{infoMessage}</Tooltip>
      </>
      }
    </label>}

    <IntlCurrencyInput currency="BRL" config={{ locale: 'pt-BR', ...currencyMask }} 
      {...res}
      defaultValue={value}
    />

    {errorMessage && error? 
      <div data-testid="errorMsg" className='error-msg'>
        {errorMessage}
      </div> : ""
    }
  </div>
  );
}