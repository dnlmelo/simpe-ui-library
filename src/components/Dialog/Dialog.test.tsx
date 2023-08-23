/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dialog from './Dialog';
import React from 'react';

describe('<Dialog />', () => {
  test('it should mount', () => {
    render(<Dialog title='titulo' description='desc' trigger={'id'}/>);
    
    const dialog = screen.getByTestId('Dialog');

    expect(dialog).toBeInTheDocument();
  });

  test('check attr title', () => {
    render(<Dialog title='titulo' description='desc' trigger={'id'}/>);
    
    expect(screen.getByText('titulo').classList.contains('dialog-title')).toBeTruthy();
  });

  test('check attr description', () => {
    render(<Dialog title='titulo' description='desc' trigger={'id'}/>);
    
    expect(screen.getByText('desc').classList.contains('dialog-description')).toBeTruthy();
  });

  test('check attr trigger', () => {
    render(
    <>
      <button id='id'>x</button>
      <Dialog title='titulo' description='desc' trigger={'id'}/>
    </>);
    
    expect(screen.getByText('x').id).toEqual('id');
  });

  // TODO: Teste com useRef
  // test('check onClose callback', async() => {
  //   const fn = jest.spyOn(console, 'log');
  //   jest.spyOn(React, 'useRef').mockReturnValue({
  //     current: {close: ()=>null}
  //   })

  //   render(
  //   <>
  //     <button id='id'>x</button>
  //     <Dialog title='titulo' description='desc' trigger={'id'} onClose={(value)=>fn}/>
  //   </>);

  //   fireEvent.click(document.getElementById('id')!) 
  //   fireEvent.click(document.querySelector('[name=cancel]')!) 

  //   expect(fn).toHaveBeenCalled()
  // });
});