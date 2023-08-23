import { FC, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import './Dialog.scss';
import { DialogProps } from './Dialog.types';

const Dialog:FC<DialogProps> = (props) => {
  const dialog = useRef({} as HTMLDialogElement);

  useEffect(()=>{
    document.getElementById(props.trigger)?.addEventListener('click', onClick.bind(this))
  }, [])

  function onClick(){
    console.log(dialog.current);
    dialog.current.showModal()
  }

  function onClose(value:boolean){
    dialog.current.close()
    props.onClose && props.onClose(value)
  }

  return(
    <>
    <dialog className='dialog' ref={dialog} data-testid="Dialog">
      <section>
        <h1 className='dialog-title'>{props.title}</h1>
        <p className='dialog-description'>{props.description}</p>
      </section>

      <form method="dialog">
        <Button 
          name='cancel'
          color='white' 
          text={props.cancelTitle || 'Cancelar'} 
          type={'reset'} 
          onClick={ ()=>onClose(false) }
        />

        <Button 
          name='confirm'
          color='primary' 
          value={1} 
          text={props.confirmTitle || 'Confirmar'} 
          type={'submit'} 
          onClick={ ()=> onClose(true) }
        />
      </form>
    </dialog>
    </>
  )
}

export default Dialog;
