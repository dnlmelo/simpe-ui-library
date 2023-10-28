import ReactDOM from 'react-dom';
import { InputCurrency, InputRange, KeyValue, Tooltip } from './components';
import { useState } from 'react';

function App(){
    const [u, s] = useState('')

    return <>
        <InputRange value={'1'}></InputRange>
        <span id='xxx'>xxx</span>
        <Tooltip triggerId='xxx' x={'center'} y={'top'} > tooltip </Tooltip>
        <KeyValue size='sm' keyText='text' valueText='value'></KeyValue>
    </>
}

ReactDOM.render(<App />, document.getElementById('root'));