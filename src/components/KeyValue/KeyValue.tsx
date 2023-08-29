import { FC } from 'react';
import './KeyValue.scss';
import { KeyValueProps } from './KeyValue.types';

const KeyValue: FC<KeyValueProps> = (props) => {
  const classes = `keyValue keyValue-size--${props.size || 'md'}`

  return (
    <div className={classes} data-testid="KeyValue">
      <span className="keyText">{props.keyText}</span>
      <span className="valueText">{props.valueText}</span>
    </div>
  )
}

export default KeyValue;
