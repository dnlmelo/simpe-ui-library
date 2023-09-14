import { FC, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import './Dialog.scss';
import { DialogProps } from './Dialog.types';

export const Dialog:FC<DialogProps> = (props) => {
  const dialog = useRef({} as HTMLDialogElement);
  const { cancelTitle = 'cancelar', confirmTitle = 'confirmar' } = props  
  useEffect(()=>{
    document.getElementById(props.trigger)?.addEventListener('click', onClick)
  }, [])

  function onClick(){
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
          type={'reset'} 
          onClick={ ()=>onClose(false) }
        >{cancelTitle}</Button>

        <Button 
          name='confirm'
          color='primary' 
          type={'submit'} 
          onClick={ ()=> onClose(true) }
        >{confirmTitle}</Button>
      </form>
    </dialog>
    </>
  )
}
